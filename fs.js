const fs = require("fs");

console.clear();
console.log("============");
console.log("Tabla del: 5");
console.log("============");

let numero = 4;

let salida = "";

for (let i = 1; i <= 10; i++) {
  salida += `${numero} x ${i} = ${numero * i}\n`;
}

console.log(salida);

fs.writeFile(`tabla-${numero}.txt`, salida, (err) => {
  if (err) throw err;
  console.log(`tabla del ${numero} creada`);
});
