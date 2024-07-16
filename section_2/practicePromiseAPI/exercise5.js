let p = new Promise((resolve, reject) => {
  let value = Math.random();
  if (value < 0.75) {
    resolve(value);
  } else {
    reject(value);
  }
});

p.resolve(value => console.log(`In range: ${value}`))
 .reject(value => console.log(`Out of range: ${value}`));