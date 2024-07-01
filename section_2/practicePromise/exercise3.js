function flakyService() {
  return new Promise((resolve, reject) => {
    let bool = Math.random() > 0.5;
    bool ? resolve('Operation successful') : reject('Operation failed');
  })
    .then((successMessage) => {
      console.log(successMessage);
    })
    .catch((failMessage) => {
      console.log(failMessage);
    })
    .finally(() => {
      console.log('operation complete');
    });
}

flakyService();