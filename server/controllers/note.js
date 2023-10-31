import Note from '../models/Note.js';
import Users from '../models/Users.js';

export const getNotes = async (req,res)=>{
    try{
        const {subjectId} = req.params;
        const note = await Note.find(subjectId);
        res.status(200).json(note);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

export const addRemoveNote = async (req,res)=>{
    try{
        const {id,noteId} = req.params
        const user = await Users.findById(id);
        const note = await Note.findById(noteId);
        if (user.Note.includes(noteId)) {
            user.Note = user.Note.filter((id) => id !== noteId);
            note.Note = note.Note.filter((id) => id !== id);
          } else {
            user.Note.push(noteId);
            note.Note.push(id);
          }
    }catch(err){
        res.status(500).json({message: err.message});
    }
}