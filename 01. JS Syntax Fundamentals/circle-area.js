function circle_area(param) {
    let result;
    if (typeof param == 'number') {
        result = 3.14159265359 * (param ** 2)
        result = result.toFixed(2)
    } else {
        result = "We can not calculate the circle area, because we receive a string."
    }
    console.log(result)
}

circle_area(5)
circle_area('name')