const { crearArchivo } = require("./config/create_tabla");
const argv = require("./config/yargs");
const colors = require("colors");

console.clear();

try {
  crearArchivo(argv.b, argv.l, argv.h)
    .then((nombreArchivo) =>
      console.log(nombreArchivo + " creado".yellow + "\n")
    )
    .catch((err) => console.log(err.message));
} catch (err) {
  console.error("Ocurrió un error:", err.message);
}
