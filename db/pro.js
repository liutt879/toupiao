const mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost/toupiao');
 const dog=new mongoose.Schema({
     proname: String,
     choice:String,
     num:Number
 })
module.exports= mongoose.model('project', dog);
