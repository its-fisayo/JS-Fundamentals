const args = process.argv.slice(2);
let x = parseInt(args[0]), y = parseInt(args[1]);
function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(x, y));