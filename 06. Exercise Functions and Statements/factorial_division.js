function factorialDivision(numOne, numTwo) {
    let firstFactorial = 1;
    let secondFactorial = 1;
    for (let i=1; i<=numOne; i++){
        firstFactorial *= i
    }

    for (let i=1; i<=numTwo; i++){
        secondFactorial *= i
    }

    let result = firstFactorial / secondFactorial
    console.log(result.toFixed(2))

}

factorialDivision(5, 2)
factorialDivision(6, 2)