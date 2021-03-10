const express= require("express");
require("../src/db/conn");
const app= express();
const Model= require("../src/models/models")

app.use(express.json());

// ADDING DATA 

app.post("/achievers", async(req, res)=>{
    try{
        const data= new Model(req.body);
        console.log(req.body);
        const waitdata= await data.save();
        res.send(waitdata)
    }
    catch(e){
        res.send(e)
    } 
})

// READING DATA 

app.get("/achievers", async(req, res)=>{
    try{
        const read= await Model.find({});
        res.send(read)
    }
    catch(e){
        res.send(e)
    }
})

// Reading Data of An Individual by Rank

app.get("/achievers/:rank", async(req, res)=>{
    try{
    const rank = req.params.rank;
    // const RankString= rank.toString()
    const getData= await Model.find({ranking: rank});
    res.send(getData);
    }
    catch(e){
        res.send(e)
    }
})

// UPDATING DATA by grabing them with their id

app.patch("/achievers/:id", async(req, res)=>{
    const id= req.params.id;
    // const nameString= name.toString(); 
    const UpdateData= await Model.findByIdAndUpdate(id , req.body, {
        new :true
    });
    res.send(UpdateData)
});

app.delete("/achievers/:id", async(req, res)=>{
    try{
        const id= req.params.id;
        const deleteData= await Model.findByIdAndDelete(id)
        res.send(deleteData)
    }
    catch(e){
        res.send(e)
    }
});



app.listen(5600, ()=>{
    console.log("Server Running At Port 5600")
});
