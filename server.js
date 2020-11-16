const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = "http://hipsi1999.github.io/codeforcesvisualizer";

//db
const mongoose = require('mongoose');
const url = process.env.mongo_url
mongoose.connect(url,{useNewUrlParser:true})
.then(()=>console.log("Mongo connection successful"))
.catch(err=>console.log(err));
const Suggestion = require('./model/suggestion');


//use
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//routes
app.post('/suggestions',(req,res)=>{
    const suggestion = new Suggestion({
        author: req.body.author,
        body: req.body.body
    })
    suggestion.save().then(doc => res.json(doc))
    .catch(err=>console.log({create:`Error creating new post ${err}`}))
})
app.get('/suggestions',(req,res)=>{
    Suggestion.find().sort({date:-1}).then(suggestions=>res.json(suggestions))
    .catch(err=>console.log(err))
})
app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})