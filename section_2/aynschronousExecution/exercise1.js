function makeLogger(number) {
  return function() {
    console.log(number);
  }
}

function delayLog() {
  for (let index = 1; index <= 10; index += 1) {
    let logger = makeLogger(index);
    setTimeout(logger, index * 1000);
  }
}

function afterNSeconds(fn, time) {
  setTimeout(fn, time);
};

function sayHi() {
  return function() {
    console.log('hi!')
  }
}

afterNSeconds(sayHi(), 1000);