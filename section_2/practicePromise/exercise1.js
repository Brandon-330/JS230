function downloadFile() {
  console.log('Downloading file...')
  setTimeout(() => {
    console.log('Download complete!');
  }, 1500);
}

function downloadFile() {
  return new Promise((resolve, reject) => {
    console.log('Downloading file...');
    resolve('Download complete!');
  })
    .then((successMessage) => {
      setTimeout(() => console.log(successMessage), 1500);
    });
}

downloadFile();