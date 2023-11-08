function array_of_numbers(arrayParam) {
    let first = arrayParam[0]
    let last = arrayParam[arrayParam.length - 1]
    let result = first + last
    console.log(result)
}

array_of_numbers([20, 30, 40])
array_of_numbers([10, 17, 22, 33])
array_of_numbers([11, 58, 69])