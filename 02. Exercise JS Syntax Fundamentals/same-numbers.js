function same_numbers(number) {
    const numberStr = number.toString();
    let is_same = true;
    let digits_sum = 0;

    for (let i = 0; i < numberStr.length; i++) {

        const digit = parseInt(numberStr[i], 10);
        digits_sum += digit

        if (digit !== parseInt(numberStr[0])) {
            is_same = false;
        }
    }

    console.log(is_same);
    console.log(digits_sum);
}

same_numbers(2222222)
same_numbers(1234)