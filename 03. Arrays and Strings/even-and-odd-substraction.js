function even_and_odd_subtraction(arrayParam) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < arrayParam.length; i++) {
        if (arrayParam[i] % 2 == 0) {
            even += arrayParam[i]
        } else {
            odd += arrayParam[i]
        }
    }

    let difference = even - odd

    console.log(difference)
}

even_and_odd_subtraction([1,2,3,4,5,6])
even_and_odd_subtraction([3,5,7,9])
even_and_odd_subtraction([2,4,6,8,10])