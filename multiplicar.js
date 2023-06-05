const { crearArchivo } = require("./multiplicar1");

console.clear();

// let base = 5;

crearArchivo(base)
  .then((tabla) => console.log(tabla))
  .catch((err) => console.log(err));
