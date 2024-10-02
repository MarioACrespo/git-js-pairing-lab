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

console.log(add(2, -2))