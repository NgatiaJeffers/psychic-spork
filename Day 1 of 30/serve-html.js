var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    console.log("Port Number : 3000");
    // Change the MIME type from "text/plain" to "text/html"
    res.writeHead(200, { "Content-Type": "text/plain" });
    // reading the content file
    fs.readFile("index.html", (err, data) => {
      // Checking for errors
      if (err) throw err;

      console.log("Operation Success");
      // Sending the response
      res.end(data);
    });
  })
  .listen(3001);
