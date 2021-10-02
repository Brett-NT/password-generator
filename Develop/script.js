// Assignment code here
var password = document.getElementById("password");
var length = 8;
var charSet = "abcdefghijklmnopqrstuvwxyz";
var charSetUp = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charSetNum = "abcdefghijklmnopqrstuvwxyz0123456789";
var charSetSpec = "abcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var charSetNumSpec = "abcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var charSetUpSpec = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var charSetUpNum = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var charSetUpNumSpec = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var retVal = "";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePrompts);


// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePrompts() {
  promptInput();
  var password = generatePassword();
  writePassword(password);
}

function promptInput() {
  function lengthPrompt() {
  var passwordLength = prompt("How long would you like your password to be? Please select between 8 characters and 128 characters");
  if (passwordLength > 8 && passwordLength < 128) {
    length = passwordLength;
  } else {
    alert("Please select a number between 8 and 128.");
    lengthPrompt();
  }
}
lengthPrompt();

  var passwordCase = confirm("Do you want your password to include uppercase letters? 'Ok' for yes, 'Cancel' for no.");
  var passwordNum = confirm("Do you want your password to include numbers? 'Ok' for yes, 'Cancel' for no.");
  var passwordSpec = confirm("Do you want your password to include special characters? 'Ok' for yes, 'Cancel' for no.");

  if (passwordCase && passwordNum && passwordSpec) {
    charSet = charSetUpNumSpec;
  } else if (passwordCase && passwordNum && !passwordSpec) {
    charSet = charSetUpNum;
  } else if (passwordCase && !passwordNum && passwordSpec) {
    charSet = charSetUpSpec;
  } else if (passwordCase && !passwordNum && !passwordSpec) {
    charSet = charSetUp;
  } else if (!passwordCase && passwordNum && passwordSpec) {
    charSet = charSetNumSpec;
  } else if (!passwordCase && passwordNum && !passwordSpec) {
    charSet = charSetNum;
  } else if (!passwordCase && !passwordNum && passwordSpec) {
    charSet = charSetSpec;
  } else {
    charSet = charSet;
  }
}

function generatePassword() {
  console.log(length);
  for (var i = 0, n = charSet.length; i < length; i++) {
    retVal += charSet.charAt(Math.floor(Math.random() * n));
}
return retVal;
}

