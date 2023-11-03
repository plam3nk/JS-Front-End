function cooking_by_numbers(number, first, second, third, fourth, fifth){
    let result = number;
    const operations = [first, second, third, fourth, fifth]
    let i = 0;
    
    while (i < operations.length) {
        if (operations[i] == "chop") {
            result /= 2
        } else if (operations[i] == "dice") {
            result = Math.sqrt(result)
        } else if (operations[i] == "spice") {
            result += 1
        } else if (operations[i] == "bake") {
            result *= 3
        } else if (operations[i] == "fillet") {
            result *= 0.80
        }
        console.log(result)
        i++;
    }
}

cooking_by_numbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cooking_by_numbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')