const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    let searchQuery = req.query.search;
    res.send("Hello World! You searched for " + searchQuery);
});

app.get("/json", (req, res) => {
    let lat = req.query.lat;
    let lng = req.query.lng;
    res.send(`You searched for Lat: ${lat} and Lng: ${lng}`);
});

app.get("/chocolate", function (req, res) {
    res.send("Mm chocolate :O");
});

app.get("/node", function (req, res) {
    res.send("Welcome to the Node.js endpoint!");
});

app.get("/codeyourfuture", function (req, res) {
    res.send("Welcome to CodeYourFuture!");
});

// Add a route for /multiply
app.get("/multiply", (req, res) => {
    let value1 = parseFloat(req.query.value1);
    let value2 = parseFloat(req.query.value2);

    // Check if the values are numbers
    if (isNaN(value1) || isNaN(value2)) {
        res.send("Please provide two numeric values.");
    } else {
        let result = value1 * value2;
        res.send(`The result is ${result}`);
    }
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
