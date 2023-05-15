var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
    console.log("Port Number: 3000");
    // Change MIME Type to "audio/mp3"

    res.writeHead(200, {"Content-Type": "audio/mp3"});
    // Write File Data to Response
    fs.exists("audio.mp3", function(exists) {
        if (exists) {
            fs.createReadStream("audio.mp3").pipe(res);
            } else {
                res.end("File not found");
            }
    })
}).listen(3000);