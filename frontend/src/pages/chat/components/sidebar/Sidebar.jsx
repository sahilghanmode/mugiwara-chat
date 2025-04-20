import { AvatarFallback } from '@/components/ui/avatar'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import Chats from '../chats/Chats'
import { cn } from '@/lib/utils'


const Sidebar = ({friends,setFriend}) => {
    const[selectedFriend,setSelectedFriend]=useState("");

    const handleSelectFriend=(friend)=>{
      setSelectedFriend(friend)

      setFriend(friends.map((f)=>(f.id===friend.id?{...f,unreadCount:0}:f)))

      console.log(friend)

    }

    
    const formatTime=(date)=>{
      return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }

    const formatDateTime=(date)=>{
      const now=new Date
      const diff=now.getTime()-date.getTime()
      const days=Math.floor(diff/(1000*60*60*24))
      let val=""
      if(days>0){
        val= days===1?"Yesterday":`${days} days ago`
        return val
      }
      return formatTime(date);
    }

    return (
      <div className='flex h-screen w-screen'>
        <div className='h-screen bg-white border-r border-purple-100 flex flex-col w-[400px]  transition-all duration-300 ease-in-out'>

          {/* Header */}
          <div className='p-4 border-b border-purple-100 flex items-center justify-between'>
            <h2 className='text-lg font-bold'>Conversations</h2>
            <button className='border-gray-500 border-2 p-1 rounded-md w-[100px]'>Logout</button>
          </div>

          {/* Chat List */}
          <div className='flex-1 overflow-y-auto'>
            {friends.map((friend)=>(
                  <div
                  key={friend.id} 
                  onClick={()=>handleSelectFriend(friend)}
                  className={cn('flex items-center p-3 cursor-pointer hover:bg-purple-100 transition-colors',selectedFriend.id===friend.id &&"bg-purple-100")}>
          
                      <div className='relative'>
                          <Avatar className='h-12 w-12'>
                            <AvatarImage src={friend.avatar || "/placeholder.svg"} alt={friend.name}/>
                            <AvatarFallback> {friend.name.substring(0,3).toUpperCase()}</AvatarFallback>
                          </Avatar>
                          {friend.online && (
                              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                          )}
                      </div>
                      <div className="ml-3 flex-1 overflow-hidden">
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium text-gray-900 truncate">{friend.name}</h3>
                          <span className="text-xs text-gray-500">{formatDateTime(friend.lastMessageTime)} </span>
                        </div>
                        <div className="flex justify-between items-center mt-1">
                          <p className="text-sm text-gray-500 truncate">{friend.lastMessage}</p>
                          {friend.unreadCount > 0 && (
                            <Badge variant="default" className="bg-purple-600 hover:bg-purple-700">
                              {friend.unreadCount}
                            </Badge>
                          )}
                        </div>
                      </div>
                  </div>
              ))}
          </div>
          

        </div>
        <div className='flex flex-1 flex-col'>
            {selectedFriend && (<Chats friend={selectedFriend} setSelectedFriend={setSelectedFriend}/>)}
        </div>
      </div>
    )
}

export default Sidebar
