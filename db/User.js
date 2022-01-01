const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/toupiao');
const cat=new mongoose.Schema({
     username: String,
     password:String,
     zhize:String
 })
module.exports= mongoose.model('user', cat);