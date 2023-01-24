const mongoose = require("mongoose");

const DB = "mongodb+srv://Nemanja:MilaCone5@cluster0.dzdqoke.mongodb.net/web?retryWrites=true&w=majority";
mongoose.set('strictQuery', true);


mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));