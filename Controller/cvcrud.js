const schema = require("../Model/Cvcreate");
async function PostCv(req, res) {
    console.log(req.body,"AAAAAAAAAA")
  const data = new schema({
    ...req.body,
  });
  await data.save();
  res.send({ msg: "Cv Created Successfully" });
}

async function GetUserdata(req, res) {
  let userdata = await schema.find({ uid: req.body.id });
  res.send(userdata);
}
async function GetResume(req, res) {
  let userdata = await schema.find({ _id: req.body.id });
  res.send(userdata);
}
async function GetResumeById(req, res) {
  const id = req.body.id;
  const data = await schema.find({ _id: id });
  res.send(data);
}
async function UpdateCv(req, res) {

  let personaldata = req.body[0]
  let education=req.body[1]
  let experience = req.body[2]
  let project = req.body[3]
 
  let data = await schema.findOneAndUpdate(
    { _id:personaldata.id },
    { $set: { 
      address:personaldata.address,
      city:personaldata.city,
      email:personaldata.email,
      firstname:personaldata.firstname,
      uid:personaldata.id,
      number:personaldata.number,
      summary:personaldata.summary,
      lastName:personaldata.lastName,
      pincode:personaldata.pincode,
      education:education,
      experience:experience,
      project:project,
      state:personaldata.state
     } }
   );

   if (data) {
   res.send({ err: 0, msg: "Cv updated Successfully!!!" });
 }
}
async function DeleteCv(req, res) {
  console.log(req.body, "del");
  let deletedata = await schema.findByIdAndDelete({ _id: req.body.id });
  if (deletedata) {
    res.send({ err: 0, msg: "Cv is deleted successfully!!" });
  }
}
module.exports = {
  PostCv,
  GetUserdata,
  GetResume,
  GetResumeById,
  UpdateCv,
  DeleteCv,
};
