process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import axios from 'axios';
const baseURL = "https://reqres.in"

class support {
  constructor() {
  }

  async print(requestURL) {
    console.log("-----------------------------------");
    console.log(`Validating: ${baseURL + requestURL}`);
  }
}

export default support;