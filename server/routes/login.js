let loginModel= require("../models/login.model")
let express = require("express")

let router= express.Router()

//GET data 
router.get('/login',(req,res)=>{
    if(!req.query.userName || !req.query.password){
        return res.status(400).send("Missing User Name or Password")
    } 
    loginModel.find({
        userName : req.query.userName,
        password : req.query.password,
        ans : req.query.ans,
        
    })
    .then(doc=>{
        // res.json(doc);
        console.log("doc = "+doc)
        if(!doc[0])
            res.send("False"); 
        else
            res.send("True");
    })
    .catch(err=>{
        return res.status(500).json(err)
    })
})

//POST localhost://3000/login 
router.post('/login',(req,res)=>{
    if(!req.body){
        return res.status(400).send("Request body is missing")
    } 
    if(!req.body.userName || !req.body.password ||  !req.body.ans){
        return res.status(400).send("Missing User Name or Password or Security Question")
    } 
    let model=new loginModel(req.body) 
    model.save()  // validate req.body with customerModel and save it in database
        .then(doc=>{       
            if(!doc[0] || doc.length==0){
                return res.status(500).send(doc)
            } 
            res.send(201).send(doc)   // sucessfully created
        })
        .catch(err=>{
            res.status(500).json(err)
        })
})

//Update Request PUT
router.put("/login",(req,res)=>{
    if(!req.body.userName || !req.body.password ||  !req.query.ans){
        return res.status(400).send("Missing User Name or Password")
    }  
    loginModel.findOneAndUpdate({
        userName : req.body.userName
    },  req.body,{
        new : true
    })
    .then(doc=>{
    res.json(doc)
    })
    .catch(err=>{
        res.status(500).json(err)
    })
})


//Request DELETE
router.delete("/login",(req,res)=>{
        if(!req.body){
        return res.status(400).send("Request body is missing")
    } 
    if(!req.body.userName ){
        return res.status(400).send("Missing User Name")
    }  

    loginModel.findOneAndRemove({
        userName: req.body.userName
    })
    .then(doc=>{
    res.json(doc)
    })
    .catch(err=>{
        res.status(500).json(err)
    })
})

module.exports = router