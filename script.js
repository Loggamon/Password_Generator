// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
//var symbols = [ "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", '\', "]", "^", "_", "`", "{", "|", "}", "~" ];
var passwordPool = [];

function generatePassword() {
  //console.log('yo'); //this works!
  //Ask how many characters we're using
  //prompt("How many chars?");//this will be used for character number later
  //Ask for Uppercase
  //confirm("Uppercase?");//ok is true;cancel is false
  //confirm("Lowercase?");//ok is true; cancel is false
  var totalChars = window.prompt("How many characters?");

  if(totalChars < 8) {
      return "Not enough!";
  } else if (totalChars > 128) {
      return "too many!";
  } else {
      window.alert("Great!")
  }

  var upperInclude = window.confirm("Uppercase?");

  if(upperInclude == true) {
      window.alert("Groovy!")
  } else {
      window.alert("Okay...")
  }

  var lowerInclude = window.confirm("Lowercase?")

  if(lowerInclude == true) {
      window.alert("Groovy!")
  } else {
      window.alert("Okay...")
  }

  var numbInclude = window.confirm("Numbers?")

  if(numbInclude == true) {
      window.alert("Sick!")
  } else {
      window.alert("Nasty...")
  }

  var symbInclude = window.confirm("Symbols?")
  
  if(symbInclude == true) {
      window.alert("Bro!")
  } else {
      window.alert("Bro...")
  }
  



//Remember; it will read the code from to to bottom

  //return "Is this a good password?"
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
