const axios = require("axios");

class Busquedas {
  historial = ["Tegucigalpa", "Madrid", "San José"];

  constructor() {}

  get paramsMapbox() {
    return {
      limit: 5,
      language: "es",
      access_token: process.env.MAPBOX_KEY,
    };
  }

  async ciudad(lugar = "") {
    try {
      const intance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
        params: this.paramsMapbox,
      });
      const resp = await intance.get();
      console.log(resp.data);
      return [];
    } catch (error) {
      return [];
    }
  }
}

module.exports = Busquedas;
