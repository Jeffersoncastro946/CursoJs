// 1. Crea un array que almacene cinco animales

// 2. Añade dos más. Uno al principio y otro al final

// 3. Elimina el que se encuentra en tercera posición

// 4. Crea un set que almacene cinco libros
// 5. Añade dos más. Uno de ellos repetido
// 6. Elimina uno concreto a tu elección
// 7. Crea un mapa que asocie el número del mes a su nombre
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
// 9. Añade al mapa una clave con un array como que almacene los meses de verano
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
console.log("Ejercicio 1");
let Animales =[];
Animales=['perro', 'gato','raton','vaca', 'cerdo'];
console.log(Animales);
console.log("Ejercicio 2");
Animales.push("Pato");
Animales.unshift("Loro");
console.log(Animales);
console.log("Ejercicio 3");
Animales.splice(3,1);
console.log(Animales);

//sets
// 4. Crea un set que almacene cinco libros
let setLibros=new Set();
for (let index = 0; index < 5; index++) {
  setLibros.add(`Libr ${index+1}`);
}

console.log(setLibros);
setLibros.add(`Libr ${6}`);
setLibros.add(`Libr ${6}`);
console.log(setLibros);
// 7. Crea un mapa que asocie el número del mes a su nombre
let map=new Map();
// map.set(1, 'enero');
// map.set(2, 'febrero');
// map.set(3, 'marzo');
// map.set(4, 'abril');
// map.set(5, 'mayo');
// map.set(6, 'junio');
// map.set(7, 'julio');
// map.set(8, 'agosto');
// map.set(9, 'septiebre');
// map.set(10, 'octubre');
// map.set(11, 'noviembre');
// map.set(12, 'diciembre');
// console.log(map.get(10))
// let estaciones=['verano', 'invierno', 'primavera', 'otono'];
// map.set("estaciones", estaciones);
// console.log(map);
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let estaciones=['verano', 'invierno', 'primavera', 'otono'];
let setEstaciones=new Set();
estaciones.map((data)=>(setEstaciones.add(data)));
console.log(setEstaciones)
let mapEstaciones=new Map([...setEstaciones].map((data)=>[data,data]));
console.log(mapEstaciones)