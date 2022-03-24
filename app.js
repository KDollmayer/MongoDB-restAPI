const express = require("express");
const mongoose = require("mongoose")
require('dotenv').config()

const app = express()
const PORT = 3000;


app.get("/", (req, res) => {
  res.send("index.ejs");
});

 mongoose.connect(process.env.keyMongoDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then(() => {
    console.log("Databas connected")
}).catch(err => {
    console.log("Databas not connected" + err)
})

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});