function employeesPN(array) {
    let employes = {};
    for (const element of array) {
        employes[element] = element.length
    }

    for (const[key, value] of Object.entries(employes)) {
        console.log(`Name: ${key} -- Personal Number: ${value}`)
    }
}

employeesPN([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )