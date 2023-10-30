import Note from '../models/Note.js';

export const getNotes = async (req,res)=>{
    try{
        const {subjectId} = req.params;
        const note = await Note.find(subjectId);
        res.status(200).json(note);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};