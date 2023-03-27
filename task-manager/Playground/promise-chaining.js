const mongoose = require("../src/db/mongoose");
const User = require("../src/models/user");

//Promise Chaining
// User.findByIdAndUpdate("641ed6368d0f0f5e72ed37ad", { age: 1 })
//   .then((user) => {
//     console.log(user);

//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//Changing promise chaining with async and await
const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });

  return count;
};

updateAgeAndCount("641ed6368d0f0f5e72ed37ad", 2)
  .then((count) => {
    console.log(count);
  })
  .catch((error) => console.log(error));
