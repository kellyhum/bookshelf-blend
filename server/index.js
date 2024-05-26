// code from https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/
// server/index.js
const shelf1 = require("../client/src/shelf1.json");
const express = require("express");
const app = express(); // start app
const PORT = 3001;

let initialData = shelf1.data;

app.get("/api", (req, res) => {
    res.json({ message: `${initialData.map((book) => book.author)}` });
});

// start server
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
