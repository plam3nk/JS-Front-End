function solve(array) {
    for (const element of array) {
        const[town, latitude, longitude] = element.split(" | ")
        let currentTownInfo = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }

        console.log(currentTownInfo)
    }
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)