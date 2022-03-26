const { MongoError, Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const validator = require("validator");


const batchSchema = new mongoose.Schema({
        batch_name:{
            type:String,
            required:true,
        },

        batch_start_time:{
            type:Date,
            required:true,
        },

        batch_end_time:{
            type:Date,
            required:true,
        }
})

const Batch = new mongoose.model('Batch',batchSchema);

 module.exports = Batch;