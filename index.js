const http = require("http");

// create server
const server = http.createServer((req, res) => {
    console.log("Request reached");
    res.end("Hello from node server");
});

// listen server
server.listen(8000, "127.0.0.1", () => {
    console.log("Server listening...");
});
