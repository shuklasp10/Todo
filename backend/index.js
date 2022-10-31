import express from "express";
import dotenv from 'dotenv';
import bodyparser from "body-parser";
import cors from 'cors';
import router from './Routes/Todo.js';
import mongoose from 'mongoose';

const app = express();

dotenv.config();

app.use(bodyparser.json({limit:"30mb",extended:true}));
app.use(bodyparser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use('/',router);


mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true})
.then(
    app.listen(process.env.PORT,()=>{
        console.log(`server is running on port ${process.env.PORT}`);
    })
)
.catch(e=>console.log(e.message));