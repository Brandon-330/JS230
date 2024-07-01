function processData(arr, cb) {
  setTimeout(() => {
    let newArr = arr.map(cb);
    console.log(newArr);
  }, 1000);
}

let processDataPromise = function (arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arr.map(num => num * 2));
    }, 1000);
  });  
}

processDataPromise([1, 2, 3]).then((processedNumbers) => {
  console.log(processedNumbers);
});