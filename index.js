//Code your solutions in this file

//1.

const fiveToOneHundred = () => {
    for (let i = 5;i <= 100; i++) {
        console.log(i);
    }
}

// fiveToOneHundred()
//2.

const multiplesOfThree = () => {

    for (let i = 1; i <= 100; i++){
        if (i % 3 === 0){
            console.log(i)
        }
    }
}

// multiplesOfThree()
//3.
const multiplesOfThreeOrFive = () => {

    for (let i = 1; i <= 100; i++){
        if (i % 3 === 0){
            console.log(i)
        }
        if (i % 5 === 0){
            console.log(i)
        }
    }
}

//multiplesOfThreeOrFive()
//4.

const unitlNum = (num) => {
    let x = 1
    while (x !== num){
        console.log(x)
        x++
    }
    console.log(x)
}

//unitlNum(5)
//5. 
const multiply = (num1,num2) => {
    return num1 * num2;
}

//console.log(multiply(10,2))
//6.

const add = (a, b) => {
    return a + b
}

//console.log(add(2, -2))
//7.
const isNegative = (num) => {
    if (num <= 0) {
        return true;
    } else {
        return false
    }
}

//console.log(isNegative(-10))
//console.log(isNegative(10))
//8.

const triangleArea = (b, h) => {
    return .5 * (b * h)
}

// console.log(triangleArea(5, 7))
//9.
const betweenTwentyAndForty = (num) => {
    if (20 < num && num < 40) {
        return true
    } else {
        return false
    }
}

//console.log(betweenTwentyAndForty(20))
//console.log(betweenTwentyAndForty(21))
//console.log(betweenTwentyAndForty(33))
//console.log(betweenTwentyAndForty(40))
//10.

const largest = (a, b, c) => {
    if (a > b && a > c) {
        return a
    } else if (b > a && b > c) {
        return b
    } else if (c > a && c > b) {
        return c
    }
}

// console.log(largest(4, 6, 8))


const printTime = () => {
    const time = new Date();
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()

    console.log(`${hours}:${minutes}:${seconds}`)
}

// printTime()

const isLeapYear = (year) => {
    if (year % 100 === 0){
        if (year % 400 === 0){
            return true
        } else {
            return false
        }
    } else {
        if (year % 4 === 0) {
            return true
        } else {
            return false
        }
    }
    
} 

// console.log(isLeapYear(2000))
// console.log(isLeapYear(1900))

const changeString = (string) => {
    let holder = []
    for (let i = 0; i < string.length; i++){
        let charCode = string.charCodeAt(i);
        holder.push(charCode + 1)
    }

    for (x in holder){
        holder[x] = String.fromCharCode(holder[x])
    }
    
    holder = holder.join('')
    console.log(holder)
}

// changeString('abc')
// changeString('acdbkdvladch')