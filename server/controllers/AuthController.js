import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";
import { compare } from "bcrypt";
import {renameSync,unlinkSync} from "fs"

const maxAge=3*24*60*60*1000;

const createToken=(username,userId)=>{
    return jwt.sign({username,userId},process.env.JWT_SECRET,{expiresIn:maxAge});
};

export const signup=async (req,res,next)=>{
    try{
        const {username,password}=req.body;
        if(!username || !password){
            return res.status(400).json({error:"username and password are required"});
        }
        const user=await User.create({username,password});
        res.cookie("jwt",createToken(username,user.id),{
            maxAge,
            secure:true,
            sameSite:"None",
        });
        return res.status(201).json({
            user:{
                id:user.id,
                username:user.username,
                profileSetup:user.profileSetup,

            },
        });

    }catch(err){
        console.log({err});
        return res.status(500).json({
            error:"Internal Server Error"
        });
    }
    
}

export const login=async (req,res,next)=>{
    try{
        const {username,password}=req.body;
        if(!username || !password){
            return res.status(400).send("username and password is required");
        }
        const user=await User.findOne({username});
        if(!user){
            return res.status(404).send("username not found");
        }
        const auth=await compare(password,user.password);
        if(!auth){
            return res.status(400).send("Password is incorrect.")
        }
        res.cookie("jwt",createToken(username,user.id),{
            maxAge,
            secure:true,
            sameSite:"None",
        });
        return res.status(200).json({
            user:{
                id:user.id,
                username:user.username,
                profileSetup:user.profileSetup,
                firstName:user.firstName,
                lastName:user.lastName,
                image:user.image,
                color:user.color,

            },
        });

    }catch(err){
        console.log({err});
        return res.status(500).send("Internal Server Error");
    }
    
};

export const logout=async(req,res,next)=>{
    try {
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message:"Logged out successfully"});
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}

export const getUserInfo=async (req,res,next)=>{
    try{
        const userData=await User.findById(req.userId);
        if(!userData){
            return res.status(404).send("User with given id is not found.");
        }
        return res.status(200).json({
            
                id:userData.id,
                username:userData.username,
                profileSetup:userData.profileSetup,
                firstName:userData.firstName,
                lastName:userData.lastName,
                image:userData.image,
                color:userData.color

            
        })

    }catch(err){
        console.log({err});
        return res.status(500).send("Internal Server Error");
    }
    
};

export const updateProfile=async (req,res,next)=>{
    try{
        const {userId}=req;
        const{firstName,lastName,color}=req.body;
        if(!firstName || !lastName ){
            return res.status(400).send("Firstname and lastname and color is required");
        }

        const userData=await User.findByIdAndUpdate(userId,{
            firstName,lastName,color,profileSetup:true
        },{
            new:true,
            runValidators:true
        });

        return res.status(200).json({
            
                id:userData.id,
                username:userData.username,
                profileSetup:userData.profileSetup,
                firstName:userData.firstName,
                lastName:userData.lastName,
                image:userData.image,
                color:userData.color

            
        })

    }catch(err){
        console.log({err});
        return res.status(500).send("Internal Server Error");
    }
    
};


export const addProfileImage=async (req,res,next)=>{
    try{
        if(!req.file){
            return res.status(400).send("File is required");
        }

        const date=Date.now();
        let fileName="uploads/profiles"+date+req.file.originalname;
        renameSync(req.file.path,fileName);
        const updatedUser=await User.findByIdAndUpdate(req.userId,{image:fileName},{new:true,runValidators:true}
        );


        return res.status(200).json({
            
                image:updatedUser.image,
                
        })

    }catch(err){
        console.log({err});
        return res.status(500).send("Internal Server Error");
    }
    
};

export const removeProfileImage=async (req,res,next)=>{
    try{
        const {userId}=req;
        const user=await User.findById(userId);
        if(!user){
            return res.status(404).send("User not found");
        }
        if(user.image){
            unlinkSync(user.image);
        }
        user.image=null;
        await user.save();

        

        return res.status(200).send("Profile image removed successfully");

    }catch(err){
        console.log({err});
        return res.status(500).send("Internal Server Error");
    }
    
};