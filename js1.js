const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function reverseNumber() {
  rl.question("Enter a number: ", function(userInput) {
    const num = parseInt(userInput, 10);
    
    if (isNaN(num)) {
      console.log("Invalid input. Please enter a valid number.");
    } else {
      const numStr = num.toString();
      const reversedStr = numStr.split('').reverse().join('');
      const reversedNum = parseInt(reversedStr, 10);
      
      console.log(`Reversed number: ${reversedNum}`);
    }

    rl.close();
  });
}

reverseNumber();