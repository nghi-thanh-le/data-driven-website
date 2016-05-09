var express = require("express"),
    path = require("path"),
    morgan = require("morgan"),
    fs = require("fs"),
    animalData = require("./modules/animalData.js");

var app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, function () {
    console.log("Server listen at http://localhost:3000");
})
