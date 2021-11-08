const ContactModel = require('../models/contact.js'); 

module.exports = {
    create
}

async function create(req, res) {
  try {
    // 1. put the contact in the database (the data will be incoming via `req.body`)
    await ContactModel.create({name: req.body.name, email: req.body.email, message:req.body.message})
    // 2. send a response to frontend - typically we send back the newly created order, or all the list of orders, or just an 'ok'
    res.status(200).json('ok. Order added to DB!')
 } catch(err) {
    res.json(err);
 }
}