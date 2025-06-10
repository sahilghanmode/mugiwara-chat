import React, { useEffect } from 'react'
import { Avatar,AvatarImage,AvatarFallback } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

const Messages = ({chats,friend}) => {

    console.log(friend)

    useEffect(()=>{
        const getMessages=async()=>{
          const messages=await axiosInstance.get(`/${friend}`)
        }
      },[])

    const formatTime=(date)=>{
        return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }
    return (
        <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
                {chats.map((message) => (
                <div
                    key={message.id}
                    className={cn("flex items-end space-x-2", message.sender==="user"? "justify-end": "justify-start")}
                >
                    {message.sender === "other" && (
                    <Avatar className="w-8 h-8">
                        <AvatarImage src={friend.avatar || "/placeholder.svg"} alt={friend.name} />
                        <AvatarFallback>{friend.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    )}
                    <div className="space-y-1">
                    <div
                        className={cn("max-w-md px-4 py-2 rounded-lg", message.sender==="user"? "bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-br-none":"bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm")}
                        
                    >
                        <p>{message.content}</p>
                    </div>
                    <p className="text-xs text-gray-500">{formatTime(message.timestamp)}</p>
                    </div>
                    {message.sender === "user" && (
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>ME</AvatarFallback>
                    </Avatar>
                    )}
                </div>
                ))}
            </div>
            </div>
  )
}

export default Messages
