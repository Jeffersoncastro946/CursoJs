// // 1. Concatena dos cadenas de texto

// let cadena1='hola' ;
// let cadena2 ='jefferson';
// console.log(cadena1 +' '+ cadena2);


// // 2. Muestra la longitud de una cadena de texto

// console.log(cadena1.length);
// // 3. Muestra el primer y último carácter de un string
// console.log("primer caracter " + cadena1[0]);
// console.log("primer caracter " + cadena1.at(0));
// console.log("primer caracter " + cadena1.charAt(0));
// console.log("Ultimo");

// console.log("Ultimo caracter " + cadena1.at(-1))

// console.log("Ultimp caracter " + cadena1.charAt(cadena1.length - 1)   );

// // 4. Convierte a mayúsculas y minúsculas un string

// console.log(cadena1.toUpperCase());
// console.log(cadena1.toLowerCase()) 
// // 5. Crea una cadena de texto en varias líneas
cadena2=`esta es la variable en varias lineas
no se para que se usa`
console.log(cadena2);

// // 6. Interpola el valor de una variable en un string

// console.log(`${cadena1} esta seria la interpoacion`)
// // 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(cadena2.replaceAll(" ", "_"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(cadena2.includes("se"));

// 9. Comprueba si dos strings son iguales
let cadena1="Hola";
let cadena3="Hello";
console.log(cadena1.localeCompare(cadena1,cadena3));

// 10. Comprueba si dos strings tienen la misma longitud
console.log(cadena1.length===cadena1.length)