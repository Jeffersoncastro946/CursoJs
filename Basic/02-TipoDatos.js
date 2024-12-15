/*Tipos de datos */

//Datos primitivos son los datos basicos del lenguage y no son inmutable 

//cadena de textos strings
let name='jefferson'

//numeros
let age=37
let altura=1.77;

//booleanos
let isStuden=false
let isTeacher=true

//undefine variable declarada pero sin valor asociado
let undefineValue
console.log(undefineValue)

//null  representa que intensionalmente no se asigna valor
let nullValue=null
console.log(nullValue)

//symbol
let symbolValue= Symbol("mysymbol")

//BigInt
let myBigint=BigInt(88888888888888877555888)
let myBigint2=88888888888888877555888n

//mostrando los tipos de datos
console.log(typeof name)
console.log(typeof age)
console.log(typeof altura)
console.log(typeof isStuden)
console.log(typeof undefineValue)
console.log(typeof nullValue)
console.log(typeof symbolValue)
console.log(typeof myBigint2)