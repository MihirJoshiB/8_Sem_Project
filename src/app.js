const express = require("express");
require("./db/conn");
const res = require("express/lib/response");
const app = express();
const port = process.env.port || 8000;

 
app.post("/gym",(req , res) => {
    res.send("Hello UTU");
})

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})