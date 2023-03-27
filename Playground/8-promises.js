// const doWorkPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve([1, 2, 3]);
//     reject("This is my error!");
//   }, 2000);
// });

// doWorkPromise
//   .then((result) => {
//     console.log("Success!", result);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    });
  }, 2000);
};

// add(7, 11)
//   .then((sum) => {
//     console.log(sum);

//     add(sum, 10)
//       .then((sum2) => {
//         console.log(sum2);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//Promise Chaining
add(10, 11)
  .then((sum) => {
    console.log(sum);
    return add(sum, 12);
  })
  .then((sum2) => {
    console.log(sum2);
  })
  .catch((error) => {
    console.log(error);
  });
