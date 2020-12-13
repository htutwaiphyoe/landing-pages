const http = require("http");
const url = require("url");
const fs = require("fs");
const slugify = require("slugify");
const { replaceTemplate } = require("./modules/utils");

// Top Level Code

// Data
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");

// Adding slug
const dataObj = JSON.parse(data).map((el) => {
    el.slug = slugify(el.productName, { lower: true });
    return el;
});

// Reading template
const overviewTemplate = fs.readFileSync(`${__dirname}/templates/overviewTemplate.html`, "utf-8");
const cardTemplate = fs.readFileSync(`${__dirname}/templates/cardTemplate.html`, "utf-8");
const productTemplate = fs.readFileSync(`${__dirname}/templates/productTemplate.html`, "utf-8");

// Creating server
const server = http.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url);
    const params = new URLSearchParams(query);
    if (pathname === "/") {
        const cards = dataObj.map((el) => replaceTemplate(el, cardTemplate)).join("");
        const overview = overviewTemplate.replace(/{%PRODUCT_CARDS%}/g, cards);
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(overview);
    } else if (pathname === "/product") {
        const product = replaceTemplate(
            dataObj.find((el) => el.slug === params.get("p")),
            productTemplate
        );
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

// Listening server
server.listen("8000", "127.0.0.1", () => {
    console.log("Server listening...");
});
