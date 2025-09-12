let message = "";

function printMessage() {
    const args = process.argv.slice(2);
    if(args.length == 0) {
        message += "No argument";
    } else if(args.length == 1) {
        message += "Argument found";
    } else {
        message += "Arguments found";
    }
    return message;
}

console.log(printMessage("bfb"))