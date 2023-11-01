function leap_year(yearParam) {
    let result = "no"
    if (yearParam % 4 == 0 && yearParam % 100 != 0 && yearParam || yearParam % 400 == 0) {
        result = "yes"
    }

    console.log(result)
}

leap_year(1984)
leap_year(2003)
leap_year(4)