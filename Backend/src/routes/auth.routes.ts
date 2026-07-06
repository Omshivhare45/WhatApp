import  express  from "express";
import {registerUser, loginUser, logoutUser, updateProfile, checkAuth} from "../controllers/auth.controller";

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/logout', logoutUser);

router.get('/check', checkAuth);

router.put("/update", updateProfile);

export default router;