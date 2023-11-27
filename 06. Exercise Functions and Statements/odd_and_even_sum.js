function sumOddEven(number) {
    let numberString = number.toString();
    let oddSum = 0;
    let evenSum = 0;
    for (let i=0; i<numberString.length;i++){
        current = Number(numberString[i])
        if (current % 2 == 0) {
            evenSum += current
        } else {
            oddSum += current
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

sumOddEven(1000435)