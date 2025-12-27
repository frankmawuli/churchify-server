import  express  from "express";
import { createUser, loginUser } from "../Controllers/password-user.controller";
import { verifyOtp } from "../Controllers/verify-otp.controller";


const router = express.Router();


// Route to create a new user
router.post("/register", createUser);

// Route to login a user
router.post("/login", loginUser);

//Verify Otp
router.post("/verify-otp",verifyOtp);



export default router;