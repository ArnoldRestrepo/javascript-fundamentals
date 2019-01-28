const user = {
    name: 'Arnold',
    lastName: 'Restrepo',
    year: 21
}

/**
 * @name birthday
 * @param Object
 * @description Calculate birthday for person object
 */

const birthday = (edad) => {
    edad += 1
    console.log(edad)
}

birthday(user.year)

/**
 * @name birthdayObject
 * @param Object
 * @description Calculate birthday for person object with new Object
 */

const birthdayObject = (person) => {
    return {
        ...person,
        year: person.year + 1
    }
}

