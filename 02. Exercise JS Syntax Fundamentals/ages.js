function ages(ageParam) {
    let result = 'out of bounds'
    if (0 <= ageParam && ageParam <= 2) {
        result = "baby"
    } else if (3 <= ageParam && ageParam <= 13) {
        result = "child"
    } else if (14 <= ageParam && ageParam <= 19) {
        result = "teenager"
    } else if (20 <= ageParam && ageParam <= 65) {
        result = "adult"
    } else if (ageParam >= 66) {
        result = "elder"
    }
    console.log(result)
}

ages(20)
ages(1)
ages(100)
ages(-1)