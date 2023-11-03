import { Express } from "express";
const router = express.router();
import {
    getNote,
    createNote,
    updateNote,
    removeNote,
} from "../controllers/sub.js";
import { verifyToken } from "../middleware/auth.js";

router.get('/subject/:subjectId', verifyToken,getNote);

router.post('/create',verifyToken,createNote);

router.patch('/update/:id',verifyToken,updateNote);

router.delete('/subject/:id',verifyToken,removeNote);

export default router;