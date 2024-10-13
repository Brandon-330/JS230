document.querySelector('html').addEventListener('click', (event) => {
  if (!event.target === document.querySele'container') {
    document.querySelector('#container').style = 'display: none';
  }
});

document.querySelector('#container').addEventListener('click', event => {
  event.stopPropagation();
});