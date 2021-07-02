// Runes --> Latin
function runes(input) {
  var runes = ["ᚠ", "ᚢ", "ᚦ", "ᚩ", "ᚱ", "ᚳ", "ᚷ", "ᚹ", "ᚻ", "ᚾ", "ᛁ", "ᛄ", "ᛇ", "ᛈ", "ᛉ", "ᛋ", "ᛏ", "ᛒ", "ᛖ", "ᛗ", "ᛚ", "ᛝ", "ᛞ", "ᛟ", "ᚪ", "ᚫ", "ᚣ", "ᛠ", "ᛣ", "ᚸ"]
  var latin = ["f", "v", "þ", "o", "r", "č", "ǧ", "w", "h", "n", "i", "y", "u", "p", "z", "s", "t", "b", "e", "m", "l", "ŋ", "d", "œ", "å", "a", "y", "æ", "k", "g"]

  var symbols = /[.,\/#!$%\^&\*;:{}=\-_`~() ]/;
  var output = ""; // initialize output

  var words = input.split();

  for (i = 0; i < input.length; i++) {
    var assigned = false;
    for (j = 0; j < alphabet.length; j++) {
      if (!assigned) {
        if (input[i] == alphabet[j]) { // if the letter matches one in the alphabet
          output += latin[j];
          assigned = true;
        }
      }
    }
    if (!assigned)
      output += input[i];
  }
  return output;
}
