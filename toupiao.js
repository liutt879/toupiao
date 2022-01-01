const express=require('express')
const bodyParser=require('body-parser')
const arttemplate=require('art-template')
arttemplate.defaults.root='./public'
const app=express()
app.use(bodyParser.json())
app.use('/',express.static('public'))
const User=require('./db/User')
const Pro=require('./db/pro')
 app.get('/rec', (req, res) => {
   const user0={ username: req.query.data1 ,password:req.query.data2 ,zhize:req.query.data3}
   if(req.query.data3=='管理员'){
      User.findOne({username:user0.username},function(err,data){ 
         if (data){
            res.send('用户名已被注册')
         }else{
            User.create(user0,function(err,data){
                  res.redirect('/lead-log.html')
            })
         }
      })
   }
   else{
      User.findOne({username:user0.username},function(err,data){ 
         if (data){
            res.send('用户名已被注册')
         }else{
            User.create(user0,function(err,data){
               res.redirect('/login.html')
            })
         }
      })
   }
 })
 app.get('/log', (req, res) => {
    const user={
      name:req.query.name,
      pwd:req.query.pwd
    }
    User.findOne({
       username:user.name,
       password:user.pwd
    },function(err,data){
       console.log(data)
       if(data===null){
          res.send(data)
       }
       else{
          res.redirect('/index.html')
       }
    })
  })//管理员登陆
  app.get('/lead', (req, res) => {
   const user={
      name:req.query.name,
      pwd:req.query.pwd
    }
    User.findOne({
       username:user.name,
       password:user.pwd
    },function(err,data){
       console.log(data)
       if(data===null){
          res.send(data)
       }
       else{
          res.redirect('/index.html')
       }
    })
 })
  app.get('/fabu', (req, res) => {
   Pro.insertMany([
      {id:1,proname:req.query.project ,choice:req.query.name1,num:0},
      {id:2,proname:req.query.project ,choice:req.query.name2,num:0},
      {id:3,proname:req.query.project ,choice:req.query.name3,num:0},
      {id:4,proname:req.query.project ,choice:req.query.name4,num:0},
      {id:5,proname:req.query.project ,choice:req.query.name5,num:0},
      {id:6,proname:req.query.project ,choice:req.query.name6,num:0}
   ]);
   res.redirect('index.html')
 })
 app.get('/pwd', (req, res) => {
    const user=req.query.old
    const pwd=req.query.new1
   User.findOneAndUpdate({username:user},{password:pwd},(err,data)=>{
      if(err) throw err
      if(data){
         res.redirect('login.html')
      }
   })
})
Pro.find({}).then(doc=>{
   module.exports.data=arttemplate('projectlist.html',{data:doc})
})
Pro.find({}).then(doc=>{

   module.exports.data=arttemplate('projectlist.html',{data:doc})
})
app.listen(10618)