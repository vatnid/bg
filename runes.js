// Runes --> Latin
function rune2latin(input) {
  var runes = ["ᚠ", "ᚢ", "ᚦ", "ᚩ", "ᚱ", "ᚳ", "ᚷ", "ᚹ", "ᚻ", "ᚾ", "ᛁ", "ᛄ", "ᛇ", "ᛈ", "ᛉ", "ᛋ", "ᛏ", "ᛒ", "ᛖ", "ᛗ", "ᛚ", "ᛝ", "ᛞ", "ᛟ", "ᚪ", "ᚫ", "ᚣ", "ᛠ", "ᛣ", "ᚸ"]
  var latin = ["f", "v", "þ", "o", "r", "č", "ǧ", "w", "h", "n", "i", "y", "u", "p", "z", "s", "t", "b", "e", "m", "l", "ŋ", "d", "œ", "å", "a", "y", "æ", "k", "g"]

  var symbols = /[.,\/#!$%\^&\*;:{}=\-_`~() ]/;
  var output = ""; // initialize output

  var words = input.split();

  for (i = 0; i < input.length; i++) {
    var assigned = false;
    for (j = 0; j < runes.length; j++) {
      if (!assigned) {
        if (input[i] == runes[j]) { // if the letter matches one in the alphabet
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

// Transcription --> Runes
function trans2rune(input) {
  var transcription = ["a", "å", "b", "c", "d", "ð", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "q̇", "r", "s", "t", "u", "v", "w", "ʷ", "x", "y", "ʸ", "z", "þ", "́"]
  var runes = ["ᚫ", "ᚪ", "ᛒ", "ᚳ", "ᛞ", "ᚧ", "ᛖ", "ᚠ", "ᚸ", "ᚻ", "ᛁ", "ᚷ", "ᛣ", "ᛚ", "ᛗ", "ᚾ", "ᚩ", "ᛈ", "ᚢ", "ᚤ", "ᚱ", "ᛋ", "ᛏ", "ᛇ", "ᚡ", "ᚹ", "ᚹ", "ᛋᚳ", "ᛄ", "ᛄ", "ᛉ", "ᚦ", "̇"]

  var symbols = /[.,\/#!$%\^&\*;:{}=\-_`~() ]/;
  var output = ""; // initialize output

  var words = input.split();

  for (i = 0; i < input.length; i++) {
    var assigned = false;
    for (j = 0; j < transcription.length; j++) {
      if (!assigned) {
        if (input[i] == transcription[j]) { // if the letter matches one in the alphabet
          if (input[i] == "q")
            if (input[i+1] == "̇")
              output += "ᚤ";
            else
              output += "ᚢ";
          else
            output += runes[j];
          assigned = true;
        }
      }
    }
    if (!assigned && input[i] !== "̇")
      output += input[i];
  }
  return output;
}