function loadingBar(percentage) {
    let number = percentage / 10;
    let result = ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
    for (let i = 0; i<number; i++){
        result[i] = '%'
    }

    if (percentage == 100) {
        console.log("100% Complete!")
        console.log(`[${result.join('')}]`)
    } else {
        console.log(`${percentage}% [${result.join('')}]`)
        console.log("Still loading...")
    }
}

loadingBar(50)