process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import axios from "axios";
import support from '../utils/function.js';
import test from '../utils/test.js';
const baseURL = "https://reqres.in";

export class usersAPI {
    constructor() {
        this.function = new support();
        this.verify = new test();
    }

    async userCreate(requestURL, payload) {
        let response = await axios.post(baseURL + requestURL, payload);
        await this.function.print(requestURL);
        await this.verify.response(201, response.status);
    }
    async userUpdatePut(requestURL, payload) {
        let response = await axios.post(baseURL + requestURL, payload);
        await this.function.print(requestURL);
        await this.verify.response(201, response.status);
    }
    async userUpdatePatch(requestURL, payload) {
        let response = await axios.patch(baseURL + requestURL, payload);
        await this.function.print(requestURL);
        await this.verify.response(200, response.status);
    }
    async userDelete(requestURL) {
        let response = await axios.delete(baseURL + requestURL);
        await this.function.print(requestURL);
        await this.verify.response(204, response.status);
    }
}