import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Users from '../models/Users.js';

export const register = async(req, res)=>{
    try{
        const {
            firstName,
            lastName,
            email,
            Department,
            password,
            picturepath,
            year
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password,salt);

        const newUser = new Users({
            firstName,
            lastName,
            email,
            Department,
            password,
            picturepath,
            year,
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

export const login = async (req, res) => {
    try{
        const {email,password} = req.body;
        const user = await Users.findOne({email});
        if(!user) return res.status(400).json({msg: 'User not found'});

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(400).json({msg: 'Incorrect password'});

        const token  = jwt.sign({id:user._id},process.env.JWT_SECRET);
        delete user.password;
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

