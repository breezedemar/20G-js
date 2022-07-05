
//! Sesion 03 JavaScript 

// !Practica 1

//pedir al usuario 3 numeros 
//imprimir en consola cual es el mayor de todos 
	
let numero1 = prompt("Ingresa el primer numero")
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
    }

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