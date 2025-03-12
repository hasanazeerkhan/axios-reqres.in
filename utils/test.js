process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import axios from "axios";
const baseURL = "https://reqres.in";

class test {
  constructor() {}

  async response(expected, observed) {
    try {
      if (expected != observed) {
        throw new Error(
          `🥲 Mismatch in status code\nExpected - ${expected}\nObserved - ${observed}`
        );
      } else {
        console.log("✅ Expected status code obtained ");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async register(data, typeOfVerification) {
    let isIdValid = false;
    let isTokenValid = false;
    let isErrorValid = false;

    if (typeOfVerification == "success") {
      isIdValid = typeof data.id === "number" ? true : false;
      isTokenValid =
        typeof data.token === "string" && data.token != "" ? true : false;

      isIdValid && isTokenValid === true
        ? console.log("✅ Valid response")
        : console.log("🥲 Invalid response");
    } else if (typeOfVerification == "fail") {
      isErrorValid = data.error === "Missing password" ? true : false;
      isErrorValid === true
        ? console.log("✅ Valid response")
        : console.log("🥲 Invalid response");
    } else console.log("🥲 🤦‍♂️ Invalid input");
  }

  async dataLogin(data, typeOfVerification) {
    let isTokenValid;
    let isErrorValid;
    if (typeOfVerification == "success") {
      isTokenValid =
        typeof data.token === "string" && data.token != "" ? true : false;
    } else if (typeOfVerification == "fail") {
      isErrorValid = data.error === "Missing password" ? true : false;
    } else console.log("🥲 Invalid input");

    isTokenValid && isErrorValid === true
      ? console.log("✅ Valid response")
      : console.log("🤦‍♂️ Invalid input");
  }

  async userResponse(response, typeOfVerification) {
    const isValidName = typeof response.name === "string" ? true : false;
    const isValidJob = typeof response.job === "string" ? true : false;
    const isValidId = typeof response.id === "number" ? true : false;
    const isValidCreatedAt =
      typeof response.createdAt === "string" ? true : false;

    if(typeOfVerification === "create"){

    isValidName && isValidJob && isValidId && isValidCreatedAt === true
      ? console.log("✅ Valid response")
      : console.log("🥲 Invalid response");
    } else if (typeOfVerification === "create"){
      isValidName && isValidJob && isValidId === true
      ? console.log("✅ Valid response")
      : console.log("🥲 Invalid response");
    } else console.log("🤦‍♂️ Invalid input");

  }
}
export default test;