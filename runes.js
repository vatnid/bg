// Runes --> Latin
function rune2latin(input) {

  var r21 = {"ᚠ": "f", "ᚢ": "u", "ᚦ": "þ", "ᚩ": "o", "ᚱ": "r", "ᚳ": "c", "ᚷ": "ȝ", "ᚹ": "w", "ᚻ": "h", "ᚾ": "n", "ᛁ": "i", "ᛄ": "j", "ᛇ": "ǝ", "ᛈ": "p", "ᛉ": "z", "ᛋ": "s", "ᛏ": "t", "ᛒ": "b", "ᛖ": "e", "ᛗ": "m", "ᛚ": "l", "ᛝ": "ŋ", "ᛞ": "d", "ᛟ": "œ", "ᚫ": "a", "ᚪ": "å", "ᚣ": "y", "ᛠ": "æ", "ᛣ": "k", "ᚸ": "g", "ᚡ": "v", "ᚧ": "ð", "ᚤ": "ů"}

  var symbols = /[.,\/#!$%\^&\*;:{}=\-_`~() ]/;
  var output = ""; // initialize output

  for (i = 0; i < input.length; i++) {
    if (input[i] in r2l)
      output += r2l[input[i]];
    else
      output += input[i];
  }
  return output;
}

// Transcription --> Runes
function trans2rune(input) {

  var t2r = {"a": "ᚫ", "å": "ᚪ", "b": "ᛒ", "c": "ᚳ", "d": "ᛞ", "ð": "ᚧ", "e": "ᛖ", "f": "ᚠ", "g": "ᚸ", "h": "ᚻ", "i": "ᛁ", "j": "ᚷ", "k": "ᛣ", "l": "ᛚ", "m": "ᛗ", "n": "ᚾ", "ŋ": "ᛝ", "o": "ᚩ", "p": "ᛈ", "q": "ᚢ", "q̇": "ᚤ", "r": "ᚱ", "s": "ᛋ", "t": "ᛏ", "u": "ᛇ", "v": "ᚥ", "w": "ᚹ", "ʷ": "ᚹ", "x": "ᛋᚳ", "y": "ᛄ", "ʸ": "ᛄ", "z": "ᛉ", "þ": "ᚦ", "́": "̇", "̇": ""}

  var symbols = /[.,\/#!$%\^&\*;:{}=\-_`~() ]/;
  var output = ""; // initialize output

  for (i = 0; i < input.length; i++) {
    if (input[i] in t2r)
      if (input[i] == "q" && input[i+1] == "̇")
        output += "ᚤ";
      else
        output += t2r[input[i]];
    else
      output += input[i];
  }
  return output;
}
