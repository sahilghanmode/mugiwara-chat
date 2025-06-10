import { useNavigate } from "react-router-dom";
import Chats from "./components/chats/Chats"
import Sidebar from "./components/sidebar/Sidebar"
import { useState } from "react";

export default function Chat(){
  const [friends,setFriend]=useState([
    {
      id: "1",
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Hey there! How can I help you today?",
      lastMessageTime: new Date(Date.now() - 1000 * 60 * 5),
      unreadCount: 0,
      online: true,
    },
    {
      id: "2",
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Did you see the latest project update?",
      lastMessageTime: new Date(Date.now() - 1000 * 60 * 30),
      unreadCount: 3,
      online: true,
    },
    {
      id: "3",
      name: "Jessica Williams",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Let's schedule a meeting for next week.",
      lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 2),
      unreadCount: 0,
      online: false,
    },
    {
      id: "4",
      name: "David Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Thanks for your help yesterday!",
      lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 24),
      unreadCount: 0,
      online: true,
    },
    {
      id: "5",
      name: "Emma Thompson",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "The design looks great! Just a few tweaks needed.",
      lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 48),
      unreadCount: 0,
      online: false,
    },
]);

    const navigate=useNavigate()

    

    return (
        <div className="flex ">
            <Sidebar friends={friends} setFriend={setFriend}/>
        </div>
    
    )
}