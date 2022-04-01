import PostMessage from '../models/postMessage.js';

//Actually this file is not mandatory since we can make backend logic in routing function directly like this inside of routes folder's route file:
/* 
import express from 'express';

const router = express.Router()

router.get("/", async (req,res)=>{
    try 
    {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } 
    catch (error) 
    {
        res.status(404).json({message:error.message});
    }
});

export default router;
*/
//we just split above code into two different folder in order to seperate routing part and real logic part.

export const getPosts = async (req,res)=>{
    try 
    {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } 
    catch (error) 
    {
        res.status(404).json({message:error.message});
    }
}
export const createPost = async (req,res)=>{
    const post = req.body;
    const newPost = new PostMessage(post);

    try 
    {
        await newPost.save();

        res.status(201).json(newPost);
    } 
    catch (error) 
    {
        res.status(409).json({message:error.messgae});
    }
}