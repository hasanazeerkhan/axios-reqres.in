process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import axios from "axios";
import support from "../utils/function.js";
import test from "../utils/test.js";
const baseURL = "https://reqres.in";

export class verifyAuth {
  constructor() {
    this.function = new support();
    this.verify = new test();
  }

  async registerSuccess(requestURL, payload) {
    let response = await axios.post(baseURL + requestURL, payload);
    await this.function.print(requestURL);
    await this.verify.response(200, response.status);
    await this.verify.register(response.data, "success");
  }
  async registerFail(requestURL, payload) {
    let response = await axios.post(baseURL + requestURL, payload);
    await this.function.print(requestURL);
    await this.verify.response(400, response.status);
    await this.verify.register(response.data, "fail");
  }
  async loginSuccess(requestURL, payload) {
    let response = await axios.post(baseURL + requestURL, payload);
    await this.function.print(requestURL);
    await this.verify.response(200, response.status);
    await this.verify.dataLogin(response.data, "success");
  }
  async loginFail(requestURL, payload) {
    let response = await axios.post(baseURL + requestURL, payload);
    await this.function.print(requestURL);
    await this.verify.response(400, response.status);
    await this.verify.dataLogin(response.response, "fail");
  }
}
