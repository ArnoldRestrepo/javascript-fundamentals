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


class Car {
    constructor(model, price, color, type){
        this.model = model
        this.price = price
        this.color = color
        this.type = type
    }

    chooseCar(){
        switch (this.model.toLowerCase()) {
            case 'mazda':
                console.log('Your Cars is Mazda')
                break;
            case 'chevrolet':
                console.log('Your Cars is Chevrolet')
                break;
            case 'bmw':
                console.log('Your Cars is BMW')
                break;
            default:
                console.log('The choose car is incorrect!')    
                break;
        }
    }

    buyCar(){
        console.log(`The car choose is: ${this.model}, your price: ${this.price}, your color: ${this.color} and type is ${this.type}`)
    }
}

const mazda = new Car('audi', 3400, 'red', 'cupper')

mazda.buyCar()
mazda.chooseCar()

