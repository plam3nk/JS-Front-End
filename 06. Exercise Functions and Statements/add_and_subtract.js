function addSubtract(numOne, numTwo, numThree) {
    let sum = (numOne, numTwo) => {
        return numOne + numTwo
    }

    let subtract = (numOne, numTwo) => {
        return numOne - numTwo
    }
    let first = sum(numOne, numTwo)
    let result = subtract(first, numThree)
    console.log(result)
}

addSubtract(23,
    6,
    10
)