import { Express } from "express";
import {
    getSubject,
    createSubject,
    addRemoveSubject
} from "../controllers/sub.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get('')