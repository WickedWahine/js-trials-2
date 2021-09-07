"use strict";


// 1. countWords
function countWords(phrase) {
  
  let wordCounts = {};
  const words = phrase.split(' ')

  for (const word of words) {

    if (!wordCounts[word]) {
      wordCounts[word] = 1;
    }
    else {
      wordCounts[word] += 1;
    }
  }

  return wordCounts;
}

console.log(countWords('You can assume that phrase phrase not contain any phrase does'))

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code
}
