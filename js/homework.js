//! Tarea sesion 03 JavaScript 

//? Ejercicio 1
//Pedir por el promt un número, y comprobar si es par o impar

let numero= parseFloat(prompt("Ingresa un numero"))

numero % 2 === 0 ? window.alert("Es par") : window.alert("Es impar")


//? Ejercicio 2 
// Calcula el área de un triángulo - Teniendo la base y la altura (proporcionadas por el usuario)
// Formula para el calcul: base * altura)/ 2

let base = parseFloat(prompt("Ingresa la base"))
let altura = parseFloat(prompt("Ingresa la altura"))

area = base * altura / 2 

window.alert(`El area del triangulo es "${area}"`)


