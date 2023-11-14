function list_of_names(arrayParam) {
    let sortedArray = arrayParam.sort()
    for (let i=0; i<arrayParam.length; i++) {
        console.log(`${i+1}.${arrayParam[i]}`)
    }
}

list_of_names(["John", "Bob", "Christina", "Ema"])