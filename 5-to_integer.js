let message = "";

function printMessage() {
    const args = process.argv.slice(2);
    if(args[0] == undefined) {
        message += "Not a number";
    } else {
    let firstArgument = parseInt(args[0]);
        if(firstArgument != NaN) {
            message += "My number: " + firstArgument;
            if(message == "My number: NaN"){
                message = "Not a number";
            }
        }else {
            message += "Not a number";
        }
     }
    return message;
}

console.log(printMessage());