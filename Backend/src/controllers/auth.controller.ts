import userModel from "../models/user.model";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Request, Response } from "express";
import { profile } from "node:console";

async function registerUser(req :Request, res: Response ){
    const { name, email, password, phone } = req.body;

    const isUserExists = await userModel.findOne({
        $or:[{
            email,
            phone
        }]
    })

    if(isUserExists){
        return res.status(401).json({
            message: "User already Exists"
        })
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        name, email, phone , password: hash
    })

    const token = jwt.sign({
        id: user._id
    },process.env.JWT_SECRET as string);

    return res.status(200).json({
        message:"User registered successfully",
        token
    })
}

async function loginUser( req: Request, res:Response ){
    const {  email, password, phone } = req.body;
    // console.log("Request Body:", req.body);


    const user = await userModel.findOne({
        $or:[
            {
                phone
            }
        ]
    })
//     console.log("User Found:", user);
//     console.log(email);
//     console.log(phone);


    if(!user){
        return res.status(401).json({
            message:"Invalid Credentials"
        })
    }

    const isPassword = await bcrypt.compare(password, user.password);

    // console.log("Password Match:", isPassword);

    if( !isPassword){
        return res.status(401).json({
            message:"Inavlid user detail"
        })
    }

    const token = jwt.sign({
        id : user._id
    },process.env.JWT_SECRET as string);

    res.cookie("token", token);

    return res.status(201).json({
        message:"User logged in successfully",
        user:{
    
            email,
            phone,
            password
        }
    })

}

async function logoutUser(req: Request, res: Response){
    res.clearCookie("token");
    return res.status(200).json({
        message: "Loggedout successfully"
    })
}
async function updateProfile( req: Request, res: Response ){
    try{
    const {profilepic} = req.body;

    const id = (req as any).user._id;

    if(!profilepic){
        return res.status(404).json("Profile photo not found");
    }
}catch(err){
    console.log("pfp error: ", err);
}
}

export  {registerUser, loginUser, logoutUser};