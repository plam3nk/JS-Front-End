function meetings(array) {
    let meetings = {};
    for (const element of array) {
        const [day, name] = element.split(' ');
        if (day in meetings) {
            console.log(`Conflict on ${day}!`)
        } else {
            meetings[`${day}`] = name
            console.log(`Scheduled for ${day}`)
        }
    }

    for (const [key, value] of Object.entries(meetings)) {
        console.log(`${key} -> ${value}`)
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)