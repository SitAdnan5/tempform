const express = require("express");
const app=express();
const mongoose = require("mongoose");
const multer= require('multer');
const upload=multer();
// const bodyParser=require("body-parser");
// const { stringify } = require("querystring");
app.use(express.json());
// for parsing application/xwww-
app.use(express.urlencoded({extended:true})); 
//form-urlencoded
// for parsing multipart/form-data
// app.use(upload.array()); 
        // var jsonParser = bodyParser.json()
        // app.use(bodyParser.urlencoded({extended: true}));
        // var urlencodedParser = bodyParser.urlencoded({ extended: false })
// mongoose.connect("mongodb+srv://adnan:adnan@cluster0.ncat3yb.mongodb.net/details?retryWrites=true&w=majority",{useNewUrlParser:true},{useUnifiedTopology: true})
// .then(response=>{
//     console.log('DB connected')
// }).catch(err=>console.log("Unable to connect"));


// const notesSchema={
//     name: String,
//     email: String,
//     phone: Number,
//     photo: {
//         data:Buffer,
//         contentType:String,
//     },
//     ten:{
//         data:Buffer,
//         contentType:String,
//     },
//     twelve:{
//         data:Buffer,
//         contentType:String,
//     }
// }

// const Note=mongoose.model("Note",notesSchema);
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.get('/test',(req,res)=>{
    res.sendFile(__dirname+"/test.html");
})
app.post("/",function(req,res){
    // let newNote=new Note({
    //     name:req.body.names,
    //     email:req.body.emails,
    //     phone:req.body.phones,
    //     photo:req.body.photos,
    //     ten:req.body.tens,
    //     twelve:req.body.twelves
    // })
    // newNote.save();
    console.log(req.body);
   res.send("recieved your request!");
})

app.listen(4000,function(){
    console.log("server is running on 4000");
})





