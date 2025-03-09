process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import axios from "axios";
import support from '../utils/function.js';
const baseURL = "https://reqres.in";

export class usersAPI {
    constructor(){
      this.function = new support();
    }

    async userCreate(requestURL, payload){
        let response = await axios.post(baseURL + requestURL, payload);
        await this.function.print(requestURL);
        await this.function.response(201, response.status);
    }
    async userUpdatePut(requestURL, payload){
        let response = await axios.post(baseURL + requestURL, payload);
        await this.function.print(requestURL);
        await this.function.response(201, response.status);
    }
    async userUpdatePatch(requestURL, payload){
        let response = await axios.patch(baseURL + requestURL, payload);
        await this.function.print(requestURL);
        await this.function.response(200, response.status);
    }
    async userDelete(requestURL){
        let response = await axios.delete(baseURL + requestURL);
        await this.function.print(requestURL);
        await this.function.response(204, response.status);
    }
}