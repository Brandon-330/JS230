function flakyService() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  })
    .then(console.log)
    .catch(() => console.error('An error occurred'));
}

flakyService();