//! Sesión 08 JavaScript 

/** Pratica grupal 1 
Tomar 2 ejercicios del dia de ayer y refactorizar a arrow functions*/
//! estas practicas las tiene mi equipo con el que trabaje en ese momento. 

/* Practica Grupal 2
Arrow function
Pedir al usuario una cadena de texto
Declarar una función flecha para
Pasarle la oración del usuario como parámetro de la función declarada
verificar si esa oración es un palíndromo
Retornar el resultado y mostrarlo al usuario (usando log o aler)
Por ejemplo:
// isPalindrome('hola') -> No es un palíndromo
// isPalindrome('oso') -> SI es un palindromo
 
   Podemos probar con las siguientes ->
   anita lava la tina -> Palindromo
   oso -> Palindromo
   seres -> Palindromo
 
   Hint / Pista
    Quitamos los espacios

Enviar un mensaje a 20a-generación

*/ 

let text = prompt("Ingresa un texto")

const palindrom = (cadena) => {
    const cadenaReversed = cadena.split("").reverse().join("");
  
    return cadenaReversed === cadena ? "es palindromo" : "no es palindromo";
  }

console.log(palindrom (text))


//! Practica individual 1 sesion 08 - arrays methods
/**
 * Toma un metod y explicar
Evitar estos metodos: forEach, map, reduce, filter, find
 */

//? Array method "unshift"

const reactions = ['❤', '😆', '😡', '😢', '👍🏻'];
reactions.unshift('🎉');

console.log(reactions)

//? Array method "toLocaleString" 

let array1 = ["Breeze", 5];

// returns string representation of array
let stringFromArray = array1.toLocaleString();

console.log(stringFromArray);

/**
 * 
 */