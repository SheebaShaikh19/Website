const express=require("express");
const mongoose=require("mongoose");
const User=require("../models/userModel");
const router=express.Router();


//
router.post("/",async (req,res)=>{
    const {name,email, booking_date,booking_time,end_date,end_time, contact_number}=req.body;
    try {
        const userAdded=await User.create({
            name:name,
            email:email,
            booking_date :booking_date,
            booking_time : booking_time,
            end_date : end_date,
            end_time : end_time,
            contact_number : contact_number

        });
        res.status(201).json(userAdded);
    } catch (error) {
        console.log(error);
        res.status(400).json({error:error.message});
    }
    
    });
    router.get("/", async (req,res)=>{
        try {
               const showAll = await User.find();
               res.status(200).json(showAll);
               
           } catch (error) {
               console.log(error);
               res.status(500).json({error:error.message});
           }
          // res.send("api running");
       });
    module.exports=router;