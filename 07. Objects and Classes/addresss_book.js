function addressBook(array) {
    let book = {};
    for (const element of array) {
        const [name, address] = element.split(":")
        book[`${name}`] = address
    }
    
    const sorted = Object.entries(book).sort()
    for (element of sorted) {
        console.log(`${element[0]} -> ${element[1]}`)
    }
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)