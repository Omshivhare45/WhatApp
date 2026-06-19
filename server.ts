import dotenv from 'dotenv';
dotenv.config();
import app from './src/app';
import connectDB from './src/db/db';

connectDB();

app.listen(3000 , () => {
    try{
        console.log("Server runnning on PORT 3000📈");
    }catch(err){
        console.log("Server error", err);
    }
    
})