const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();
const port = process.env.port || 3001;

app.get("/", (req,res) => {
    res.send("Hello UTU Bmiit ");
})
app.post("/gym",(req , res) => {
    res.send("Hello UTU");
})

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})