angular.module('filters', [])

.filter('pigLatin', function() {
  var translateWord = function(word) {
    var first = word.slice(0, 1); 
    var middle = word;
    var last = word.slice(-1);
    var consonants = /[B-Z[^EIOU]]/i;
    var vowels = /[AEIOU]/i;
    var punctuation = /[\W_]/;
    var firstVowel = word.search(vowels);
    // if word starts/ends with punc
    if (punctuation.test(first)) {
      middle = word.slice(1);
    }
    else {
      first = '';
    }
    if (punctuation.test(last)) {
      middle = word.slice(0, -1);
    }
    else {
      last = '';
    }
    // if word starts with a vowel
    if (firstVowel === 0) {
      middle = middle + 'way';
      return first + middle + last;
    }
    else {
      var beg = middle.slice(0, firstVowel) + 'ay';
      var end = middle.slice(firstVowel);
      middle = end + beg;
    }
    return first + middle + last;
  };
  var translate = function(words) {
    var word;
    var _words = [];
    var split = words.split(' ');
    for (var i = 0; i < split.length; i++) {
      _words.push(translateWord(split[i]));
    }
    return _words.join(' ');
  };
  return translate;
});