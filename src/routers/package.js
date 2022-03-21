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

module.exports = router;