import jwt from 'jsonwebtoken';
import User from '../models/user.model';
import { Request, Response, NextFunction } from 'express';


async function protectRoute( req: Request, res: Response, next: NextFunction){
    try{
        const token = req.cookies.jwt;

        if(!token){
            return res.status(401).json({
                message:"Unauthorized"
            })
        }

        next();
    }catch(err){
        console.log("ERROR in protected route", err);
    }
}

export default protectRoute;