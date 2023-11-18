function simpleCalculator(x, y, operator) {
    const operators = {
        multiply: (x, y) => x * y,
        divide: (x, y) => x / y,
        add: (x, y) => x + y,
        subtract: (x, y) => x - y,
    }

    let result = operators[operator](x, y)
    console.log(result)
}

simpleCalculator(5, 5, 'multiply')
simpleCalculator(40, 8, 'divide')