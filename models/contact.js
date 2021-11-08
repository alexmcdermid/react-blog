const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({
    name: String, email:String, message:String, 
},{
    timestamps: true,
  });
  
  let ContactModel = mongoose.model('Contact', contactSchema); 
  module.exports = ContactModel;                          
