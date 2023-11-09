function reverse_an_array_of_numbers(amount, arrayParam) {
    let result = []
    for (let i=0; i < amount; i++) {
        result.push(arrayParam[i])
    }

    result = result.reverse()
    console.log(result.join(' '))
}

reverse_an_array_of_numbers(3, [10, 20, 30, 40, 50])
reverse_an_array_of_numbers(4, [-1, 20, 99, 5])