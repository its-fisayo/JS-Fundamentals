let message = "";

function printMessage() {
    const args = process.argv.slice(2);
    if(args[0] == undefined) {
        message += "No argument";
    } else if(args[1] == undefined) {
        message += args[0];
    } else if(args[2] == undefined) {
        message += args[0] + " " + args[1];
    }
    return message;
}

console.log(printMessage(""));