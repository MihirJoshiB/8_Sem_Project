const express = require("express");
const router = new express.Router();
const Batch = require("../models/batch_add");

router.post("/batch_add",async(req,res) => {
    try{
        const batch = new Batch(req.body);
        const batchadd = await batch.save();
        res.status(201).send(batchadd);
    }catch(e) {
        res.status(400).send(e);
    }
})