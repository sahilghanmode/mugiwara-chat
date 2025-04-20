import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Send } from 'lucide-react'

const Footer = ({messages,setMessages, friend, setSelectedFriend}) => {
    const [newMessage,setNewMessage]=useState("");

    const handleSendMessage=(e)=>{
        e.preventDefault();
        if(!newMessage.trim()) return;

        const message={
          id:Math.random().toString(36).substring(2, 9),
          content:newMessage,
          sender:"user",
          timestamp:new Date()

        }

        setMessages([...messages,message]);
        setNewMessage("");

        const updatedFriend={
          ...friend,
          lastMessage:newMessage,
          lastMessageTime:new Date()
        }

        setSelectedFriend(updatedFriend)

    }

  return (
    <div className="p-4 bg-white border-t border-purple-100 shadow-inner w-full">
        <form onSubmit={handleSendMessage} className="flex space-x-2">
        <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
        />
        <Button type="submit" size="icon" className="bg-purple-600 hover:bg-purple-700">
            <Send className="w-4 h-4" />
        </Button>
        </form>
    </div>
  )
}

export default Footer
