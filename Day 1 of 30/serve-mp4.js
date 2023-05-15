var http = require("http")
var fs = require("fs");

http.createServer(function (req, res) {
    console.log("Port Number:3000");
    // Change the MIME type to "video/mp4"
    res.writeHead(200, {"Content-Type": "video/mp4"});
    fs.existsSync("video.mp4", function(exists) {
        if (exists) {
            fs.createReadStream("video.mp4").pipe(res);
        } else {
            res.end("File Not Found!!");
        }
    })
}).listen(3000);