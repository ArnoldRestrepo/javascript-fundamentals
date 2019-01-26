var name = 'Arnold';

/**
 * @name convertUppercaseNameGlobal
 * @description Convert String Name uppercase in Global Scope Function
 */
function convertUppercaseNameGlobal() {
    name = name.toUpperCase()
    console.log(name)
}

// convertUppercaseNameGlobal()

/**
 * @name convertUppercaseNameLocal
 * @param name String
 * @description Convert String Name to uppercase in Local Scope Function
 */


 const convertUppercaseNameLocal = (name) => {
    name = name.toUpperCase()
    console.log(name)
 }


 convertUppercaseNameLocal(name)