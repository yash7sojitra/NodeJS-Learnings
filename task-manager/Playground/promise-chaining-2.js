const mongoose = require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("642023860540f909e346401b")
//   .then((task) => {
//     console.log(task);

//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });

  return count;
};

deleteTaskAndCount("642164cdf68c95d5d14e9c76")
  .then((count) => console.log(count))
  .catch((error) => console.log(error));
