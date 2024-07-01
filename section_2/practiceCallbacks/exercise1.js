function downloadFile() {
  console.log('Downloading file...')
  setTimeout(() => {
    console.log('Download complete!');
  }, 1500);
}

function basicCallback(cb, num) {
  setTimeout(() => {
    cb(num);
  }, 2000);
}

function processData(arr, cb) {
  setTimeout(() => {
    let newArr = arr.map(cb);
    console.log(newArr);
  }, 1000);
}

function waterfallOverCallbacks(callbacksArr, num) {
  callbacksArr.forEach(cb => {
    num = cb(num);
  });

  console.log(num);
}

function startCounter(cb) {
  let counter = 0;
  let intervalId = setInterval(() => {
    counter += 1;
    if (cb(counter)) {
      clearInterval(intervalId);
    }
  }, 1000);
}

// Example usage:
startCounter((count) => {
  console.log(count);
  return count === 5;
});
// Logs 1, 2, 3, 4, 5, then stops

basicCallback((number) => {
  console.log(number * 2);
}, 5);

downloadFile();
// Example usage:
processData([1, 2, 3], (number) => number * 2);
// After 1 second, logs: [2, 4, 6]

// Example usage:
const double = (x) => x * 2;
waterfallOverCallbacks([double, double, double], 1);
// Logs: 8