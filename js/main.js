let saludo = 'Hola Mundo';
console.log(saludo);


// con charArt podemos acceder a un caracter en una posición específica de un string.
let texto1 = "Esto es un mensaje de línea única\n\n\n Y esta es otra".charAt(1);
let texto2 = "Esto es un mensaje de línea única\n\n\n Y esta es otra"[2];
console.log(texto1);
console.log(texto2); 
console.log(texto2.charAt(4)); 


 // Datos numéricos 
let num1 = 10;
let num2 = 20;
let resultado = num1 * num2;
let resultado2 = num2 / num1;
console.log(resultado2);
console.log(resultado); // 200
console.log(num1 + num2); // 30
console.log(num1 - num2); // -10

let pizza = ["masa", "harina", "tomate", "queso", "peperoni"];
console.log(pizza); 
console.log(pizza[1]); 

let concatenacion = "Hola Alberto" + " " + "Aprende a programar";
console.log(concatenacion);

let colores = ["rojo", "verde", "azul", "amarillo"];
let coches = ["ford", "chevrolet", "fiat", "renault"];
let total = "Yo tengo un coche " + coches[1] + " de color " + colores[2];
console.log(total);

let numeroString1 = "56";
let numeroString2 = "44";
let sumaStrings = numeroString1 + numeroString2;
console.log(sumaStrings);

// let num3 = "7";
// let num2 = "5";
// let operacion = Number(num3) + Number(num2);
// console.log(operacion);

let num1 = 7;
let transformaNumber = toString(num1);
console.log(typeof(transformaNumber));