function solve(inputLine) {
    const ridersCount = Number(inputLine.shift());
    const riders = {}
    for (let i=0; i < ridersCount; i++) {;
        const riderLine = inputLine.shift();
        const [riderName, fuel, position] = riderLine.split('|')

        riders[riderName] = {
            fuel: Number(fuel),
            position: Number(position),
        }
    }
    let currentLine = inputLine.shift();
    
    while (currentLine !== 'Finish') {
        const command = currentLine.split(' - ')
        const action = command[0];
        if (action === 'StopForFuel') {
            const riderName = command[1];
            const minimumFuel = command[2];
            const changedPosition = command[3];

            if (riders[riderName].fuel < minimumFuel) {
                riders[riderName].position = changedPosition
                console.log(`${riderName} stopped to refuel but lost his position, now he is ${changedPosition}.`)
            } else {
                console.log(`${riderName} does not need to stop for fuel!`);
            }

        } else if (action === 'Overtaking') {
            const firstRider = command[1];
            const secondRider = command[2];

            if (riders[firstRider].position < riders[secondRider].position) {
                const firstRiderPos = riders[firstRider].position;

                riders[firstRider].position = riders[secondRider].position;
                riders[secondRider].position = firstRiderPos;

                console.log(`${firstRider} overtook ${secondRider}!`);
            }


        } else if (action === 'EngineFail') {
            const riderName = command[1];
            const lapsLeft= command[2];

            delete riders[riderName];

            console.log(`${riderName} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
        }
        
        currentLine = inputLine.shift()
    }
    
    for (const [riderName, riderInfo] of Object.entries(riders)) {
        console.log(riderName);
        console.log(`   Final position: ${riderInfo.position}`)
    }
}

solve(["3",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|2",
    "Jorge Lorenzo|80|3",
    "StopForFuel - Valentino Rossi - 50 - 1",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"]
)