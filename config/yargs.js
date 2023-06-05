const argv = require("yargs")
  .options({
    b: {
      alias: "base",
      type: "number",
      describe: "Enter the number",
      default: 1,
      demandOption: true,
    },
    l: {
      alias: "listar",
      type: "boolean",
      default: false,
      describe: "Show table list",
    },
    h: {
      alias: "hasta",
      type: "number",
      default: 10,
      describe: "Show table list",
    },
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) throw "base tiene que ser un numero";
    else if (argv.b < 0) throw "base es negativo";
    else if (argv.h < 10) throw "Debe ser mayor que 10";
    return true;
  }).argv;

module.exports = argv;
