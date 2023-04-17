
const register = require("../Model/Register");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const secret = process.env.secret
async function Register(req, res) {
  const checkemail = await register.find({email : req.body.email})
  const checkphone = await register.find({contactNumber:req.body.contactNumber})
  if(checkemail.length !== 0){
    res.send({err:1,msg:'Email  already exists'})
  }
  else if(checkphone.length !== 0){
    res.send({err:1,msg:'Number  already exists'})
  }
  //hashing password
  else{
  const password = req.body.password;
  
    const updatedpass = await bcrypt.hash(password, 10);
    const data = req.body;
    const regisdata = new register({
      ...data,
      password: updatedpass,
    });
    
    regisdata.save();
  

 //create token
 const token = jwt.sign(
    {
      _id: regisdata._id,
      name: `${regisdata.name} `,
      status:regisdata.status,
      email: regisdata.email,
  
    },
    secret
  );
 

  res.send({ err:0,msg: "Registered Successfully" ,token:token,id:regisdata._id});
  }
}
async function Login(req, res) {
  const checkemail = await register.find({email:req.body.email})
  const password = req.body.password
  
    
  const PassMatch = await bcrypt.compare(password, checkemail[0].password)
  
    if(checkemail.length===0){
       res.send({err:1,msg:'You are not registerd pleases register yourself first !'})
    }
    else if(PassMatch === false){
      res.send({err:1,msg:'Enter Correct Password'})

    }
    else{
    const token = jwt.sign(
        {
          _id: checkemail[0]._id,
          name: `${checkemail[0].name} `,
        //   isAdmin: user.role === "admin",
          email: checkemail[0].email,
        
        },
        secret
      );

      res.status(200).send({
        name: `${checkemail[0].name} `,
        email: checkemail[0].email,
        id:checkemail[0]._id,  
        isAuthenticated: true,
        token: token,
        err: 0,
        msg: "User login Sucessfull",
      });

    }
 

    }
async function Getuserdata(req,res){

let userdata = await register.find({_id:req.body.id})
res.send({err:0,data:userdata})
}

module.exports = { Login, Register,Getuserdata };
