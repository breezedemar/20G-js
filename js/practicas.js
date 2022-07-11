
//! Sesion 03 JavaScript 

// !Practica 1

//pedir al usuario 3 numeros 
//imprimir en consola cual es el mayor de todos 
	
/*let numero1 = prompt("Ingresa el primer numero")
let numero2 = prompt("Ingresa el segundo numero")
let numero3 = prompt("Ingresa el tercer numero")

    if(numero1 > numero2 && numero1 > numero3){
        console.log("El numero 1 es mayor")

    } else if(numero2 > numero1 && numero2 > numero3){
        console.log("El numero 2 es mayor")

    }else if(numero3 > numero2 || numero3 > numero1){
        console.log("El numero 3 es mayor")
    }else {
        console.log("Todos los numeros son iguales")
    }*/

// !Practica 2
// !Identificar el numero mayor de dos
// !Condicion - Usar el operador ternary

   // let num1 = parseInt(prompt("Ingresa el primer numero"));
   // let num2 = parseInt(prompt("Ingresa el segundo numero"));

   // let resultado = num1===num2 ? "los numeros son iguales": num1 > num2 ? "El primer numero es mayor" : "El segundo numero es mayor"

   // console.log(resultado)

// !Practica 3
// !Identificar el numero mayor de tres
// !Condicion usando el operador ternary
// !Hint: Anidar

/*let primerNumero = parseFloat(prompt("Ingresa el primer numero"))
let segundoNumero = parseFloat(prompt("Ingresa el segundo numero"))
let tercerNumero = parseFloat(prompt("Ingresa el tercer numero"))

let res = primerNumero>segundoNumero && primerNumero > tercerNumero ? `El primer numero con valor a "${primerNumero}" es el mayor`:
 segundoNumero>primerNumero && segundoNumero > tercerNumero ? `El segundo numero con valor a "${segundoNumero}" es el mayor`:
 tercerNumero>segundoNumero && tercerNumero> primerNumero ? `El tercer numero con valor a "${tercerNumero}" es el mayor`:
 "En caso contrario todos los numeros equivalen lo mismo"

 window.alert(res)*/



// !Practica 4 
// !Pedir 2 numeros al usuario
// !Si a mayor que  b dividir a entre b
// !Si a menor que  b  sumar a más b
// !Si a  es igual b multiplicar ambos números
// !Imprimir el resultado en consola

/*let a = parseFloat(prompt("Ingresa primer numero"))
let b = parseFloat(prompt("Ingresa segundo numero"))

if(a>b){
    console.log(`Division de los dos numeros es igual a: ${a/b}`)
} else if(a<b){
    console.log(`Suma de los dos numeros es igual a: ${a+b}`)
} else{
    console.log(`Ambos numeros son iguales por lo que el resultado es el siguiente: ${a*b}`)
}*/


//! Sesion 04 JavaScript 

// !Practica 1

//Realiza una calculadora usando un switch
//Dale la opcion al usuario de seleccionar entre algunas operaciones (suma, resta....)
//Pidele dos numeros y aplica la operacion correspendiente
//Regresa el resultado

/*let operacion = prompt("Selecciona una opción suma resta multiplicación division")

let num1 = parseInt(prompt("Ingresa el numero 1"));
let num2 = parseInt(prompt("Ingresa el numero 2"));

switch(operacion){
    case "suma":
    let suma = num1+num2
    let messageSuma = `la suma de los dos numeros es ${suma}`
    window.alert(messageSuma)
    break

    case "resta":
    let resta=num1-num2
    let messageResta = `la resta de los dos numeros es ${resta}`
    window.alert(messageResta)
    break

    case "multiplicacion":
        let multiplicacion=num1*num2
        let messageMulti = `la multiplicacion de los dos numeros es ${multiplicacion}`
        window.alert(messageMulti)
        break

    case "division": 
        let division=num1/num2
        let messageDivision = `la division de los dos numeros es ${division}`
        window.alert(messageDivision)
        break
        default:
            console.log('Debes seleccionar una opcion')
            break
}*/



//! Sesion 05 JavaScript 

// !Practica 1

//imprimir vocales de string usando for loop
//Usando solo ciclos y condicionales


// !Practica 2

/*Practica2
imprimir solo las consonantes de un string usando for loop
solo ciclos y condicionales */


// !Practica 3
/*Practica3
Pedir al usuario un numero del 1 al 10 e imprimir la tabla de multiplicar de ese número
Usando loops*/

/*let numero= parseInt(prompt("Ingresa un numero del 1 al 10"))

for (let i=0; i<=10; i++){
    let resultado = numero*[i]
    console.log(`${numero} x ${i} = ${resultado}`)
}*/


//! Sesión 06 JavaScript 
//? Practica 1 
/** Declarar y invocar una funcion cualquiera
Recomendacion: Usar alguno de los ejercicios que se llevaron acabo en las clases anteriores */

/*let gradosCelcius = prompt("Cuantos grados hay en tu ciudad")
const fahrenheit = (9/5 * gradosCelcius) + 32

  function functionCelcius(){
       console.log(`la temperatura es: ${fahrenheit} que hay en tu localidad`);
   }

   functionCelcius()*/

   
//? Practica 2 - clase de funciones - sabado 😊🤣
/** Declarar una función que tome uno o más argumentos y haga un retorno, Pueden llevar a cabo alguno de los ejercicios de la prácticas de la sesión 1 o 2 o 3
Almacenar el retorno en una variable y imprimir un mensaje usando esa variable -> template literals */


let base = parseFloat(prompt("Ingresa la base 😊"))
let altura = parseFloat(prompt("Ingresa la altura 🤣"))

let area=0

//parametro 
function numeros(base_parametro,altura_parametro){ 

    if(base_parametro != 0 && altura_parametro !=0){
        console.log("Valores aprobados")
        area = base_parametro * altura_parametro / 2
    } else{
        console.log("No aprobado")
    }

    return console.log(`El area del triangulo es "${area}"`)
}

numeros(base,altura)//argumento



//! Sesión 07 JavaScript 

/*Practica
tomar los tres ejercicios y factorizarlos como funciones
Condiciones, tiene argumentos y tiene que hacer un return*/

//? Ejercicio 1
/**
* Escribir un programa de arroje la suma de los múltiplos de 3, 5 y 7
* que hay entre 1 y 100
* Resolver con cualquiera de: For, While o do While
*/


/*function multiplo(){
let suma = 0
for(let i=1; i<=100; i++){
    
    if(i%3 === 0 && i%5 === 0 && i%7===0){
         suma += i
    }
}
return suma

}

console.log(multiplo()); 

*/


//? Ejercicio 2
/**
* Pedir el usuario 1 numero entre 1 y 100
* sumar todos los números entre el 1 y este numero
* Mandar un alert con el  total
* Resolver con cualquiera de: For, While y do While
* p.ej. 5
* ->  15
*/

//let numA = parseInt(prompt("Ingrese un numero entre 1 y 100"))

//? Ejercicio 3
/**
* pedir una oracion al usuario
* Contar las letras "a" y "e" y espacios,
* Resolver con cualquier de  For, While y do While
*
* p.ej. 'hola kodErs'
* ->  A -> 1
* ->  E -> 1
* ->  Espacios -> 1
*/


//! Sesión 08 JavaScript 
/** Pratica grupal
Tomar 2 ejercicios del dia de ayer dy refactorizar a arrow functions*/

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

/*let text = prompt("Ingresa un texto")

const palindrom = (cadena) => {
    const cadenaReversed = cadena.split("").reverse().join("");
  
    return cadenaReversed === cadena ? "es palindromo" : "no es palindromo";
  }

console.log(palindrom (text))
*/

/*let palabra = prompt('dame una palabra:');
let reversa = "";
for(let index=palabra.length-1; index>=0; index--)
    {
    reversa += palabra[index] // es la accion  que va a realizar
    }
console.log(reversa) //imprime en consola el resultado*/

// palabra=nuevo
// reversa =""
// index=5-1
// index=4 (4>0=true); (reversa=""+"o");
// index=3 (3>0=true); (reversa="o"+"v");
// index=2 (2>0=true); (reversa="ov"+"e");
// index=1 (1>0=true); (reversa="ove"+"u");
// index=0 (0>0=true); (reversa="oveu"+"n");


// condicionales desde donde va iniciar y desde donde va terminar 

let i
for (i=5; i>0; i--){

    console.log(`Tu valor es ${i}`) 

}

