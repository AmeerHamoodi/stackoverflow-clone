const express = require("express");
const app = express();

app.listen(2000, () => {
    console.log("Server started!");
});

app.use(express.static(__dirname + "/client", {
    extensions: ["html"]
}));
app.use(express.json());