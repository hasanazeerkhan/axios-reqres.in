process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import axios from "axios";
import support from '../utils/function.js';
const baseURL = "https://reqres.in";


export class resourcesAPI{
    constructor(){
      this.function = new support();
    }

    async resourceList(requestURL){
        const response = await axios.get(baseURL + requestURL);
        await this.function.print(requestURL);
        await this.function.response(200, response.status);
    }
    async resourceSingle(requestURL){
        const response = await axios.get(baseURL + requestURL);
        await this.function.print(requestURL);
        await this.function.response(200, response.status);
    }
    async resourceNotFound(requestURL){
        const response = await axios.get(baseURL + requestURL);
        await this.function.print(requestURL);
        await this.function.response(404, response.status);
    }
}