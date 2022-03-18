const { MongoError } = require("mongodb");
const mongoose = require("mongoose");
const validator = require("validator");

const equipmntSchema = new mongoose.Schema({
    ename : {
        type:String,
        required:true,
        
    },
    decription : {
        type:String,
        required:true,
       
    },
    category : {
        type:String,
        required:true,
        
    },
    qty : {
        type:Number,
        required:true,
       
    }
    
})

//now create  a new collection
 const Equipment = new mongoose.model('Equipment',equipmntSchema);

 module.exports = Equipment;