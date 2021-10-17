const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



console.log("Welcome to the password validator tool!")

reader.question("What is your password?", function(input) {
    user_password = input
    if (user_password.length >= 10) {
        console.log("Password created.")
    } else {
        console.log("Sorry, that password isn't long enough. Password must be at least 10 characters long.")
    }

    reader.close()
})