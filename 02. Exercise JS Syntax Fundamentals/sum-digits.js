function sum_digits(number) {
    let result = 0;
    const numberStr = number.toString()

    for (let i = 0; i < numberStr.length; i++) {
        const digit = parseInt(numberStr[i], 10);
        result += digit;
    }

    console.log(result)
}

sum_digits(245678)
sum_digits(97561)
sum_digits(543)