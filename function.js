process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import axios from 'axios';

export const apiTest = {
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
    async axiosGet(requestURL, expectedResponseCode) {
        const response = await axios.get(apiTest.baseUrl + requestURL);
        apiTest.validateResponse(expectedResponseCode, response.status);       
    },

    async axiosPost(requestURL, expectedResponseCode, requestBody) {
        response = await axios.post(apiTest.baseUrl + requestURL, requestBody);
        apiTest.validateResponse(expectedResponseCode, response.status);

    },

    async axiosPut(requestURL, expectedResponseCode, requestBody) {
        response = await axios.put(apiTest.baseUrl + requestURL, requestBody);
        apiTest.validateResponse(expectedResponseCode, response.status);

    },

    async axiosPatch(requestURL, expectedResponseCode, requestBody) {
        response = await axios.patch(apiTest.baseUrl + requestURL, requestBody);
        apiTest.validateResponse(expectedResponseCode, response.status);

    },

    async axiosDelete(requestURL, expectedResponseCode,) {
        response = await axios.delete(apiTest.baseUrl + requestURL);
        apiTest.validateResponse(expectedResponseCode, response.status);

    },

}
