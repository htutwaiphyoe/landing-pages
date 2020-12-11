const http = require("http");
const url = require("url");
const fs = require("fs");
// Top level code
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`);
const datObj = JSON.parse(data);
// create server
const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/html",
            "my-headers": "ok",
        });
        res.end("<h1>Home</h1>");
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
