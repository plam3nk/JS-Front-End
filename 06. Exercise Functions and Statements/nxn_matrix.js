function nxnMatrix(number) {
    let matrix = new Array(number).fill(new Array(number).fill(number))
    matrix.forEach( arr => {
        console.log(arr.join(' '))
    })
}

nxnMatrix(3)