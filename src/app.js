const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const { required } = require("nodemon/lib/config");
require("./db/conn");
 const Equipment = require("./models/equipment_add");  
 const Package = require("./models/package_add");
 const equiprouter = require("./routers/equip");
 const packrouter = require("./routers/package");

// const res = require("express/lib/response");
const app = express();
const port = process.env.PORT || 8081;

app.use(express.json());
app.use(equiprouter);
app.use(packrouter);
//create add equipemnt
// app.post("/gym",(req,res) => {
//     console.log(req.body);
//     const equip = new Equipment(req.body);
//     equip.save().then(() => {
//         res.status(201).send(equip);
//         res.send(equip);
//     }).catch((e) => {
//         res.status(400).send(e);
//     })
//    // res.send("Hello UTU");
// })

//using async await

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})