import Note from '../models/Note.js';

export const getNote = async (req,res)=>{
    try{
        const {userId} = req.user.id;
        const subjectId = req.params.subjectId;
        const notes = await Note.find({UserId: userId},{subjectId: subjectId});
        res.status(200).json(notes);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

export const createNote = async (req, res)=>{
    try{
        const {noteContent,subjectId,attachments} = req.body;
        const note = new Note({
            UserId:req.user.id,
            SubjectId:subjectId,
            NoteContent:noteContent,
            Attachments:attachments,
        });
        await note.save();
        res.status(200).json(note);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

export const updateNote = async (req,res)=>{
    try{
        const noteId = req.params.id;
        const {noteContent,attachments} = req.body;

        const updatedNote = await Note.findByIdAndUpdate(noteId,{NoteContent:noteContent,Attachments:attachments},{new:true});

        if(!updatedNote){
            return res.status(404).json({message:"Note not found"});
        }

        res.status(201).json(updatedNote);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

export const removeNote = async (req,res)=>{
    try{
        const noteId = req.params.id;

        const removeNote = await Subject.findByIdAndRemove(noteId);

        if(!removeNote){
            return res.status(404).json({message:"Note not found"});
        }

        res.status(201).json({message:"Note removed"}).end();
    }catch(err){
        res.status(500).json({message: err.message});
    }
};