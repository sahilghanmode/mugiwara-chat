import User from "../models/UserModel.js";

export const getUsersForSidebar=async(req,res)=>{
    try {
        const loggedInUserId=req.user._id;

        const allUsersExceptLoggedIn=await User.find({_id:{$ne:loggedInUserId}});

        return res.status(200).json(allUsersExceptLoggedIn);
        
    } catch (error) {
        console.log("Error in getUserForSidebar controller", error.message);
        res.status(500).json({error:"Internal server error"});
    }
}