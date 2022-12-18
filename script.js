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

//Here is the main function that generates the password. First you get a welcome message asking if you are ready to begin. 

function generatePassword() {
  comboArray = [] //clears comboArray at the beginning of each button click. 
  var welcomeMsg = confirm('Welcome to the Password Generator! Are you ready to begin?');
  if (welcomeMsg) {
    console.log('User confirmed they are ready to begin.')
  } else {
    console.log('User was not ready to begin');
  }


  // Then you need to choose a length for your password. It will keep asking you until you enter a number within the given parameters. 

  var lengthPrompt = prompt('Please choose a length of at least 8 characters and no more than 128 characters', 'Type your number here');
  while (lengthPrompt <= 8 || lengthPrompt >= 128) {
    lengthPrompt = prompt('Enter length again.');
  }

  // The next four if statements are asking the user if they want certain characters in their password. 

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

  // If they decline all of the types of characters, they will get a message stating that they have to choose at least one. 

  if ((lowerConfirm === false) && (upperConfirm === false) && (charactersConfirm === false) && (numberConfirm === false)) {
    var tryagain = confirm('Please start again, you must choose at least one parameter for password value');
    if (tryagain) { generatePassword() }
    else {
      return "Thank you for using the password generator.";
    }
    console.log('User was prompted to start over.');
  }

  //empty variable set for the final password

  var finalPassword = ''

  //Double checks that the length picked is correct before generating password

  console.log(lengthPrompt)

  // for loop randomizes the characters at the user's set length and reports it back into the final password. 

  for (var i = 0; i < lengthPrompt; i++) {
    var random = Math.floor(Math.random() * comboArray.length);
    finalPassword += comboArray[random];
  };

  return finalPassword;


};

