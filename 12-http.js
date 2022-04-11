const http = require("http");
const server = http.createServer((req, res) => {
  // console.log(req);
  if (req.url === "/") {
    res.end("Welcome to our home page.");
  }
  if (req.url === "/about") {
    res.end("Here is out about history.");
  }
  res.end(`
  <h1>Oops!</h1>
  <p>Can't seem to find the page you are looking for <p>
  <a href="/">back home</a>
  `);
});

server.listen(5500);
