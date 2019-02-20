function HeredaDe(prototipoHijo, prototipoPadre){
    var noop = function () {}
    noop.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new noop
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Person(name, lastName, years, profession, tall) {
    this.name = name
    this.lastName = lastName
    this.years = years
    this.profession = profession
    this.tall = tall
}

Person.prototype.hello = function() {
    console.log(`Hello ${this.name}`)
}

Person.prototype.isTall = function() {
    this.tall < 1.8 ? console.log(`Eres una persona alta`) : console.log(`Eres una persona bajita`)
} 



function Developer(name, lastName) {
    this.name = name
    this.lastName = lastName    
}

HeredaDe(Developer, Person)

Developer.prototype.hello = function(){
    console.log(`hola, me llamo ${this.name} ${this.lastName} y soy desarrollador (a)`)
}

