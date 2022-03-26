const express = require("express");
const router = new express.Router();
const Package =  require("../models/package_add");

router.post("/package",async(req,res) => {
    try{
        const pack = new Package(req.body);
        const addpackage = await pack.save();
        res.status(201).send(addpackage);
    }catch(e) {
        res.status(400).send(e);
    }
})

//read All Package
router.get("/viewpackage",async(req,res) => {
    try{
          const viewpackage = await Package.find();
          res.send(viewpackage);
    }catch(e) {
        res.send(e);
    }
})

router.get("/pack_indi/:id",async(req,res) => {
    try{
          const _id = req.params.id;
          const packe = await Package.findById(_id);
          console.log(packe);
          if(!packe){
                return res.status(404).send();
          }
          else{
            res.send(packe);
          }
          
    }catch(e) {
        res.status(500).send(e);
    }
})

router.patch("/package_update/:id", async(req,res) => {
    try{
        const _id = req.params.id;
        const package_name = req.params.package_name;
        const updatepackage = await Package.findByIdAndUpdate(_id, req.body,{
            new : true
        });
        res.send(updatepackage);
    }catch(e)
    {
        res.status(400).send(e); 
    }
})

router.delete("/package_delete/:id",async(req,res) => {
    try{
        const id = req.params.id;
        const delte_pack = await Package.findByIdAndDelete(id);
        if(!id)
        {
            return res.status(400).send();
        }
        res.send(delte_pack);
    }catch(e)
    {
        res.status(500).send(e);
    }
})
module.exports = router;