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

  countInArray(arr) {
    if (arr.length == 0) return [];
    let newArr = [];
    var temp = {};
    temp['fromId'] = arr[0]['from']['id']['_id'];
    temp['winFrom'] = 0;
    temp['winTo'] = 0;
    if(arr[0]['from']['score'] > arr[0]['to']['score']) temp['winFrom'] = 1;
    else temp['winTo'] = 1;
    newArr.push(temp);

    for (let i = 1; i < arr.length; i ++) {
      for (let j = 0; j < newArr.length; j++) {
        //nếu có rồi, thì tính số thắng hay thua
        if (newArr[j]['fromId'] == arr[i]['from']['id']['_id']) {
          if(arr[i]['from']['score'] > arr[i]['to']['score']) newArr[j]['winFrom']++;
          else newArr[j]['winTo']++; 
        } else {
          var temp = {};
          temp['fromId'] = arr[i]['from']['id'];
          temp['winFrom'] = 0;
          temp['winTo'] = 0;
          if(arr[i]['from']['score'] > arr[i]['to']['score']) temp['winFrom'] = 1;
          else temp['winTo'] = 1;
          newArr.push(temp);
        }
      }
    }
    return newArr;
  }
  

}
module.exports = new Mather();