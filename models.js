const mongoose= require("mongoose");

const schema= new mongoose.Schema({
    ranking:{
        type: Number,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        required:true,
        trim:true,
    },
    dob:{
        type:String,
        required:true,
        trim:true,
    },
    country:{
        type:String,
        required:true,
        trim:true,
    },
    score:{
        type:Number,
        required:true,
        unique:true,   
    },
    event:{
        type:String,
        default:"100m"
    },
});

const Model= new mongoose.model("Ranking", schema);

module.exports= Model
