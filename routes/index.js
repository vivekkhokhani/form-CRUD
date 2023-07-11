var express = require('express');
var router = express.Router();
var USER = require('../model/user');


router.post('/add',async (req,res)=>{
  //  const data = await req.body;
  if(req.body.id){
   await USER.findByIdAndUpdate(req.body.id,req.body)
  }else{
   await USER.create(req.body);
  }
   
  res.redirect('/')

});

router.get('/',async (req,res)=>{
  // const page = parseInt(req.params.page) || 1;
  // const limit = parseInt(req.params.limit)
  // const skip = (page - 1)*limit
  var values = {};
  // let data = await USER.find().skip(skip).limit(limit)
  let data = await USER.find()
  if(req.query.id){
    values = await USER.findById(req.query.id);
    console.log(values);
  }
  res.render('index',{values: values, id:req.query.id, students: data});
});

router.get('/delete',async (req,res)=>{
 await USER.findByIdAndDelete(req.query.id);
  res.redirect('/');
})

module.exports = router;
