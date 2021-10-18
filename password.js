const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



console.log("Welcome to the password validator tool!")

reader.question("What is your password?", function(input) {
    user_password = input
    if (user_password.endsWith(".")) {
        console.log("Sorry, your password cannot end with a period.") 
    } 
    else if (user_password.includes("@")) {
        console.log("Sorry, your password cannot contain an @ symbol.")
    } 
    else if (user_password.length >= 10) {
        console.log("Password created.")
        console.log(`+-+-+-+ +-+-+-+-+
|A|l|l| |s|e|t|!|
+-+-+-+ +-+-+-+-+`)
    } 
    else if (user_password.length < 10) {
        console.log("Sorry, that password isn't long enough. Password must be at least 10 characters long.")
    }

    reader.close()
})