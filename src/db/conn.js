const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/gym-api", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("Connection is Done");
}).catch((e) => {
    console.log("No connection");
});