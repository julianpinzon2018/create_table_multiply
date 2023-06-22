require("colors");
require("dotenv").config();

const {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoChecklist,
} = require("./helpers/inquirer");

const Busquedas = require("./models/busquedas");

console.clear();

const main = async () => {
  const busquedas = new Busquedas();
  let opt;

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const lugar = await leerInput("Ciudad: ");

        const ciudad = await busquedas.ciudad(lugar);

        console.log("\nInformación de la ciudad\n".green);
        console.log("Ciudad: " + ciudad);
        console.log("Lat:");
        console.log("Lng:");
        console.log("Temperatura:");
        console.log("Mínima:");
        console.log("Máxima:");

        break;

      case "2":
        console.log("Seleccionaste la opción 2");

        break;
    }

    await pausa();
  } while (opt !== "0");
};

main();
