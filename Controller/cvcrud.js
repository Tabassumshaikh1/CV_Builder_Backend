const schema = require('../Model/Cvcreate')
async function PostCv(req,res){
    const data = new schema({
        ...req.body
    })
    await data.save()
    res.send({msg:'Cv Created Successfully'})
}

async function GetUserdata(req,res){
    console.log(req.body)
    let userdata = await schema.find({id:req.body.id})
    res.send(userdata)
}
async function GetResume(req,res){
   
    let userdata = await schema.find({_id:req.body.id})
    res.send(userdata)
}

module.exports = {PostCv,GetUserdata,GetResume}