const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: String,
  email: String, 
  password:  String,
});
const Contact = mongoose.model("contact", contactSchema);
module.exports = Contact;
