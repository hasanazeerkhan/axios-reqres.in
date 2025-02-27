import { testResponseCode } from "./function.js";
import { verifyAuth } from "./login.js";
import {loginSuccessful , registerSuccessful} from './data.js';


testResponseCode.get("/api/users/2", 200);
testResponseCode.delete("/api/users/2", 204);

const auth = new verifyAuth();
auth.registerSuccess("/api/register", registerSuccessful)
auth.loginSuccess("/api/login", loginSuccessful);