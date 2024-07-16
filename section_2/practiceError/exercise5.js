function loadData() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Data loaded");
    } else {
      reject('Network error');
    }
  })
    .then((successMessage) => successMessage)
    .catch((error) => {
      console.log(error);
      return Promise.resolve('Using cached data');
    })
}

console.log(loadData());