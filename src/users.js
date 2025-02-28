process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import axios from "axios";
const baseUrl = "https://reqres.in";

export class usersAPI {
    constructor(){

    }
    async validateResponse(expected , observed) {
        try {
            if (expected != observed) {
              throw new Error(
                `🥲  Mismatch in status code\nExpected - ${expected}\nObserved - ${observed}`
              );
            } else {
              console.log("✅ Expected status code obtained ");
            }
          } catch (error) {
            console.error(error);
          }
    }

    async userCreate(requestUrl, payload){
        let response = await axios.post(baseUrl + requestUrl, payload);
        await this.validateResponse(201, response.status);
    }
    async userUpdatePut(requestUrl, payload){
        let response = await axios.post(baseUrl + requestUrl, payload);
        await this.validateResponse(201, response.status);
    }
    async userUpdatePatch(requestUrl, payload){
        let response = await axios.patch(baseUrl + requestUrl, payload);
        await this.validateResponse(200, response.status);
    }
    async userDelete(requestUrl){
        let response = await axios.delete(baseUrl + requestUrl);
        await this.validateResponse(204, response.status);
    }
}