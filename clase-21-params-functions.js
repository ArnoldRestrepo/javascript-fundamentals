class Person {
    constructor (name, lastName, years, profession, tall) {
        this.name = name
        this.lastName = lastName
        this.years = years
        this.profession = profession
        this.tall = tall
    }

    hello(fn){
        console.log(`Hello ${this.name}`)
        var {name, lastName} = this
        if(fn){
          fn(name, lastName, true)  
        }
    }

    isTall(){
        this.tall < 1.8 ? console.log(`Eres una persona alta`) : console.log(`Eres una persona bajita`)
    }
}

class Developer extends Person{
    constructor (name, lastName, tall) {
        super(name, lastName, tall)
    }

    hello() {
        console.log(`hola, me llamo ${this.name} ${this.lastName} y soy desarrollador (a)`)
    }
}

function responseHello(name, lastName, isDeveloper){
    console.log(`Buen Día ${name} ${lastName}`)
    if (isDeveloper) {
        console.log(`Ah, Mira, no sabías que eres desarrollador/a`)
    }
}

var sacha = new Person('Sacha', 'Lyfszyc', 1.72)
var arnold = new Person('Arnold', 'Restrepo', 1.65)
var arturo = new Person('Arturo', 'Martinez', 1.80)
var erika = new Developer('Erika', 'Luna', 1.85)

sacha.hello(responseHello)
arnold.hello()
arturo.hello()
erika.hello()