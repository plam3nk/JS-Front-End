function array_rotation(arrayParam, rotations) {
    let result = arrayParam
    for (let i = 0; i<rotations; i++) {
        const number = result.splice(0, 1).pop()
        result.push(number)
    }

    console.log(result.join(" "))
}

array_rotation([51, 47, 32, 61, 21], 2)
array_rotation([32, 21, 61, 1], 4)
array_rotation([2, 4, 15, 31], 5)