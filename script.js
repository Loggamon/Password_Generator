// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
var symbols = [ "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", '\\', "]", "^", "_", "`", "{", "|", "}", "~" ];
var passwordPool = [];
var newPassword = [];

function generatePassword() {
  
  //Ask how many characters we're using
  //prompt("How many chars?");//this will be used for character number later
  //Ask for Uppercase
  //confirm("Uppercase?");//ok is true;cancel is false
  //confirm("Lowercase?");//ok is true; cancel is false
   var passwordPool = [];
   var newPassword = [];
   //These variables in the function reset my arrays, so that they start empty again.
   //Otherwise, it keeps previous arrays in pool! :(



  var totalChars = window.prompt("How many characters?");
console.log(totalChars);

  if(totalChars < 8) {
      return "Not enough characters! Please try again!";
  } else if (totalChars > 128) {
      return "too many characters! Please try again!";
  } else {
      window.alert("Great!");
  }

  var upperInclude = window.confirm("Do you want to include uppercase characters?");

  if(upperInclude == true) {
      window.alert("Okay!");
      passwordPool.push(upperCase);
  } else {
      window.alert("Okay...");
  }
console.log(passwordPool);

  var lowerInclude = window.confirm("Do you want to include lowercase characters?")

  if(lowerInclude == true) {
      window.alert("Alright!");
      passwordPool.push(lowerCase);
  } else {
      window.alert("Alright...");
  }
console.log(passwordPool);
  var numbInclude = window.confirm("Do you want to include numbers?")

  if(numbInclude == true) {
      window.alert("Excellent!");
      passwordPool.push(numbers);
  } else {
      window.alert("Excellent...");
  }
console.log(passwordPool);

  var symbInclude = window.confirm("Do you want to include symbols/special characters?")
  
  if(symbInclude == true) {
      window.alert("You got it!");
      passwordPool.push(symbols);
  } else {
      window.alert("You got it...");
  }
  
  if(passwordPool <1) {
    return "No characters selected! Please try again!"
}
console.log(passwordPool);
var potentChars = passwordPool.flat(); //This breaks down all of my arrays into a single array! 
console.log(potentChars);

//return (potentChars[Math.floor(Math.random() * potentChars.length)] * totalChars);
//var passwordGiven = 

//Remember; it will read the code from to to bottom

  //return "Is this a good password?"

  for (i = 0; i < totalChars; i++) {
    [Math.floor(Math.random() * potentChars.length)];
    var index = Math.floor(Math.random() * potentChars.length); var elem = potentChars[index];
        newPassword.push(elem);

}
return newPassword.join(''); // this removes those commas between characters!

//onsole.log(passwordGiven);

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
