// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  const specialChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";

  //ask for length(8-128)
  let passwordLength = parseInt(prompt("Enter a password length:"));
  if(passwordLength < 8 || passwordLength > 128 || Number.isNaN(passwordLength)){
    alert("ERROR: INVALID PASSWORD LENGTH: Password length should be an INTEGER greater than 8 and less than 128 characters");
    return "";
  }

  //ask for character choice
  let includeLower = confirm("Do you want to include lowercase characters?"),
      includeUpper = confirm("Do you want to include uppercase characters?"),
      includeNumbers = confirm("Do you want to include numbers?"),
      includeSpecial = confirm("Do you want to include special characters?");

  if(!includeLower && !includeUpper && !includeNumbers && !includeSpecial){
    alert("ERROR: INVALID CHARACTER CHOICE: Include at least one type of character");
    return "";
  }

  //possible character handling
  let possibleChars = "";

  if(includeLower){possibleChars += lowerChars;}
  if(includeUpper){possibleChars += upperChars;}
  if(includeNumbers){possibleChars += numberChars;}
  if(includeSpecial){possibleChars += specialChars;}

  //generate random password based on handling
  let finalPass = "";
  for(let i = 0; i<passwordLength; i++){
    let randI = Math.floor(Math.random() * possibleChars.length);
    let randChar = possibleChars.charAt(randI);
    finalPass += randChar;
  }

  //return generated pass
  return finalPass;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
