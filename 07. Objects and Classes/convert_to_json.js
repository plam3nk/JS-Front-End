function convertToJSON(firstName, lastName, hairColor) {
    let person = {name: firstName, lastName, hairColor}
    let stringifiedPerson = JSON.stringify(person)
    console.log(stringifiedPerson)
}

convertToJSON('George', 'Jones', 'Brown')