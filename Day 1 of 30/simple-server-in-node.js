var http = require("http");

var host = "127.0.0.1";
var port = 3000;

var server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });
  console.log("Server Working!");
  res.end("Server Working Success!");
});

server.listen(port, host, (error) => {
  if (error) {
    return console.log("Error occured: ", error);
  }

  console.log(`Server is listening on port: ${port}`);
});
