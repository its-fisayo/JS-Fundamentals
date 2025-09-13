const args = process.argv.slice(2);
let x = parseInt(args[0]);
let result = 1;

function factorial(num) {
    if(isNaN(x) == true) {
        result = 1;
    } else if(x == 0) {
        result = 1;
    } else {
        for(let i=1; i <= x; i++) {
            result *= i;
        }
    }
    return result;
}

console.log(factorial(x));