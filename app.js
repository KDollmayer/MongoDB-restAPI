const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
require('dotenv').config()
const cors = require("cors")

const app = express()
const PORT = 3000;
app.use(cors())

app.use(bodyParser.json())
const postsRoute = require('./routes/posts.js')

app.use("/posts", postsRoute)



app.get("/", (req, res) => {
  res.send("Home");
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