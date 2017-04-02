'use strict';
class Mather {

	getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }
    return shuffled.slice(min);
  }

  random(range) {
    return Math.floor(Math.random() * range);
  }

  //tạo 4 câu trả lời cho một từ đề bài
  getChoices(allWords, curWord, noOfAns) {
  	if (allWords.length < noOfAns) {
  		noOfAns = this.allWords.length;
  	}

  	// Tạo mảng các từ sai
    let wrongWord = [];
    for (let i = 0; i < allWords.length; i++) {
      if (curWord['_id'] != allWords[i]['_id']) {
        wrongWord.push(allWords[i]);
      }
    }

    // Random vị trí từ đúng
    let position = Math.floor(Math.random() * noOfAns);

    // Tạo mảng các câu trả lời
    let choices = [];

    for (let i = 0; i < noOfAns; i++) {
      let temp;
      if (i == position) {
        temp = curWord;
      } else {
        let r = Math.floor(Math.random() * wrongWord.length);
        temp = wrongWord[r];
        wrongWord.splice(r, 1);
      }
      choices.push(temp);
    }
    return choices;
  }
}
module.exports = new Mather();
