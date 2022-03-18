const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/gym", {
    
}).then(() => {
    console.log("Done");
}).catch((e) => {
    console.log("No");
})