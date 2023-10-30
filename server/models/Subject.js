import mongoose from 'mongoose';

const SubjectSchema = new mongoose.Schema({
    subjectId:{
        type: String,
        required: true,
    },
    userId:{
        type:String,
        required:true,
    },
    subjectName:{
        type:String,
        required:true,
    },
});

const Subject = mongoose.model('Subject',SubjectSchema);
export default File;