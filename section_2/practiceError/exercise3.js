function retryOperation(fn) {
  new Promise((resolve, reject) => {
    fn()
        .catch(() => {
          fn()
              .catch(() => {
                fn()
                    .catch(() => console.log('Operation failed'))
              })
        })
  });
}

// Example usage:
retryOperation(
  () =>
    new Promise((resolve, reject) =>
      Math.random() > 0.33
        ? resolve("Success!")
        : reject(new Error("Fail!"))
    )
);