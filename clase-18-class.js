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

var user1 = new Person('Arnold', 'Restrepo', 19, 'Frontend', 1.75)

user1.hello()
user1.isTall()