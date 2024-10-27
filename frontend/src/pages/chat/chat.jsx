import { useAppStore } from '@/store'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import ContactContainer from './ccomponents/contacts-container';
import EmptyChatContainer from './ccomponents/empty-chat-container';
import ChatContainer from './ccomponents/chat-container';

const Chat = () => {
  const{userInfo}=useAppStore();
  const navigate=useNavigate();
  useEffect(()=>{
    if(!userInfo.profileSetup){
      toast("please setup profile to continue.");
      navigate("/profile");
    }
  },[userInfo,navigate]);
  return (
    <div className='flex h-[100vh] text-white overflow-hidden  '>
      <ContactContainer/>
      <EmptyChatContainer/>
      <ChatContainer/>
    </div>
  )
}

export default Chat;
