import Users from '../models/Users.js';

export const getUser = async (req,res)=>{
    try{
        const {id} = req.params;
        const user = await Users.findById(id);
        if(user) res.status(200).json(user);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

export const updatedProfile = async (req,res)=>{
    try{
        const {id}=req.params.id;
        const {firstname,lastname,Department,email,year}=req.body;
        const user = await Users.findByIdAndUpdate(id,{firstname,lastname,Department,email,year},{new:true});

        if(!user){
            return res.status(404).json({message:"No user found"});
        }
        res.status(200).json(user);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}