function makeBold(el, cb) {
  el.style.fontWeight = 'bold';
  if (cb && typeof cb === 'function') {
    cb(el);
  }
}

// > let sectionElement = document.querySelector('section');
// > makeBold(sectionElement, function(elem) {
//     elem.classList.add('highlight');
//   });

// > sectionElement.classList.contains('highlight');
// = true
// > sectionElement.style.fontWeight;
// = "bold"