let message = "";

function printMessage() {
    const args = process.argv.slice(2);
    if(args[0] == undefined) {
        message += "No argument";
    } else if(args[0] != undefined) {
        message += args[0];
    }
    return message;
}

console.log(printMessage(""));