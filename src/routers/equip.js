const express = require("express");
const router = new express.Router();
const Equipment = require("../models/equipment_add");  

//create a new router there a 3 steps





router.post("/gym",async(req,res) => {
    try{
        const equip = new Equipment(req.body);
        const createequip = await equip.save();
        res.status(201).send(createequip);
    }catch(e) {
        res.status(400).send(e);
    }
})

//read data of equpiment
router.get("/view",async(req,res) => {
    try{
          const viewequip = await Equipment.find();
          res.send(viewequip);
    }catch(e) {
        res.send(e);
    }
})

//get the indivisual equipment data using id

router.get("/view/:id",async(req,res) => {
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

//update details
router.patch("/equip/:id", async(req,res) => {
    try{
        const _id = req.params.id;
        const updateequip = await Equipment.findByIdAndUpdate(_id, req.body,{
            new : true
        });
        res.send(updateequip);
    }catch(e)
    {
        res.status(400).send(e); 
    }
})
//detete details

router.delete("/equipdelete/:id",async(req,res) => {
    try{
        const id = req.params.id;
        const delte_equip = await Equipment.findByIdAndDelete(id);
        if(!id)
        {
            return res.status(400).send();
        }
        res.send(delte_equip);
    }catch(e)
    {
        res.status(500).send(e);
    }
})

module.exports = router;