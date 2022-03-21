const { MongoError } = require("mongodb");
const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");
const validator = require("validator");

const packageSchema = new mongoose.Schema({

    package_name : {
        type:String,
        required:true,    
    },

    package_details : {
        type:String,
        required:true,
    },

    package_duration : {
        type:String,
        required:true,
        
    },
    package_amount : {
        type:Number,
        required:true,
    }
})

const Package = new mongoose.model('Package',packageSchema);

module.exports = Package;