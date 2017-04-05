function printIndices(sentence) {
  var obj = {};
  // sentence = sentence.split(' ').join('');
  for (var i in sentence) {
    var letter = sentence.charAt(i);
    if(letter === ' ') {
      continue;
    } else if(!obj[letter]) {
        obj[letter] = [Number(i)];
    } else {
        obj[letter].push(Number(i));
    }
  }
  return obj;
}

var a = printIndices("lighthouse in the house");

console.log(a);
