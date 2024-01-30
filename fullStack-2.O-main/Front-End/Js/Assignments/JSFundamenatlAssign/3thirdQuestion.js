/* 
Q3. Write a JavaScript program that demonstrates the use of character classes in regular expressions.
Create a function that searches for specific character classes in a given string and returns the matches. Test
the function with patterns for digits, uppercase letters, lowercase letters, and special characters.
*/ 

function findCharacterClassMatches(inputString){
 
     
    var digitPattern = /\d/g; 
    var uppercasePattern = /[A-Z]/g;     
    var lowercasePattern = /[a-z]/g;     
    var specialCharPattern = /[^a-zA-Z0-9]/g;

    function findMatches(pattern ,label){
     let matches = inputString.match(pattern)
      console.log(`Matches for ${label}:`, matches);
    }

    findMatches(digitPattern, "Digits");
    findMatches(uppercasePattern, "Uppercase Letters");
    findMatches(lowercasePattern, "Lowercase Letters");
    findMatches(specialCharPattern, "Special Characters");
}


let sampleString = "Hello123! How are you today?";

findCharacterClassMatches(sampleString)