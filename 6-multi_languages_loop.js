let myArr = ["C is fun", "Python is cool", "JavaScript is amazing"];
let message = myArr[0];
let i = 1;
while( i < myArr.length) {
    message += "\n" + myArr[i];
    i++;
}
console.log(message);