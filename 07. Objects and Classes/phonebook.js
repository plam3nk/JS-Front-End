function phonebook(array) {
    let phones = {};
    for (let i=0; i<array.length; i++){
        let namePhone = array[i].split(" ")
        let name = namePhone[0]
        let phone = namePhone[1]
        phones[`${name}`] = phone
    }

    for (const [key, value] of Object.entries(phones)) {
        console.log(`${key} -> ${value}`)
    }
}

phonebook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)