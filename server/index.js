import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import postRoutes from './routes/posts.js';

const app = express();


app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

app.use('/posts',postRoutes);

//change username and password when upload on github.
const CONNECTION_URL = "mongodb+srv://heenbee12:yena1234@cluster0.esozc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT | 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{app.listen(PORT,()=>{console.log(`server listen on ${PORT}`)})})
    .catch((error)=>{console.log(error.message)});

