
//! Sesión 06 JavaScript 

//? Practica 1 
/** Declarar y invocar una funcion cualquiera
Recomendacion: Usar alguno de los ejercicios que se llevaron acabo en las clases anteriores */


let gradosCelcius = prompt("Cuantos grados hay en tu ciudad")
const fahrenheit = (9/5 * gradosCelcius) + 32

  function functionCelcius(){
       console.log(`la temperatura es: ${fahrenheit} que hay en tu localidad`);
   }

   functionCelcius()

   
//? Practica 2
/** Declarar una función que tome uno o más argumentos y haga un retorno, Pueden llevar a cabo alguno de los ejercicios de la prácticas de la sesión 1 o 2 o 3
Almacenar el retorno en una variable y imprimir un mensaje usando esa variable -> template literals */


let base = parseFloat(prompt("Ingresa la base"))
let altura = parseFloat(prompt("Ingresa la altura"))


function numeros(base,altura){
   area = base * altura / 2
   return console.log(`El area del triangulo es "${area}"`)
}

numeros(10,12)