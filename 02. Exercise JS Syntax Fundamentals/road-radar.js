function road_radar(speed, area) {
    let speed_limit;
    if (area == 'motorway') {
        speed_limit = 130;
    } else if (area == 'interstate') {
        speed_limit = 90;
    } else if (area == 'city') {
        speed_limit = 50;
    } else if (area == 'residential') {
        speed_limit = 20;
    }

    if (speed <= speed_limit) {
        console.log(`Driving ${speed} km/h in a ${speed_limit} zone`)
    } else {

        let difference = speed - speed_limit;
        let status;

        if (difference <= 20) {
            status = "speeding";
        } else if (difference <= 40) {
            status = "excessive speeding"
        } else {
            status = "reckless driving"
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speed_limit} - ${status}`)
    } 
}

road_radar(40, 'city')
road_radar(21, 'residential')
road_radar(120, 'interstate')
road_radar(200, 'motorway')