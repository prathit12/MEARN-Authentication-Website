const jwt  = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const { decrypt } = require('dotenv')

// @desc   Register New User 
// @route POST / api/users
// @access public
const registerUser = asyncHandler( async (req, res) => {
    const { name, email, password } = req.body

    if (!email || !password || !name) 
    {
        res.status(400)
        throw new Error('Invalid email or password')   
    }
    // CHECK FOR USER EXISTENCE
    const userExist = await User.findOne({email})
    if (userExist) {
            res.status(400)
            throw new Error('User already exists') 
    }
    // Encrypt password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    //Creating User
    const user = await User.create({
        name,
        email,
        password:hashedPassword
    })
    if (user){
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    }
    else{
        res.status(400)
        throw new Error('Register User')
    }
})
// @desc   Authenticate a User 
// @route POST / api/login
// @access public
const loginUser = asyncHandler( async (req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})

    if(user && ( await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    }
    else{
        res.status(400)
        throw new Error('Invalid  Credential')
    }
})
// @desc   Get a User data 
// @route GET / api/login
// @access public
const GetUser = asyncHandler( async (req, res) => {
    res.json({ 
        message:" user data displayed "
    })
})
module.exports = {
    registerUser,
    loginUser,
    GetUser,
}