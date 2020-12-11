const fs = require("fs");

const inputText = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(inputText);
console.log("File reading finished");

const outputText = `This is all about Avocado. ${inputText}`;
fs.writeFileSync("./txt/output.txt", outputText);
console.log("File writting finished");

const appendText = `\nCreated at: ${new Date().toLocaleDateString()}`;
fs.appendFileSync("./txt/output.txt", appendText);
console.log("File appending finished");

fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
    if (err) return console.log("Something went wrong!");
    fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
        fs.writeFile(`./txt/final.txt`, data2, "utf-8", (err) => {
            fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
                fs.appendFile(`./txt/final.txt`, `\n${data3}`, "utf-8", (err) => {
                    console.log("File processing finished");
                });
            });
        });
    });
});
console.log("File processing start");
