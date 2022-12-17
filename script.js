// Assignment code here
var lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var charactersArray = [' ', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ',', '^', '_', '`', '{', '}', '|', '~', '"'];
var numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var comboArray = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var welcomeMsg = confirm('Welcome to the Password Generator! Are you ready to begin?');
  if (welcomeMsg) {
    console.log('User confirmed they are ready to begin.')
  } else {
    console.log('User was not ready to begin');
  }

  var lengthPrompt = prompt('Please choose a length of at least 8 characters and no more than 128 characters', 'Type your number here');
  if ((lengthPrompt >= 8) && (lengthPrompt <= 128)) {
    console.log(`User choose password with length: ${lengthPrompt}`)
  } else {
    console.log('User did not choose password with correct length');
    prompt('You get one more try- choose a length of at least 8 characters and no more than 128 characters', 'Type your number here');
  }

  var lowerConfirm = confirm('Do you want lowercase letters in your password?');
  if (lowerConfirm) {
    comboArray = comboArray.concat(lowerArray)
    console.log(`User confirmed they want to use lowercase letters. (${lowerConfirm}) ${comboArray}`)
  } else {
    console.log('User did not want to use lowercase letters.');
  }

  var upperConfirm = confirm('Do you want uppercase letters in your password?');
  if (upperConfirm) {
    comboArray = comboArray.concat(upperArray)
    console.log(`User confirmed they want to use uppercase letters. (${upperConfirm}) ${comboArray}`)
  } else {
    console.log('User did not want to use uppercase letters.');
  }

  var charactersConfirm = confirm('Do you want special characters in your password?');
  if (charactersConfirm) {
    comboArray = comboArray.concat(charactersArray)
    console.log(`User confirmed they want to use special characters. (${charactersConfirm}) ${comboArray}`)
  } else {
    console.log('User did not want to use special characters.');
  }

  var numberConfirm = confirm('Do you want numbers in your password?');
  if (numberConfirm) {
    comboArray = comboArray.concat(numberArray)
    console.log(`User confirmed they want to use numbers. (${numberConfirm}) ${comboArray}`)
  } else {
    console.log('User did not want to use numbers.');
  }

  if ((lowerConfirm === false) && (upperConfirm === false) && (charactersConfirm === false) && (numberConfirm === false)) {
    confirm('Please start again, you must choose at least one parameter for password value');
    console.log('User was prompted to start over.');
  }

  var finalPassword = ''

  console.log(lengthPrompt) //Double checks that the length picked is correct before generating password

  for (var i = 0; i < lengthPrompt; i++) {
    var random = Math.floor(Math.random() * comboArray.length);

    /*I am stuck here... Do I need to move the pw function down here?*/

    finalPassword += comboArray[random];
  };

  return finalPassword;


};

