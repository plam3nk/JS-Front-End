function storeProvision(firstArray, secondArray) {
    let provision = {};
    for (let i = 0; i < firstArray.length; i++) {
        if (i % 2 != 0) {
            continue;
        } else {
            if (firstArray[i] in provision) {
                provision[firstArray[i]] += Number(firstArray[i+1])
            } else {
                provision[firstArray[i]] = Number(firstArray[i+1])
            }
        }
    }

    for (let i = 0; i < secondArray.length; i++) {
        if (i % 2 != 0) {6
            continue;
        } else {
            if (secondArray[i] in provision) {
                provision[secondArray[i]] += Number(secondArray[i+1])
            } else {
                provision[secondArray[i]] = Number(secondArray[i+1])
            }
        }
    }

    for (const[key, value] of Object.entries(provision)) {
        console.log(`${key} -> ${value}`)
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )