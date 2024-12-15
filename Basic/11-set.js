// let mySet=new Set();

// //inicializar
// mySet =new Set(["dario","rosa"]);
// console.log(mySet);

// //metodos comunes
// //add y delete para agregar y eliminar 
// mySet.add("gmail.com")
// console.log(mySet);
// mySet.add("gmail.com")
// console.log(mySet);
let miSet = new Set();

// Agregar valores
miSet.add(1);
miSet.add(2);
miSet.add(3);
miSet.add(3); // No se agregará porque ya existe

console.log(miSet); // Set { 1, 2, 3 }

// Comprobar si existe un valor
console.log(miSet.has(2)); // true
console.log(miSet.has(5)); // false

// Eliminar un valor
miSet.delete(2);
console.log(miSet); // Set { 1, 3 }

// Iterar sobre el Set
miSet.forEach(valor => {
    console.log(valor);
});

// Obtener el tamaño
console.log(miSet.size); // 2

// Limpiar todo el Set
miSet.clear();
console.log(miSet); // Set {}
