import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'
import React from 'react'

const Header = ({friend}) => {
  return (
    <div className='w-full'>
      <header className="px-4 py-3 bg-white border-b border-purple-100 shadow-sm flex items-center">
          {/* {isMobile && (
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)} className="mr-2 md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          )} */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Avatar>
                <AvatarImage src={friend.avatar || "/placeholder.svg"} alt={friend.name} />
                <AvatarFallback>{friend.name.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              {friend.online && (
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white"></span>
              )}
            </div>
            <div>
              <h1 className="text-lg font-semibold">{friend.name}</h1>
              <p className="text-xs text-gray-500">{friend.online ? "Online" : "Offline"}</p>
            </div>
          </div>
        </header>
    </div>
  )
}

export default Header
