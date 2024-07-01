let myFirstPromise = new Promise((resolve, reject) => {
  let condition = true;

  if (condition) {
    resolve('Success!');
  } else {
    reject('Failure!');
  }
});

myFirstPromise.then((successMessage) => {
  console.log('Yay!' + successMessage);
});

myFirstPromise.catch((errorMessage) => {
  console.log('Uh oh! ' + errorMessage);
});

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    alert(result);
    return result * 2;
  })
  .then(function (result) {
    alert(result);
    return result * 2;
  })
  .then(function (result) {
    alert(result);
    return result * 2;
  });