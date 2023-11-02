import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        min:5,
        max:50,
    },
    lastName:{
        type:String,
        required:true,
        min:5,
        max:50,
    },
    email:{
        type:String,
        required:true,
        max:50,
        unique:true,
    },
    Department:{
        type:String,
        required:true,
        min:2,
        max:5,
    },
    password:{
        type:String,
        required:true,
        min:10,
    },
    picturePath:{
        type:String,
        default:"",
    },
    year:{
        type:Number,
        required:true,
    },
    subjects:{
        type:Array,
        default:[],
    },
    notes:{
        type:Array,
        default:[],
    },
});

const User = mongoose.model("User",UserSchema);
export default User;