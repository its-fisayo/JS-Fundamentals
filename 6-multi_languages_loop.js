let myArr = ["C is fun", "Python is cool", "JavaScript is amazing"];
let message = myArr[0];
for(let i = 1; i < myArr.length; i++) {
    message += "\n" + myArr[i]
}
console.log(message);