import mongoose from "mongoose";

export const NoteSchema = new mongoose.Schema({
    userId:{
        type:String,
        ref:'Users',
        required:true,
    },
    subjectId:{
        type:String,
        ref:'Subject',
        required:true,
    },
    noteContent:{
        type:String,
        required:true,
    },
    Attachments:[{
        data:Buffer,
        contentType:String,
        filename:String,
    },],
});

const Note = mongoose.model('Note',NoteSchema);
export default Note;