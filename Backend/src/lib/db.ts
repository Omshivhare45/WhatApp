import mongoose from 'mongoose';

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("Databse connected successfully✅");
    }catch(err){
        console.log("DB connection error: ", err);
    }
}

export default connectDB;