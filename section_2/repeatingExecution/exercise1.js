function startCounting() {
  let counter = 1
  let id = setInterval(function() {
    console.log(counter);
    counter += 1;
  }, 1000);
}

function stopCounting(intervalId) {
  clearInterval;
}

startCounting();