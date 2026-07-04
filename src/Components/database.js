import express from 'express';
import mongoose from 'mongoose';

const app = express();

const connectDB = async () =>{
    try{
        await mongoose.connect('');
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
} 
connectDB()
.then(()=>console.log('Database connection successful'))
.catch((error)=>console.error('Database connection error:', error));

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


export default connectDB;
