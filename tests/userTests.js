import {usersAPI} from '../src/users.js' 
import {userCreate , userUpdatePut, userUpdatePatch} from '../data/data.js';

const users = new usersAPI;
users.userCreate("/api/users", userCreate);
users.userUpdatePut("/api/users/2", userUpdatePut);
users.userUpdatePatch("/api/users/2", userUpdatePatch);
users.userDelete('/api/users/2');