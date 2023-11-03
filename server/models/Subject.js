import mongoose from 'mongoose';

const SubjectSchema = new mongoose.Schema({
    userId:{
        type:String,
        ref:'Users',
        required:true,
    },
    subjectName:{
        type:String,
        required:true,
    },
});

const Subject = mongoose.model('Subject',SubjectSchema);
export default Subject;