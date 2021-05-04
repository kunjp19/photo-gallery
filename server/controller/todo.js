import PostMessage from '../models/postMessage.js';
import Mongoose from 'mongoose';

export const getTodos = async (req,res)=>{
    //res.send('the app is working');
    try {
        const Todos = await PostMessage.find();

        res.status(200).json(Todos);
        console.log("todos fetched");

    } catch (error) {
        console.log("todos fetched");
        res.status(404).json({error:error});
    }

}

export const createTodo = async (req,res) =>{
    const { title, message, selectedFile, creator} = req.body;
    const newPostMessage = new PostMessage({ title, message, selectedFile, creator })
    try {
        await newPostMessage .save();
        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}

export const updateTodo = async (req,res) =>{
    const {id:_id} = req.params;
    const todo = req.body;
    if(!Mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that ID');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...todo, _id}, {new:true});

    res.json(updatedPost);

}
 
export const deleteTodo = async (req,res) =>{

    const {id:_id} = req.params;
    const todo = req.body;

    if(!Mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that ID');
    await PostMessage.findByIdAndRemove(_id);

    res.json({message:"post deleted"});
}

export const likePost = async (req,res) =>{
    const {id:_id} = req.params;
    const todo = req.body;

    if(!Mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that ID');

    const post = await PostMessage.findById(_id);
    console.log(post.likeCount);
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {likeCount : post.likeCount+1}, {new:true});


    res.json(updatedPost);
}