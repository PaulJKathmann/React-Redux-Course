class Counter {
    constructor(text) {
    // TODO: build an internal Map of word => occurrences.
    this.wordmap = new Map();
    text.toLowerCase().split(" ").forEach((element) => {
      if (this.wordmap.get(element)) {
        this.wordmap.set(element, this.wordmap.get(element) + 1);
      } else {
        this.wordmap.set(element, 1);
      }
    });
  }


  occurrences(word) {
    // TODO: return the number of occurrences
    if (word.length > 0)
      return this.wordmap.get(word)
    else
      return 0;
  }
}

module.exports = Counter;
