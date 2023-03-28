const userModel = require('../models/User.js')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

// REGISTER(CREATE) USER

const registerUser = async (req,res)=>{
  const { email, name, password} = req.body;

  const user = await userModel.findOne({ email });

  if(user){
    return res.json({message: "User already exists!"})
  }

  // const salt = await bcrypt.genSalt(10);
  
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await userModel.create({ email, name, password: hashedPassword})

  res.json({message: "User registered successfully!"});
}


// LOGIN USER



// EXPORT ALL USER CONTROLLING FUNCTIONS
module.exports = {
  registerUser,
}