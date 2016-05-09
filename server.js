var express = require("express"),
    path = require("path"),
    fs = require("fs");

var animalData;
var publicPath = path.join(__dirname, "public");

var app = express();
app.use("/", express.static(publicPath));

// get the data
fs.readFile(path.join(publicPath, "data/AnimalsData.json"), 'utf8', function (err,data) {
    if (err) {
        throw err;
    }
    animalData = JSON.parse(data);
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/data", function (req, res) {
    res.contentType("application/json");
    res.json(animalData);
})

app.listen(3000, function () {
    console.log("Server listen at http://localhost:3000");
})
