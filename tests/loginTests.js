import { verifyAuth } from "../src/login.js";
import {loginSuccessful , registerSuccessful} from '../data/data.js';

const auth = new verifyAuth();
auth.registerSuccess("/api/register", registerSuccessful)
auth.loginSuccess("/api/login", loginSuccessful);