const express = require('express')
const router = express.Router()
const User=require("../models/User")
const { body, validationResult} = require('express-validator');
const Experience=require("../models/Experience");
//const { json } = require('react-router-dom');
const Skills=require("../models/Skills");
router.post("/creatuser",[
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password').isLength({ min: 5 })], async(req,res)=> {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      
        return res.status(400).json({ errors: errors.array() });
    }
    let email=req.body.email
    let fool=await User.findOne({email})
    console.log(fool)
    if (fool!=null) {
        return res.status(400).json("Email Allready Exist");
    }
    try{
        User.create({
            name: req.body.name,
            location:req.body.location,
            email:req.body.email,
            contact:req.body.contact,
            password:req.body.password
        })
        res.json({success:true});
        
    }

    catch(error){
        console.log(error)
        res.json({success:false});
        localStorage.setItem('isSignUp','false')
    }
})

router.post('/Experience', async (req, res) => {
    let data = req.body.Experience_data;
    await data.splice(0,0,{Order_date:req.body.order_date})
    let email=req.body.email;
    //if email not exisitng in db then create: else: InsertMany()
    let eId = await Experience.findOne({ 'email':email })    
    console.log(eId)
    if (eId===null) {
        try {
            
            await Experience.create({
                email:email,
                experience:[data]
            }).then(() => {
                res.json({ success: true })
            })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)

        }
    }

    else {
        try {
            await Experience.findOneAndUpdate({email:email},
                { $push:{experience: data} }).then(() => {
                    res.json({ success: true })
                })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)
        }
    }
})

router.post('/AddSkills', async (req, res) => {
    let data = req.body.Skill_data;
    let email=req.body.email;
    //if email not exisitng in db then create: else: InsertMany()
    let eId = await Skills.findOne({ 'email':email })    
    console.log(eId)
    if (eId===null) {
        try { 
            await Skills.create({
                email:email,
                SkillData:[data]
            }).then(() => {
                res.json({ success: true })
            })
        } catch (error) {
            console.log(error.message)
            res.json({success:false});
        }
    }

    else {
        res.json({success:false});
        }
    })


router.post("/loginuser",[
    body('email').isEmail(),
    body('password').isLength({ min: 5 })], async(req,res)=> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let email=req.body.email;
    try{
        let userData=await User.findOne({email});
        if(!userData){
            return res.status(400).json({errors: "Enter a Valid email"})
        }
        if(req.body.password !== userData.password){
            return res.status(400).json({errors: "Enter a Valid password"})            
        }
        return res.json({success:true})
    }

    catch(error){
        console.log(error)
        res.json({success:false});
    }
})

router.post("/getSkills",async(req,res)=>{
    try{
        res.send(global.Skills)
    } catch(error){
        console.error(error.message);
        res.send("Server Error")
    }
})

router.post("/getUserDetails",async(req,res)=>{
    let email=req.body.email
    let fool=await User.findOne({email})
    //console.log(fool.email,fool.name,fool.location)
    res.json({email:fool.email,name:fool.name,location:fool.location,contact:fool.contact})
    return ""
})

module.exports = router;