import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import cors from 'cors'
import todoRoutes from './routes/todo.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();    

app.use(bodyParser.json({limit:"30mb",extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors())
app.use('/todos',todoRoutes);

app.get('/',(req,res)=>{
    res.send('Hello, welcome!!!!');
});


const PORT = process.env.PORT;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
                .then(()=> app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`)))
                .catch((e)=> console.log(`Error:${e.message}`));

mongoose.set('useFindAndModify',false);