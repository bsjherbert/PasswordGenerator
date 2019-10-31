//we define the available character types our password can have
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];

//we define the user desired character types
var characterTypes = [];

//we ask the user how long they want their password
var passwordLength;
//we initialize, but dont define, our user input (true or false)
var userUpperCase;
var userLowerCase;
var userNumbers;
var userSpecialChar;

var randomlySelectedArray;
var randomlySelectedCharacter;

//we initialize a variable that will hold our randomly generated password
var password;


//we create a function that gather information from the user
function userPrompt() {
    //we reset the desired character types, in case the user wants to generate multiple passwords
    characterTypes = [];
    randomlySelectedArray = "";
    randomlySelectedCharacter = "";

    //we ask how long they want their password
    passwordLength = prompt("How many characters do you want your password to be? (between 8-128)")

    //we make sure the password is between 8 and 128 characters
    if (passwordLength < 8 || passwordLength > 128) {
        //if it is not between 8 and 128 we alert them of their error
        alert("Enter number between 8-128")
        //we also start the user info gathering over again
        userPrompt();
    }

    //we ask which charcter types they want
    // console.log(passwordLength);
    userUpperCase = confirm("Do you want uppercase letters?");
    userLowerCase = confirm("Do you want lowercase letters?");
    userNumbers = confirm("Do you want numbers?");
    userSpecialChar = confirm("Do you want speical characters?");

    //if they select one of the character types, we push it to the character types array
    if (userUpperCase === true) {
        characterTypes.push(upperCase);
    }
    if (userLowerCase === true) {
        characterTypes.push(lowerCase);
    }
    if (userNumbers === true) {
        characterTypes.push(numbers);
    }
    if (userSpecialChar === true) {
        characterTypes.push(specialCharacters);
    }
    //ensure that the user has selected at least one character type
    if (characterTypes.length < 2) {
        alert("Select more than 1 character type for security")
        userPrompt()
    } else {
        console.log(characterTypes);
        randomArray(characterTypes);
        randomChar(randomlySelectedArray);
    }

    //displays selected character types in the console
    // console.log(characterTypes)
}


//Randomize password

function randomArray(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    randomlySelectedArray = array[randomIndex];
}

// randomArray(characterTypes);

function randomChar(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    randomlySelectedCharacter = arr[randomIndex]
    console.log("random character: " + randomlySelectedCharacter);
}




