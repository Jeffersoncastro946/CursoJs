//strings
/*

*/

let myName="Jefferson";
let Saludo="hola "+myName+ ' !'

//longitud
console.log(typeof(Saludo))
console.log(Saludo.length)
console.log(Saludo[5])

console.log(Saludo.toUpperCase())
console.log(Saludo.toLowerCase())
console.log(Saludo.indexOf("fers"))
console.log(Saludo.indexOf("jua"))
console.log(Saludo.indexOf("hola"))

console.log(Saludo.toUpperCase())
console.log(Saludo.toLowerCase())
console.log(Saludo.includes("fers"))
console.log(Saludo.includes("jua"))
console.log(Saludo.includes("hola"))

console.log(Saludo.slice(0,10)) //va desde un pedazo desde un intervalo

console.log(Saludo.replace("Jefferson","Programador"))
console.log(Saludo.replaceAll("Jefferson","Programador"))


console.log(Saludo)

//template literals (Plantillas literales)

let message=`Hola este es un mensaje
en dos lineas lo aprendi en 
mi curso`
console.log(message)

console.log(`este es mi nombre ${myName}`)
