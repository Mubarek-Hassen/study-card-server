const userModel = require('../models/User.js')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

// REGISTER(CREATE) USER
const registerUser = async (req,res)=>{
  const { email, name, password} = req.body;
  let errors = {};
  if (!name) errors.name = "Name field cannot be empty!";
  if (!email) errors.email = "Email field cannot be empty!";
  if (!password) errors.password = "Password field cannot be empty!";
  if (!name || !email || !password) {
    return res.status(400).json(errors);
  }
  try {
    const user = await userModel.findOne({ email });
    if(user){
      errors.email = "User with this email already exist!"
      return res.json(errors);
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await userModel.create({ email, name, password: hashedPassword})
    const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, { expiresIn: "1h"})
    return res.json({message: "User registered successfully!", token, userId: newUser._id});
  } catch (error) {
    return res.status
  }
}

// LOGIN USER
const loginUser = async (req, res) => {
  const { email, password} = req.body;
  let errors = {};
  if (!email) errors.email = "Email field cannot be empty.";
  if (!password) errors.password = "Password field cannot be empty.";
  
  try {
    if (!email || !password) {
      return res.json(errors);
    }
    const user = await userModel.findOne({ email });
    if(!user){
      return res.status(404).json({message: "User doesn't exist!"})
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
      return res.status(401).json({message: "Email or password is incorrect!"})
    }
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
    return res.json({token, userId: user._id})
  } catch (error) {
    console.error("Login Controller error ===> " + error)
  }

}



// EXPORT ALL USER CONTROLLING FUNCTIONS
module.exports = {
  registerUser,
  loginUser,
}