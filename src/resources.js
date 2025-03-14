process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import axios from "axios";
import support from '../utils/function.js';
import test from '../utils/test.js';
const baseURL = "https://reqres.in";


export class resourcesAPI {
    constructor() {
        this.function = new support();
        this.verify = new test();
    }

    async resourceList(requestURL) {
        const response = await axios.get(baseURL + requestURL);
        await this.function.print(requestURL);
        await this.verify.response(200, response.status);
    }
    async resourceSingle(requestURL) {
        const response = await axios.get(baseURL + requestURL);
        await this.function.print(requestURL);
        await this.verify.response(200, response.status);
    }
    async resourceNotFound(requestURL) {
        const response = await axios.get(baseURL + requestURL);
        await this.function.print(requestURL);
        await this.verify.response(404, response.status);
    }
}