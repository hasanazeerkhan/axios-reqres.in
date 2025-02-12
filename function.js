process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import axios from 'axios';

export const testResponseCode = {
    baseUrl: "https://reqres.in",
    validateResponse(expected, observed) {
        try {
            if (expected != observed) {
                throw new Error(`Mismatch in status code❌\nExpected - ${expected}\nObserved - ${observed}`);
            }else{
                console.log("Expected status code obtained ✅") 
            }
        } catch (error) {
            console.error(error);
        }
    },
    async get(requestURL, expectedResponseCode) {
        const response = await axios.get(testResponseCode.baseUrl + requestURL);
        testResponseCode.validateResponse(expectedResponseCode, response.status);       
    },

    async post(requestURL, expectedResponseCode) {
        const response = await axios.post(testResponseCode.baseUrl + requestURL, requestBody);
        testResponseCode.validateResponse(expectedResponseCode, response.status);

    },

    async put(requestURL, expectedResponseCode) {
        const response = await axios.put(testResponseCode.baseUrl + requestURL, requestBody);
        testResponseCode.validateResponse(expectedResponseCode, response.status);

    },

    async patch(requestURL, expectedResponseCode) {
        const response = await axios.patch(testResponseCode.baseUrl + requestURL, requestBody);
        testResponseCode.validateResponse(expectedResponseCode, response.status);

    },

    async delete(requestURL, expectedResponseCode) {
        const response = await axios.delete(testResponseCode.baseUrl + requestURL);
        testResponseCode.validateResponse(expectedResponseCode, response.status);

    },

}
