const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base, listar, hasta) => {
  try {
    let salida = "";
    let consola = "";
    for (let i = 1; i <= hasta; i++) {
      salida += `${base}` + " x ".red + `${i}` + " = ".red + `${base * i}\n`;
      consola += `${base} x ${i} = ${base * i}\n`;
    }
    listar === false
      ? salida
      : console.log(`\nTabla del`.blue + `${base}`.green + `\n\n${salida}`);

    fs.writeFileSync(`./tablas/tabla-${base}.txt`, consola);
    return `tabla-${base}.txt`.green;
  } catch (err) {
    throw new Error("Error al crear el archivo: " + err.message);
  }
};

module.exports = {
  crearArchivo,
};
