//toma de deciciones

//si y no
let a = 5;
if (a === 0) {
  console.log("es 0");
} else if (a > 1) {
  console.log("No lo es");
} else {
  console.log("que sera lo es");
}

// ternarios

a === 0 ? console.log("es 0") : console.log("es mayor que 0");

//switch
let day = 40;

switch (day) {
  case 0:
    console.log("Lunes");
    break; 
  case 0:
    console.log("Martes");
    break;
  case 0:
    console.log("Miercoles");
    break;
  case 0:
    console.log("Jueves");
    break;
  case 0:
    console.log("Viernes");
    break;
  case 0:
    console.log("Sabado");
    break;
  default:
    console.log("no tiene valor asociado")
    break;
}


//nullis coalescing

let valora
let valorb="Valor b"
console.log(valora??valorb)