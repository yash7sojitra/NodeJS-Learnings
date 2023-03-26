//CRUD  Create Read Update Delete

const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/Sample";

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to mongoDb successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const student = new mongoose.Schema({
  name: String,
  workout: Boolean,
  height: Number,
});

const Student = new mongoose.model("Student", student);

const adder = async () => {
  const ss = await Student.create({
    name: "Yash",
    workout: false,
    height: 4,
  });

  console.log(ss);
};

adder();
