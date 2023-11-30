function piccolo(array) {
    let parkingLot = [];

    array.forEach(element => {

        let [action, numberPlate] = element.split(", ")

        if (action === 'IN' && !parkingLot.includes(numberPlate)) {
            parkingLot.push(numberPlate);
        } else if (action === 'OUT' && parkingLot.includes(numberPlate)) {
            let index = parkingLot.indexOf(numberPlate);
            parkingLot.splice(index, 1);
        }

    });


    if (parkingLot.length > 0) {

        let sortedNumbers = parkingLot.sort((a, b)=> a.localeCompare(b));
        
        sortedNumbers.forEach(n => console.log(n));
    } else {
        console.log("Parking Lot is Empty");    
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
)