const http = require("http");
const url = require("url");
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
