// src/routes/userRouter.js (or .ts)
import { Router } from 'express';
import {User} from '../models/user/user.model.js'; // Adjust the import based on your project structure


const userRouter = Router();
userRouter.get("/me", (req, res) => {
  response.json({user:"user details"})
});
userRouter.post("/", (req, res) => {
  try{
    const {name,email}=req.body
    if(!name || !email){
        return res.status(400).send({status:"Name and email are required"});
    }
    let new_user= new User({name,email});
    new_user.save();
    return res.status(200).send({status:"User created", newUser});
  }
  catch(e){
    console.log(e);
    res.status(500).send(e);
  }
});

// userRouter.get("/:id",(req,res)=>{
    
// })


export default userRouter;