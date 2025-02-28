process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import axios from "axios";
const baseUrl = "https://reqres.in";

export class resourcesAPI{
    constructor(){

    }

    async validateResponse(expected , observed) {
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
    async resourceList(requestURL){
        const response = await axios.get(baseUrl + requestURL);
        await this.validateResponse(200, response.status);
    }
    async resourceSingle(requestURL){
        const response = await axios.get(baseUrl + requestURL);
        await this.validateResponse(200, response.status);
    }
    async resourceNotFound(requestURL){
        const response = await axios.get(baseUrl + requestURL);
        await this.validateResponse(404, response.status);
    }
}