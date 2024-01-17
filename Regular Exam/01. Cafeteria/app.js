function solve(input) {
    const baristasCount = Number(input.shift())
    const baristas = {}

    for (let i = 0; i < baristasCount; i++) {
        currentBaristaLine = input.shift();
        const [baristaName, shift, coffeeTypeList] = currentBaristaLine.split(' ');
        baristas[baristaName] = {
            shift: shift,
            coffeeTypes: coffeeTypeList.split(','),
        }
    }

    command = input.shift()

    while (command !== 'Closed') {
        const currentLine = command.split(' / ');

        const action = currentLine[0];
        const baristaName = currentLine[1];

        if (action === 'Prepare') {
            const shift = currentLine[2];
            const coffeeType = currentLine[3];

            if (shift === baristas[baristaName].shift) {
                if (baristas[baristaName].coffeeTypes.includes(coffeeType)) {
                    console.log(`${baristaName} has prepared a ${coffeeType} for you!`);
                    command = input.shift()
                    continue
                } else {
                    console.log(`${baristaName} is not available to prepare a ${coffeeType}.`);
                }
            } else {
                console.log(`${baristaName} is not available to prepare a ${coffeeType}.`);
            }
        } else if (action === 'Change Shift') {
            const newShift = currentLine[2];

            baristas[baristaName].shift = newShift;
            console.log(`${baristaName} has updated his shift to: ${newShift}`);
        } else if (action === 'Learn') {
            const newCoffeeType = currentLine[2];
            if (baristas[baristaName].coffeeTypes.includes(newCoffeeType)) {
                console.log(`${baristaName} knows how to make ${newCoffeeType}.`)
            } else {
                baristas[baristaName].coffeeTypes.push(newCoffeeType);

                console.log(`${baristaName} has learned a new coffee type: ${newCoffeeType}.`);
            }
        }
        command = input.shift()

    }

    for (const [name, info] of Object.entries(baristas)) {
        console.log(`Barista: ${name}, Shift: ${info.shift}, Drinks: ${info.coffeeTypes.join(', ')}`);
    }
}

// solve([
//     '3',
//     'Alice day Espresso,Cappuccino',
//     'Bob night Latte,Mocha',
//     'Carol day Americano,Mocha',
//     'Prepare / Alice / day / Espresso',
//     'Change Shift / Bob / night',
//     'Learn / Carol / Latte',
//     'Learn / Bob / Latte',
//     'Prepare / Bob / night / Latte',
//     'Closed']
// )

solve(['4',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol night Americano,Mocha',
    'David night Espresso',
    'Change Shift / Bob / day',
    'Prepare / Carol / day / Cappuccino',
    'Learn / Bob / Mocha',
    'Closed'])