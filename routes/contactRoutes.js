const express = require("express");
const Contact = require("../models/contactSchema");

const router = express.Router();

//@Description:Post Méthode
router.post("/users", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(200).json({ msg: "succes", newContact });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

//@Description:get Méthode
router.get("/users", async (req, res) => {
  try {
    const newContact = await Contact.find();
    res.status(200).json({ msg: "succes", newContact });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

//@Description:get by id Méthode
router.get("/users:id", async (req, res) => {
  try {
    const newContact = await Contact.findById(req.params.id);
    if (!newContact) return res.status(404).json({ msg: "msg not fond" });
    res.status(200).json({ msg: "succes", newContact });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

//@Description:update Méthode
router.put("/users:id", async (req, res) => {
  try {
    const newContact = await Contact.findByIdAndUpdate(
      { _id: req.params.id },
      { ...req.body }
    );
    if (!newContact) return res.status(404).json({ msg: "msg not fond" });
    res.status(200).json({
      msg: "contact updating",
      newContact: { ...newContact._doc, ...req.body },
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

//@Description:delete Méthode
router.delete("/users:id", async (req, res) => {
  try {
    const newContact = await Contact.findByIdAndDelete(req.params.id);
    if (!newContact) return res.status(404).json({ msg: "msg not fond" });
    res.status(200).json({ msg: "contact deleted", newContact });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
