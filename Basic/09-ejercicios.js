let nombre="jefferson Castro"
if(nombre.includes("jefferson")){
    console.log(`Bienvenido ${nombre}`)
}else{
    console.log("quien eres")
}

let user="Jefferson castro"
let pass="a1230"

if(user==="Jefferson castro" && pass==="a1230"){
    console.log("Usuario valido")
}else{
    console.log("No se quien eres")
}

var numero=0

if(numero>0){
    console.log("positivo")
}else if(numero<0){
    console.log("Valor negativo")
}
else{
    console.log("es un valor 0")
}


let edad=15;

if (edad>=18) {
    console.log(`puedes votar`)
} else {
    console.log(`No puedes votar te faltan ${18-edad} anios`)
}

edad=10;
let tipo;

tipo=edad>19?"adulto":"adolencente"
console.log(tipo);
