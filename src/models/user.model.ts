import mongoose from 'mongoose'
import { kMaxLength } from 'node:buffer';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
        minlenght:10,
        maxlength:10,
        unique:true,
    },

},
    {
        timestamps:true,
    });

const userModel = mongoose.model("user", userSchema);

export default userModel;