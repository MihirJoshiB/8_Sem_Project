const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const { required } = require("nodemon/lib/config");
require("./db/conn");
 const Equipment = require("./models/equipment_add");  
// const res = require("express/lib/response");
const app = express();
const port = process.env.PORT || 8081;

app.use(express.json());
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

app.post("/gym",async(req,res) => {
    try{
        const equip = new Equipment(req.body);
        const createequip = await equip.save();
        res.status(201).send(createequip);
    }catch(e) {
        res.status(400).send(e);
    }
})

//read data of equpiment
app.get("/view",async(req,res) => {
    try{
          const viewequip = await Equipment.find();
          res.send(viewequip);
    }catch(e) {
        res.send(e);
    }
})

//get the indivisual equipment data using id

app.get("/view/:id",async(req,res) => {
    try{
          const _id = req.params.id;
          const edata = await Equipment.findById(_id);
          console.log(edata);
          if(!edata){
                return res.status(404).send();
          }
          else{
            res.send(edata);
          }
          
    }catch(e) {
        res.status(500).send(e);
    }
})
app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})