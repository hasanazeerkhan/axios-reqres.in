process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import axios from 'axios';
const baseURL = "https://reqres.in"

class test {
    constructor() {
        
    }

    async response(expected , observed) {
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
          typeof data.id === "number" ? (isIdValid = true) : (isIdValid = false);
          typeof data.token === "string" && data.token != ""
            ? (isTokenValid = true)
            : (isIdValid = false);
    
          isIdValid && isTokenValid == true
            ? console.log("✅ Valid data")
            : console.log("🥲 Invalid data");
        } else if (typeOfVerification == "fail") {
          data.error === "Missing password"
            ? (isErrorValid = true)
            : (isErrorValid = false);
          isErrorValid == true
            ? console.log("✅ Valid error")
            : console.log("🥲 Invalid error");
        } else console.log("🥲 Give correct input for what kind of verification");
      }
    
      async dataLogin(data, typeOfVerification) {
        let isTokenValid = false;
        let isErrorValid = false;
        if (typeOfVerification == "success") {
          if (typeof data.token === "string" && data.token != "") {
            isTokenValid = true;
            await console.log("✅ Valid data");
          } else {
            isTokenValid = false;
            console.log("🥲 Invalid data");
          }
        } else if (typeOfVerification == "fail") {
          if (data.error === "Missing password") {
            isErrorValid = true;
            await console.log("✅ Valid error");
          } else {
            isErrorValid = false;
            await console.log("🥲 Invalid error");
          }
        } else await console.log("🥲 Give correct input for what kind of verification");
      }

      async userResponse(data, typeOfVerification ){
        let isNameValid = false;
        let isJobValid = false;
        let isIdValid = false;
        let isCreatedValid = false;
        if(typeOfVerification != "create"){
            typeof data.name ==="string" ? isNameValid = true : isNameValid = false;
            typeof data.job ==="string" ? isJobValid = false : isJobValid = false;
            typeof data.createdAt ==="undefined" ? isCreatedValid = false : isCreatedValid = false;
        }
      }
}
const a = {
    "name": "morpheus",
    "job": "leader",
    "id": "473",
    "createdAt": "2025-03-09T10:17:46.340Z"
}
export default test;