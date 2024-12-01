const jwt = require('jsonwebtoken')

const User = require('../models/User')

const protect =  async (req, res, next)=>{
  let token;
  const { authorization } = req.headers
  if(!authorization){
    res.status(401).json({message: "Not authorized, No Token!"})
  }
  if( authorization && authorization.startsWith("Bearer")){
    token = authorization.split(" ")[1]
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await userModel.findById(decoded.id).select("-password");
    next()
  } catch (error) {
    res.status(401).json({message: "Not authorized, No Token!"})
  }

}
module.exports = { protect }