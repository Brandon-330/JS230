let randomWord = (function() {
  let words = ['apple', 'banana', 'orange', 'pear'];
  return function() {
    let randomIdx = Math.floor(Math.random() * words.length);
    return words.splice(randomIdx, 1)[0];
  }
})();

let obj = {

  init() {
    this.incorrectGuesses = 0;
    this.lettersGuessed = [];
    this.allowedGuesses = 6;
    this.word = randomWord();
    if (!word) {
      this.displayMessage('Sorry, I''ve run out of words!');
      return this;
    }
    this.word = this.word.split
  },
}