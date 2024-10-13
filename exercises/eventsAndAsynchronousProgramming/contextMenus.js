document.querySelector('main').addEventListener('click', e => {
  if (e.event === e.currentTarget) {
    alert('main');
  } else {
    alert('sub');
    e.stopPropagation();
  }
});