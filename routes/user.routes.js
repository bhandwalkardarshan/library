const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/user.model")

const userRoutes = express.Router()

// registration
userRoutes.post("/register", async(req,res) => {
    try {
        const {name,email,password,isAdmin} = req.body
        const isExisting = await User.findOne({email})
        if (isExisting){
            return res.status(400).json({message:"User with this email already exists"})
        }

        const hashed = await bcrypt.hash(password,10)
        const newUser = new User({
            name,
            email,
            password:hashed,
            isAdmin
        })

        await newUser.save()
        res.status(201).json({message:"User registered successfully"})

    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
    }
})

// login
userRoutes.post("/login", async(req,res) => {
    try {
        const {email,password} = req.body
        const user = await User.findOne({email})
        if (!user){
            return res.status(401).json({message:"Invalid Credentials"})
        }
        const passwordMatch = await bcrypt.compare(password,user.password)

        if(!passwordMatch){
            return  res.status(403).json({message:'Incorrect Password'})
        }
        // token generation
        const token = jwt.sign({userId:user._id,isAdmin:user.isAdmin},"jwtsecret",{expiresIn:'1h'}) 
        res.status(201).json({token})

    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
    }
})

module.exports=userRoutes;