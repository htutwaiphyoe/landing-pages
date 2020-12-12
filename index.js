const http = require("http");
const url = require("url");
const fs = require("fs");
const { replaceTemplate } = require("./modules/utils");

// Top level code
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const overviewTemplate = fs.readFileSync(`${__dirname}/templates/overviewTemplate.html`, "utf-8");
const cardTemplate = fs.readFileSync(`${__dirname}/templates/cardTemplate.html`, "utf-8");
const productTemplate = fs.readFileSync(`${__dirname}/templates/productTemplate.html`, "utf-8");
const dataObj = JSON.parse(data);

// create server
const server = http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url);
    const params = new URLSearchParams(query);
    if (pathname === "/") {
        const cards = dataObj.map((el) => replaceTemplate(cardTemplate, el)).join("");
        const overview = overviewTemplate.replace(/{%PRODUCT_CARDS%}/g, cards);
        res.writeHead(200, {
            "Content-Type": "text/html",
        });
        res.end(overview);
    } else if (pathname === "/products") {
        const productData = dataObj[params.get("id")];
        const product = replaceTemplate(productTemplate, productData);
        res.writeHead(200, {
            "Content-Type": "text/html",
        });
        res.end(product);
    } else if (pathname === "/api") {
        res.writeHead(200, {
            "Content-Type": "application/json",
        });
        res.end(data);
    } else {
        res.writeHead(404, {
            "Content-Type": "text/html",
        });
        res.end("<h1>Page not found</h1>");
    }
});

// listen server
server.listen(8000, "127.0.0.1", () => {
    console.log("Server listening...");
});
