// Ejercicio 2 
//2. Crear archivo "weather.js" y vincularlo
//3. Pedir al usuario que seleccione como esta el clima de su ciudad (opciones)
// 3.1 Opciones -> a)Soleado b) Lluvioso c)Nevado d)Nublado
//4. Pedir al usuario temperatura aproximada de su ciudad en grados C (celsius)
//5. Imprimir en consola una descripción acorde a los datos ingresados
//Output: En tu ciudad, el dia esta soleado con una temperatura de 100 grados F (fahrenheit)


let clima = prompt('Como esta el clima en tu ciudad? Seleccione una opcion: a. Soleado b. Lluvioso c. Nevado d. Nublado')
let temperatura = prompt('cual es la temperatura aproximada', 29)
let farenheit  = (9 / 5 * temperatura) + 32


switch (clima) {
    case 'Soleado':
        let messageSoleado = `En tu ciudad el dia esta ${clima} con una temperatura de ${farenheit}°`
        window.alert(messageSoleado)
        break
    case 'Lluvioso':
        let messageLluvioso = `En tu ciudad el dia esta ${clima} con una temperatura de ${farenheit}°`
        window.alert(messageLluvioso)
        break
    case 'Nevado':
        let messageNevado = `En tu ciudad el dia esta ${clima} con una temperatura de ${farenheit}°`
        window.alert(messageNevado)
        break
    case 'Nublado':
        let messageNublado = `En tu ciudad el dia esta ${clima} con una temperatura de ${farenheit}°`
        window.alert(messageNublado)
        break
    default:
        console.log('Debes seleccionar una opcion')
        break

}