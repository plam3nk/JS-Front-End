function vacation(groupsize, type, day) {
    let total;
    let price_per_person;
    if (type == "Students") {
        if (day == "Friday") {
            price_per_person = 8.45;
        } else if (day == "Saturday") {
            price_per_person = 9.80;
        } else if (day == "Sunday") {
            price_per_person = 10.46;
        }
    } else if (type == "Business") {
        if (day == "Friday") {
            price_per_person = 10.90;
        } else if (day == "Saturday") {
            price_per_person = 15.60;
        } else if (day == "Sunday") {
            price_per_person = 16;
        }
    } else if (type == "Regular") {
        if (day == "Friday") {
            price_per_person = 15;
        } else if (day == "Saturday") {
            price_per_person = 20;
        } else if (day == "Sunday") {
            price_per_person = 22.50;
        }
    }

    total = price_per_person * groupsize

    if (type == "Students" && groupsize >= 30) {
        total *= 0.85
    }

    if (type == "Business" && groupsize >= 100) {
        total -= price_per_person * 10
    }

    if (type == "Regular" && groupsize >= 10 && groupsize <= 20) {
        total *= 0.95
    }

    console.log(`Total price: ${total.toFixed(2)}`)
}

vacation(30,
    "Students",
    "Sunday"
    )

vacation(40,
    "Regular",
    "Saturday"
    )