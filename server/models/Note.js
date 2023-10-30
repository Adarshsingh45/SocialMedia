import mongoose from "mongoose";

export const NoteSchema = new mongoose.Schema({
    noteId:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true,
    },
    subjectId:{
        type:String,
        required:true,
    },
    filepath:{
        type:String,
        required:true,
    },
});

const Note = mongoose.model('Note',NoteSchema);
export default Note;