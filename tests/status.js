import { testResponseCode } from "../utils/function.js";

testResponseCode.get("/api/users/2", 200);
testResponseCode.delete("/api/users/2", 204);