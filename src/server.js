// Initialization
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Note = require('./models/note');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoDbPath = "mongodb+srv://smartsaurabh2002:qbnm74mKAbhOuxZU@cluster0.jyohy4a.mongodb.net/notesdb";
mongoose.connect(mongoDbPath).then(function () {
    app.get("/", function (req, res) {
        const response = { statuscode: res.statusCode, message: "API Works!" };
        res.json(response);
    });

    const noteRouter = require('./routes/Note');
    app.use("/notes", noteRouter);
});

// Starting the server on a PORT
const PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
    console.log("Server started at PORT: " + PORT);
});