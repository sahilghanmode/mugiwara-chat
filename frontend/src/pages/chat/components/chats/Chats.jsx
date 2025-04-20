import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Messages from './Messages'

const Chats = ({friend,setSelectedFriend}) => {
  const [messages,setMessages]=useState([
    {
      id: "1",
      content: "Hey there! How can I help you today?",
      sender: "other",
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
    },
    {
      id: "2",
      content: "I'm looking for information about your services.",
      sender: "user",
      timestamp: new Date(Date.now() - 1000 * 60 * 4),
    },
    {
      id: "3",
      content: "We offer a wide range of services including web development, mobile app development, and UI/UX design.",
      sender: "other",
      timestamp: new Date(Date.now() - 1000 * 60 * 3),
    },
  ])
  return (
    <div className='flex flex-1 flex-col w-full'>
      <Header friend={friend} />
      <Messages chats={messages} friend={friend}/>
      <Footer messages={messages} setMessages={setMessages} friend={friend} setSelectedFriend={setSelectedFriend}/>
    </div>
  )
}

export default Chats
