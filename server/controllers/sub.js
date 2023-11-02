import Subject from '../models/Subject.js';
import Users from '../models/Users.js';

export const getSubject = async (req,res)=>{
    try{
        const { userId } = req.params;
        const sub = await Subject.find({ userId });
        res.status(200).json(sub);
    }catch(err){
        res.status(404).json({message: err.message});
    }
};

export const createSubject = async (req,res)=>{
    try{
        const {userId} = req.body;
        const user = await Users.findById(userId);
        const newSubject = new Subject({
            userId,
            subjectName:user.subjectName,
        });
        await newSubject.save();

        const subject = await Subject.find();
        res.status(200).json(subject);
    }catch(err){
        res.status(404).json({message: err.message});
    }
};

export const addRemoveSubject = async (req,res)=>{
    try{
        const {id,subjectId} = req.params;
        const user = await Users.findById(id);
        const subject = await Subject.findById(subjectId);
        if (user.subjects.includes(subjectId)) {
            user.subjects = user.subjects.filter((id) => id !== subjectId);
            subject.subjects = subject.subjects.filter((id) => id !== id);
          } else {
            user.subjects.push(subjectId);
            note.subjects.push(id);
          }
    }catch(err){
        res.status(500).json({message: err.message});
    }
}