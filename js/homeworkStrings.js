
//! Homework Strings Methods 

//? 1. Tomar un string del usuario 

/*
1. imprimir en consola el numero de caracteres que tiene esa cadena
2. Imprimir cuantas vocales estan presentes
3. Imprimri cada uno de los las palabras que hay ('hola koder') => ['hola', 'koders'}
*/

// 1. imprimir en consola el numero de caracteres que tiene esa cadena
let cadena = "Soy la brisa del mar de tus ojos"
console.log(cadena.length)

// 2. Imprimir cuantas vocales estan presentes
let vocals = cadena.match(/[aeiou]/gi)

console.log(vocals)

// 3. Imprimri cada uno de los las palabras que hay ('hola koder') => ['hola', 'koders'}
let letras = cadena.split(" ")
console.log(letras)

//? 2. Ejercicios de la documentación leida de Strings 
//Pedir al usuario que ingrese una palabra 
//Validar si el usuario no ha ingresado la palabra 
//Validar cuantas vocales tiene la palabra ingresada por el usuario 
//Leer la documentacion de metodos de string
//Hacer uno o mas pruebas  con algunos de los metodos leidos (presentar en clase)

let vocales = prompt('Ingresa una palabra')

if (vocales === null) {
    console.log('No has ingresado nada')
} else {
    let cuentaVocal = vocales.match(/[aeiou]/g).length 
    window.alert(`La palabra ${vocales} tiene ${cuentaVocal} vocales`);
}


//The search() Method

let frase = 'Por que en los ojos correctos siempre seras arte'

let buscar = frase.search('ojos')

//window.alert(frase.concat(' --->  =', buscar))
//console.log(buscar)

//window.alert(`La posición ${buscar}`)


// StartsWith

let nombre="Jazmin"

let result=nombre.startsWith("Jaz")

window.alert(`El caracter inicial del nombre ${nombre} es ${result}`)

