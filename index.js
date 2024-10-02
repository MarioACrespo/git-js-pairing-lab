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

    for (let i = 0; i <= 100; i++){
        if (i % 3 === 0){
            console.log(i)
        }
    }
}

// multiplesOfThree()
//3.
const multiplesOfThreeOrFive = () => {

    for (let i = 0; i <= 100; i++){
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