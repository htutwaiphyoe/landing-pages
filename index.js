const http = require("http");
const url = require("url");
const fs = require("fs");
// Top level code
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const overviewTemplate = fs.readFileSync(`${__dirname}/templates/overviewTemplate.html`, "utf-8");
const cardTemplate = fs.readFileSync(`${__dirname}/templates/cardTemplate.html`, "utf-8");
const productTemplate = fs.readFileSync(`${__dirname}/templates/productTemplate.html`, "utf-8");
const dataObj = JSON.parse(data);

const replaceTemplate = (template, data) => {
    let output = template.replace(/{%ID%}/g, data.id);
    output = output.replace(/{%PRODUCT_NAME%}/g, data.productName);
    output = output.replace(/{%IMAGE%}/g, data.image);
    output = output.replace(/{%FROM%}/g, data.from);
    output = output.replace(/{%NUTRIENTS%}/g, data.nutrients);
    output = output.replace(/{%QUANTITY%}/g, data.quantity);
    output = output.replace(/{%PRICE%}/g, data.price);
    output = output.replace(/{%DESCRIPTION%}/g, data.description);
    if (!data.organic) output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");

    return output;
};
// create server
const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/") {
        const cards = dataObj.map((el) => replaceTemplate(cardTemplate, el)).join("");
        const overview = overviewTemplate.replace(/{%PRODUCT_CARDS%}/g, cards);
        res.writeHead(200, {
            "Content-Type": "text/html",
        });
        res.end(overview);
    } else if (req.url === "/products") {
        res.writeHead(200, {
            "Content-Type": "text/html",
            "my-headers": "ok",
        });
        res.end("<h1>Products</h1>");
    } else if (req.url === "/api") {
        res.writeHead(200, {
            "Content-Type": "application/json",
        });
        res.end(data);
    } else {
        res.writeHead(404, {
            "Content-Type": "text/html",
            "my-headers": "ok",
        });
        res.end("<h1>Page not found</h1>");
    }
});

// listen server
server.listen(8000, "127.0.0.1", () => {
    console.log("Server listening...");
});
