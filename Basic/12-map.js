//mapas
 //colecion de elemento diccionarios que esta formado por clave valor

 //declaracion

 let miMap=new Map();
 console.log(miMap);

 miMap = new Map([
    ["Name", "juan"],
    ["edad", 21],
    ["sexo", "M"],
  ]);
  console.log(miMap);

  //OPERACIONES
  //establecer
  miMap.set("alias","juanito");
  console.log(miMap);
//obtener
  console.log(miMap.get("Name"));
//comprobar
  console.log(miMap.has("k"))
  //delete
  miMap.delete("edad")
  console.log(miMap);
  console.log(miMap.values());
  console.log(miMap.keys());
  
  //limpiar
  miMap.clear();
  console.log(miMap);