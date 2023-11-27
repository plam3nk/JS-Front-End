function palindromeIntegers(arrayParam) {
    let reverse = (s) => {
        return s.split("").reverse().join("");
    }
    arrayParam.forEach(element => {
        let string = element.toString()
        let reversed = Number(reverse(string))
        if (element == reversed) {
            console.log("true")
        } else {
            console.log("false")
        }
    });
}

palindromeIntegers([123, 323, 421, 121])
palindromeIntegers([32, 2, 232, 1010])