import mongoose from "mongoose";
import User from "./UserModel.js";

const conversationSchema=new mongoose.Schema({
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ],
    messages:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Message',

            default:[],
        }
    ],
    lastMessage:{
        type:String,
        default:""
    },
    lastMessageTime:{
        type:Date
    },
    unRead:{
        type:Map,
        of:Number,
        default:{}
    }
},{timestamps:true});

const Conversation=mongoose.model("Conversation",conversationSchema);

export default Conversation;