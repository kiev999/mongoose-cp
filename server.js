const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");

app.use(express.json());
app.use("/api", require("./routes/contactRoutes"));



mongoose.connect("mongodb+srv://hamza:hamza@cluster0.1tuffjy.mongodb.net/Project0?retryWrites=true&w=majority&appName=AtlasApp"
  ).then(() => console.log("database connect"))
  .catch((err) => {
    if (err) throw err;
  });



app.listen(PORT, () => console.log("listening en port", PORT));
