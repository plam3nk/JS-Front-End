function catInfo(array) {
    let cats = [];
    class Cat {
        constructor(name, age) {
            this.name = name
            this.age = age
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    for (const element of array) {
        const [current_name, current_age] = element.split(" ")
        const newCat = new Cat(current_name, current_age);
        newCat.meow()
        cats.push(newCat)
    }
}

catInfo(['Mellow 2', 'Tom 5'])