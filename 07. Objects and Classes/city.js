function city(object) {
    for (const [key,value] of Object.entries(object)) {
        console.log(`${key} -> ${value}`)
    }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)