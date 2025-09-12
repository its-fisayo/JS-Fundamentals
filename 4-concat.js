let message = "";

function printMessage() {
    const args = process.argv.slice(2);
   message = args[0] + " is " + args[1];
    return message;
}

console.log(printMessage(""));