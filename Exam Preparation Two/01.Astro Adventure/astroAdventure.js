function solve(input) {
    const astronautsCount = input.shift();
    const astronauts = {}

    for (let i = 0; i < astronautsCount; i++) {
        const astronautLine = input.shift();
        const [astronautName, oxygenLevel, energyReserves] = astronautLine.split(' ');

        astronauts[astronautName] = {
            oxygen: Number(oxygenLevel),
            energy: Number(energyReserves)
        }
    }

    let command = input.shift();

    while (command !== 'End') {
        const currentLine = command.split(' - ');
        const action = currentLine[0];

        if (action === 'Explore') {
            const astronautName = currentLine[1];
            const energyNeeded = Number(currentLine[2]);

            if (astronauts[astronautName].energy >= energyNeeded) {
                astronauts[astronautName].energy -= energyNeeded
                console.log(`${astronautName} has successfully explored a new area and now has ${astronauts[astronautName].energy} energy!`);
            } else {
                console.log(`${astronautName} does not have enough energy to explore!`);
            }
        } else if (action === 'Refuel') {
            const astronautName = currentLine[1];
            const amount = Number(currentLine[2]);
            const maxEnergy = 200;
            const energyBefore = astronauts[astronautName].energy;

            astronauts[astronautName].energy += amount;
            let difference = amount;
            if (astronauts[astronautName].energy > maxEnergy) {
                astronauts[astronautName].energy = maxEnergy;
                difference = maxEnergy - energyBefore;
            }
            console.log(`${astronautName} refueled their energy by ${difference}!`);

        } else if (action === 'Breathe') {
            const astronautName = currentLine[1];
            const amount = Number(currentLine[2]);
            const maxOxygen = 100;
            const oxygenBefore = astronauts[astronautName].oxygen

            astronauts[astronautName].oxygen += amount
            let difference = amount;
            if (astronauts[astronautName].oxygen > maxOxygen) {
                astronauts[astronautName].oxygen = maxOxygen;
                difference = maxOxygen - oxygenBefore;
            }
            console.log(`${astronautName} took a breath and recovered ${difference} oxygen!`);
        }
        command = input.shift()
    }

    for (const [name, info] of Object.entries(astronauts)) {
        console.log(`Astronaut: ${name}, Oxygen: ${info.oxygen}, Energy: ${info.energy}`)
    }
}

// solve(['3',
//     'John 50 120',
//     'Kate 80 180',
//     'Rob 70 150',
//     'Explore - John - 50',
//     'Refuel - Kate - 30',
//     'Breathe - Rob - 20',
//     'End']
// )

solve(['4',
    'Alice 60 100',
    'Bob 40 80',
    'Charlie 70 150',
    'Dave 80 180',
    'Explore - Bob - 60',
    'Refuel - Alice - 30',
    'Breathe - Charlie - 50',
    'Refuel - Dave - 40',
    'Explore - Bob - 40',
    'Breathe - Charlie - 30',
    'Explore - Alice - 40',
    'End']

)