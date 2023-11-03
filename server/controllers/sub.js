import Subject from '../models/Subject.js';

export const getSubject = async (req,res)=>{
    try{
        const {userId} = req.user.id;
        const subject = await Subject.find({UserId: userId});
        res.status(200).json(subject);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

export const createSubject = async (req, res)=>{
    try{
        const {subjectName} = req.body;
        const subject = new Subject({
            UserId:req.user.id,
            subjectName:subjectName
        });
        await subject.save();
        res.status(200).json(subject);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

export const updateSubject = async (req,res)=>{
    try{
        const subjectId = req.params.id;
        const {subjectName} = req.body;

        const updatedSub = await Subject.findByIdAndUpdate(subjectId,{subjectName:subjectName},{new:true});

        if(!updatedSub){
            return res.status(404).json({message:"SUbject not found"});
        }

        res.status(201).json(updatedSub);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

export const removeSubject = async (req,res)=>{
    try{
        const subjectId = req.params.id;

        const removeSub = await Subject.findByIdAndRemove(subjectId);

        if(!removeSub){
            return res.status(404).json({message:"Subject not found"});
        }

        res.status(201).json({message:"Subject removed"}).end();
    }catch(err){
        res.status(500).json({message: err.message});
    }
};