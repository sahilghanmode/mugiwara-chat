import React, { useState } from 'react'
import Background from "../../assets/mugiwara.png";
import { Tabs,TabsContent,TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { apiClient } from '@/lib/api-client';
import { LOGIN_ROUTE, SIGNUP_ROUTES } from '@/utils/constants';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '@/store';
import useSignup from './Hooks/useSignup';

const Auth = () => {
    const navigate=useNavigate();
    const [signupInputs,signupSetInputs]=useState({
        username:"",
        password:"",
        confirmPassword:"",

    });

    const [signInInputs, signInSetInputs]=useState({
        username:"",
        password:"",
    })
    const {setUserInfo}=useAppStore();

    const{loading,signup}=useSignup()
    
    // const valideLogin=()=>{
    //     if(!email.length){
    //         toast.error("email is required");
    //         return false;
    //     }
    //     if(!password.length){
    //         toast.error("Password is required");
    //         return false;
    //     }
        
    //     return true;
    // }

    // const validateSignup=()=>{
    //     if(!email.length){
    //         toast.error("email is required");
    //         return false;
    //     }
    //     if(!password.length){
    //         toast.error("Password is required");
    //         return false;
    //     }
    //     if(password!==confirmPassword){
    //         toast.error("password and confirm password should be same");
    //         return false;
    //     }
    //     return true;
    // }

    const handeLogin=async(e)=>{

        e.preventDefault()
        console.log("login")
        
    }

    const handleSignup=async(e)=>{
        e.preventDefault();
        signup(signupInputs);
        console.log(signupInputs)
        


    }
    
  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center '>
        <div className='h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2' >
            <div className='flex flex-col gap-10 items-center justify-center shadow-2xl'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex justify-center item-center'>
                        <h1 className='font-bold text-5xl md:text-6xl'>Welcome</h1>
                    </div>
                    <p className='font-medium text-center '>Fill in the details to get started</p>
                </div>
                <div className='flex items-center justify-center w-full'>
                    <Tabs className='w-3/4' defaultValue='login'>
                        <TabsList className='bg-transparent rounded-none w-full'>
                            <TabsTrigger value="login"
                            className='data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300'>Login</TabsTrigger>
                            <TabsTrigger value="signup"
                            className='data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300'>SignUp</TabsTrigger>


                        </TabsList>
                        <TabsContent className='flex flex-col gap-5 mt-5' value="login">
                            <Input placeholder="Username"
                            type="string"
                            className='rounded-full p-6'
                            value={signInInputs.username}
                            onChange={(e)=>signInSetInputs({...signInInputs,username:e.target.value})}/>

                            <Input placeholder="Password"
                            type="password"
                            className='rounded-full p-6'
                            value={signInInputs.password}
                            onChange={(e)=>signInSetInputs({...signInInputs,password:e.target.value})}/>

                            <Button className='rounded-full p-6' onClick={handeLogin}>Login</Button>

                        </TabsContent>
                        <TabsContent className='flex flex-col gap-5 ' value="signup">
                            <Input placeholder="Username"
                            type="string"
                            className='rounded-full p-6'
                            value={signupInputs.username}
                            onChange={(e)=>signupSetInputs({...signupInputs,username:e.target.value})}/>

                            <Input placeholder="Password"
                            type="password"
                            className='rounded-full p-6'
                            value={signupInputs.password}
                            onChange={(e)=>signupSetInputs({...signupInputs,password:e.target.value})}/>

                            <Input placeholder="confirm password"
                            type="password"
                            className='rounded-full p-6'
                            value={signupInputs.confirmPassword}
                            onChange={(e)=>signupSetInputs({...signupInputs,confirmPassword:e.target.value})}/>

                            <Button className='rounded-full p-6' onClick={handleSignup}>SignUp</Button>

                        </TabsContent>
                    </Tabs>
                </div>
            </div>
            <div className='hidden xl:flex justify-center items-center'>
                <img src={Background} alt="login img" />
            </div>
        </div>
    </div>
  )
}

export default Auth
