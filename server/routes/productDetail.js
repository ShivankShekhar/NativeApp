let productModel= require("../models/product.model")
let express = require("express")

let router= express.Router()

//GET data 
router.get('/product',(req,res)=>{
    if(req.query.itemNo){
       productModel.find({
            productItemNo : req.query.itemNo
        })
        .then(doc=>{
            if(doc[0])
                res.json(doc);
            else
            res.json("Data not found"); 
        })
        .catch(err=>{
            return res.status(500).json(err)
        }) 
    } 

    else if(req.query.name){
        
        productModel.find({
                productName : req.query.name
        })
        .then(doc=>{
           if(doc[0])
                res.json(doc);
            else
            res.json("Data not found"); 
        })
        .catch(err=>{
            return res.status(500).json(err)
        }) 
    }

    else if(req.query.data==="all"){
        productModel.find({ })
        .then(doc=>{
            if(doc[0])
                res.json(doc);
            else
            res.json("Data not found"); 
        })
        .catch(err=>{
            return res.status(500).json(err)
        })
    }

    else
        return res.status(400).json("invalid request");
})

//POST localhost://3000/product
router.post('/product',(req,res)=>{
    if(!req.body){
        return res.status(400).send("Request body is missing")
    } 
    if(!req.body.productItemNo || !req.body.productName){
        return res.status(400).send("Missing Product Name or Item No")
    } 

    console.log("name = "+req.body.productName)
    
    let model=new productModel(req.body) 
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
router.put("/product",(req,res)=>{
    if(!req.body){
        return res.status(400).send("Request body is missing")
    } 
    if(!req.body.productItemNo ){
        return res.status(400).send("Missing Item No")
    }  
    productModel.findOneAndUpdate({
        productItemNo : req.body.productItemNo
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
router.delete("/product",(req,res)=>{
        if(!req.body){
        return res.status(400).send("Request body is missing")
    } 
    if(!req.body.productItemNo ){
        return res.status(400).send("Missing Item No")
    }  
    productModel.findOneAndRemove({
        productItemNo: req.body.productItemNo
    })
    .then(doc=>{
    res.json(doc)
    })
    .catch(err=>{
        res.status(500).json(err)
    })
})

module.exports = router;