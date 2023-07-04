import axios from "axios";

// const BASE_URL = "https://sheet.best/api/sheets/e2e5ab01-774c-46bb-8380-684c6f498cf3";

const BASE_URL = "http://localhost:3200/data";

export class API {
  static async fetchAll() {
    return (await axios.get(`${BASE_URL}`)).data;
  }
}
