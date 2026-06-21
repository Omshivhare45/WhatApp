import  express  from "express";
import {registerUser, loginUser, logoutUser, updateProfile} from "../controllers/auth.controller";

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/logout', logoutUser);

router.get('/check', );

export default router;