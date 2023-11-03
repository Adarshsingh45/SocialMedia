import { Express } from "express";
import {
    getSubject,
    createSubject,
    updateSubject,
    removeSubject
} from "../controllers/sub.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get('/user',verifyToken,getSubject);

router.post('/create',verifyToken,createSubject);

router.patch('/update/:id',verifyToken,updateSubject);

router.delete('/delete/:id',verifyToken,removeSubject);

export default router;