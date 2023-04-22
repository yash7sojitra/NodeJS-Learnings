const express = require("express");
require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET requests are disabled.");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res
//     .status(503)
//     .send("Site is currently under maintainance. Check back soon!");
// });

//Middleware to parse json data
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

// const jwt = require("jsonwebtoken");

// const myFunction = async () => {
//   const token = jwt.sign({ _id: "abc123" }, "thisismynewcourse", {
//     expiresIn: "7 days",
//   });
//   console.log(token);

//   const data = jwt.verify(token, "thisismynewcourse");
//   console.log(data);
// };

// myFunction();

const Task = require("./models/task");
const User = require("./models/user");

const main = async () => {
  //Get the User who created this task based on the taskID
  // const task = await Task.findById("6443610a9dc3a3a97cde729d");
  // await task.populate("owner");
  // console.log(task.owner);
  //Get all the tasks created by a single user based on the userID
  // const user = await User.findById("644360bb9dc3a3a97cde7292");
  // await user.populate("tasks");
  // console.log(user.tasks);
};

main();
