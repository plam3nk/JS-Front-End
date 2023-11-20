function charactersInRange(charOne, charTwo) {
    let start = charOne.charCodeAt();
    let end = charTwo.charCodeAt();
    let result = [];

    if (start > end) {
        new_end = start
        start = end
        end = new_end
    }

    for (let i=start+1; i<end; i++){
        char = String.fromCharCode(i)
        result.push(char)
    }

    console.log(result.join(' '))
}

charactersInRange('C','#')