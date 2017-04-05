function countLetters(sentence) {
  var obj = {};
  sentence = sentence.split(' ').join('');
  console.log(sentence);
  for (var i in sentence) {
    var letter = sentence.charAt(i);
    if(!obj[letter]) {
      obj[letter] = 1;
    } else {
      obj[letter]++;
    }
  }
  return obj;
}

var a = countLetters("lighthouse in the house");

console.log(a);
