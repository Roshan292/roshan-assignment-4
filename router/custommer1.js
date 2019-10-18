var express=require('express');
var apiRouter=express.Router();
const db=require('../db/customer1');
//retrive all list of customer form GET method
apiRouter.get('/',async(req,res,next)=>{
    try{
        let results=await db.all();
        res.json(results);
        console.log(results);
    }catch(a){
        console.log(a);
        res.sendStatus(500);   
    }
})

//retrieving the details of given id
apiRouter.get('/:id',async(req,res,next)=>{
    try{
        let results=await db.one(req.params.id);
        res.json(results);
        console.log(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500),()=>{
            console.log("internal server error");
        };
    }
})

//inserting a new customer record in the databse

apiRouter.post('/cust-insert',async(req,res,next)=>{


    try{
        let results=await db.two(req.body.name,req.body.address);
        res.json(results);
        console.log(results);
        console.log("name:"+req.body.name+", address:"+req.body.address+" added successfully");
    }catch(e){
        console.log(e);
        res.sendStatus(400),()=>{
            console.log("Please provide information to be added");
        };
    }
})



//updating the existing customer record
apiRouter.put('/cust-update',async(req,res,next)=>{

    try{
        let results=await db.three(req.body.id,req.body.name,req.body.address);
        res.json(results);
        console.log(results);
       console.log("customer id"+req.body.id+" updated successfully");
    }catch(e){
        console.log(e);
        res.sendStatus(400),()=>{
            console.log("Please provide information to be added");
        };
    }
})

//deleting the inserted customer record
apiRouter.delete('/cust-delete',async(req,res,next)=>{

    try{
        let results=await db.four(req.body.id);
        res.json(results);
        console.log(results);
       console.log("customer id "+ req.body.id +" deleted successfully");
    }catch(e){
        console.log(e);
        res.sendStatus(400),()=>{
            console.log("Please provide information to be added");
        };
    }
})
module.exports=apiRouter;