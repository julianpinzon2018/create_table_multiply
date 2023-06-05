const fs = require("fs");

let salida = "";
const multiplicacion = (base) => {
  return new Promise((resolve, reject) => {
    if (base) {
      for (let i = 1; i <= 10; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;
      }
      resolve(salida);
    } else {
      reject("No ingresaste el numero");
    }
  });
};

const createTabla = (base) => {
  return new Promise((resolve, reject) => {
    if (base) {
      fs.writeFileSync(`tabla-${base}.txt`, salida);
      resolve(`Tabla del ${base} creada`);
    } else {
      reject("No ingresaste el numero para la creación de la tabla");
    }
  });
};

const crearArchivo = async (base) => {
  try {
    const resultMultiplicacion = await multiplicacion(base);
    const resultCreateTabla = await createTabla(base);
    return `${resultCreateTabla} \n ${resultMultiplicacion}`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
