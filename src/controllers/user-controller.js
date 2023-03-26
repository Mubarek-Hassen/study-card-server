const userModel = require('../models/User.js')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

// REGISTER(CREATE) USER

const registerUser = async (req,res)=>{
  const { email, name, password} = req.body;

  const user = await userModel.findOne({ email });

  res.json(user);
}


// LOGIN USER



// EXPORT ALL USER CONTROLLING FUNCTIONS
module.exports = {
  registerUser,
}