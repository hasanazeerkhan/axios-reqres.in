process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import axios from 'axios';
const baseUrl = "https://reqres.in"

export const testResponseCode = {
    async get(requestURL, expectedResponseCode) {
        const response = await axios.get(baseUrl + requestURL);
        validateResponse(expectedResponseCode, response.status);       
    },

    async post(requestURL, expectedResponseCode) {
        const response = await axios.post(baseUrl + requestURL, requestBody);
        validateResponse(expectedResponseCode, response.status);

    },

    async put(requestURL, expectedResponseCode) {
        const response = await axios.put(baseUrl + requestURL, requestBody);
        validateResponse(expectedResponseCode, response.status);

    },

    async patch(requestURL, expectedResponseCode) {
        const response = await axios.patch(baseUrl + requestURL, requestBody);
        validateResponse(expectedResponseCode, response.status);

    },

    async delete(requestURL, expectedResponseCode) {
        const response = await axios.delete(baseUrl + requestURL);
        validateResponse(expectedResponseCode, response.status);

    },

}