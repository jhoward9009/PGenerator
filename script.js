// Assignment code here

var letter = "abcdefghijklmnopqrstuvwxyz"
var symbol = "!@#$%^&*()"
var number = 1234567890

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  var prompt1 = window.prompt("Would you like your password to include letters?")
  var prompt2 = window.prompt("Would you like your password to include numbers?")
  var prompt3 =window.prompt("Would you like your password to include symbols?")

if(prompt1 === YES.toUpperCase()){

}
  
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
