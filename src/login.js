process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import axios from "axios";
import support from '../utils/function.js';
const baseURL = "https://reqres.in";

export class verifyAuth {
  constructor() {
    this.function = new support();
  }

  async registerSuccess(requestURL, payload) {
    let response = await axios.post(baseURL + requestURL, payload);
    await this.function.print(requestURL)
    await this.function.response(200, response.status);
    await this.function.checkRegister(response.data, "success");    
  }
  async registerFail(requestURL, payload) {
    let response = await axios.post(baseURL + requestURL, payload);
    await this.function.print(requestURL)
    await this.function.response(400, response.status);
    await this.function.checkRegister(response.data, "fail");
  }
  async loginSuccess(requestURL, payload) {
    let response = await axios.post(baseURL + requestURL, payload);
    await this.function.print(requestURL)
    await this.function.response(200, response.status);
    await this.function.checkDataLogin(response.data, "success");
  }
  async loginFail(requestURL, payload) {
    let response = await axios.post(baseURL + requestURL, payload);
    await this.function.print(requestURL)
    await this.function.response(400, response.status);
    await this.function.checkDataLogin(response.response, "fail");
  }
}
