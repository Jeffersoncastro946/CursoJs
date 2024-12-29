// //bucles estructura de control para repetit codigo

// //for 

// for (let index = 0; index < 10; index++) {
//    console.log(`hola ${index}`);
    
// }
// //while
// let i=0;

// console.log(i)
// while(i<5){
// console.log(`hola2 ${i}`);
// i++;
// }

// //do while =>se ejecuta minimo una vez
// let o =0;
// do {
//     console.log(`Hola doWhile ${o}`)
//     o++;
// } while (o<5);

//for of recorre algo que sea interable
// let numeros = [10, 20, 30, 40];
// for(let valor of numeros){
//     console.log(valor)
// }

// mySet =new Set(["dario","rosa"]);
// for(let valor of mySet){
//     console.log(valor)
// }
miMap = new Map([
    ["Name", "juan"],
    ["edad", 1],
    ["sexo", "M"],
  ]);
  for(let valor of miMap){
    console.log(valor)
}
for(let [clave,valor] of miMap){
    if(clave==='edad'){
        if(valor<18){
            console.log("menor de edad");
            break
        }
    }

    console.log(valor)
}
//consejos usar break o continue