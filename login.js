process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import axios from "axios";
const baseUrl = "https://reqres.in";

export class verifyAuth {
  constructor() {}

  validateResponse(expected, observed) {
    try {
      if (expected != observed) {
        throw new Error(
          `❌ Mismatch in status code\nExpected - ${expected}\nObserved - ${observed}`
        );
      } else {
        console.log("✅ Expected status code obtained ");
      }
    } catch (error) {
      console.error(error);
    }
  }

  checkData(data, typeOfVerification) {
    let isIdValid = false;
    let isTokenValid = false;
    let isErrorValid = false;

    if (typeOfVerification == "success") {
      typeof data.id === "number" ? (isIdValid = true) : (isIdValid = false);
      typeof data.token === "string" && data.token != ""
        ? (isTokenValid = true)
        : (isIdValid = false);

      isIdValid && isTokenValid == true
        ? console.log("✅ Valid data")
        : console.log("❌ Invalid data");
    } else if (typeOfVerification == "fail") {
      data.error === "Missing password"
        ? (isErrorValid = true)
        : (isErrorValid = false);
      isErrorValid == true
        ? console.log("✅ Valid error")
        : console.log("❌ Invalid error");
    } else console.log("❌ Give correct input for what kind of verification");
  }

  checkDataLogin(data, typeOfVerification) {
    let isTokenValid = false;
    let isErrorValid = false;
    if (typeOfVerification == "success") {
      if (typeof data.token === "string" && data.token != "") {
        isTokenValid = true;
        console.log("✅ Valid data");
      } else {
        isTokenValid = false;
        console.log("❌ Invalid data");
      }
    } else if (typeOfVerification == "fail") {
      if (data.error === "Missing password") {
        isErrorValid = true;
        console.log("✅ Valid error");
      } else {
        isErrorValid = false;
        console.log("❌ Invalid error");
      }
    } else console.log("❌ Give correct input for what kind of verification");
  }

  async registerSuccess(requestUrl, payload) {
    let response = await axios.post(baseUrl + requestUrl, payload);
    this.validateResponse(200, response.status);
    this.checkData(response.data, "success");
  }
  async registerFail(requestUrl, payload) {
    let response = await axios.post(baseUrl + requestUrl, payload);
    this.validateResponse(400, response.status);
    this.checkData(response.data, "fail");
  }
  async loginSuccess(requestUrl, payload) {
    let response = await axios.post(baseUrl + requestUrl, payload);
    this.validateResponse(200, response.status);
    this.checkDataLogin(response.data, "success");
  }
  async loginFail(requestUrl, payload) {
    let response = await axios.post(baseUrl + requestUrl, payload);
    this.validateResponse(400, response.status);
    this.checkData(response.response, "fail");
  }
}
