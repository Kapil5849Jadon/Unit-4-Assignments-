require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken =(token)=>{
     return new Promise((resolve, reject)=>{
          jwt.verify(token , `${process.env.JWT_SECRET_KEY}`, (err, user)=>{
               if(err) return reject(err);
               resolve(user);
          })
     })
}


module.exports = async (req, res, next) => {
  // check if authorisation header has been set
  // or throw an error
  if (!req.headers.authorization)
    return res.status(400).send("user token is not provided or wrong");

  // if bearer token is in authorization
  //if not throw an error
  if(!req.headers.authorization.startsWith("Bearer "))
  return res.status(400).send("user token is not provided or wrong");

  //split the bearer token and get the [1] which is the token

  const token = req.headers.authorization.split(" ")[1]
  ;
  let user;
  try {
       
     user = await verifyToken (token);
  } catch (err) {
     return res.status(400).send("user token is not provided or wrong");
  }
  req.user = user.user;
     console.log("user", req.user)
  return next();
};
