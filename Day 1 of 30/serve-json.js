var http = require("http");
var fs = require("fs");
console.log("Serve will listen at: 127.0.01:3000");
http.createServer(function (req, res) {
    // Change the MIME type to "application/json"
    res.writeHead(200, {"Content-Type": "application/json"});
    // Create a JSON
    let json_reponse = {
        status: 200,
        message: "Successful",
        result: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        code: 2000
    }
    console.log("Server Running"),
    res.end(JSON.stringify(json_reponse));
}).listen(3000);