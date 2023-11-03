import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';
import { register } from './controllers/auth.js';
import authRouter from './routes/auth.js';
import subjectRouter from './routes/subject.js';
import noteRouter from './routes/note.js';
import userRouter from './routes/user.js';
import verifyToken from './middleware/auth.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:'cross-origin'}));
app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));
app.use(cors());
app.use('/assets',express.static(path.join(__dirname, 'public/assets')));

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'public/assets');
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
});

const upload = multer({storage:storage});

app.post("/auth/register",upload.single("pdf"),register);

app.use("/auth",authRouter);
app.use("/user",userRouter);
app.use('/subjects',verifyToken, subjectRouter);
app.use('/notes',verifyToken, noteRouter);

// Mongoose setup

const PORT = process.env.PORT || 6000;
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    app.listen(PORT,()=> console.log(`Server Port: ${PORT}`));
}).catch((error)=>console.error(error));