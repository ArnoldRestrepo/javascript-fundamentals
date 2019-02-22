


class Person {
    constructor (name, lastName, years, profession, tall) {
        this.name = name
        this.lastName = lastName
        this.years = years
        this.profession = profession
        this.tall = tall
    }

    hello(){
        console.log(`Hello ${this.name}`)
    }

    isTall(){
        this.tall < 1.8 ? console.log(`Eres una persona alta`) : console.log(`Eres una persona bajita`)
    }
}

const user1 = new Person('Arnold')

class Developer extends Person{
    constructor (name, lastName, tall) {
        super(name, lastName, tall)
    }

    hello() {
        console.log(`hola, me llamo ${this.name} ${this.lastName} y soy desarrollador (a)`)
    }
}



