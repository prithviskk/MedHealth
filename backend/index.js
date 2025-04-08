import dotenv from 'dotenv'; 
import express from 'express';
import { connectDb } from './src/lib/db.js';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import router from './src/routes/auth.route.js'
dotenv.config();
const app = express();

const PORT = process.env.PORT || 5001;
console.log("MONGODB_URI:", process.env.MONGODB_URI);
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin:["http://localhost:5173", "https://medhealth.onrender.com/"],
        credentials:true,
    })
)

app.use("/api/auth",router);
connectDb();
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    
});
