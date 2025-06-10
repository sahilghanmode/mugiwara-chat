import { useAuthContext } from "@/context/AuthContext";
import { apiClient } from "@/lib/api-client";
import { SIGNUP_ROUTES } from "@/utils/constants";
import { useState } from "react"
import { toast } from "sonner";

const useSignup = () => {
    const [loading,setLoading]=useState(false);
    const {setAuthUser}=useAuthContext()

    function handleInputs({username,password,confirmPassword}){
        if(!username || !password || !confirmPassword){
            toast.error("Please fill in all the fields")
            return false;
        }
        
        if(password!=confirmPassword){
            toast.error("Password and ConfirmPassword does not match")
            return false;
        }
        if(password.length<6){
            toast.error("Password must be at least 6 characters");
            return false;
        }
        return true;
    }

    const signup=async({username,password,confirmPassword})=>{
        const success=handleInputs({username,password,confirmPassword})
        if(!success)return;

        setLoading(true)
        try {
            const res=await apiClient.post(SIGNUP_ROUTES,{username,password},{withCredentials:true})
            const data=res.data
            console.log(data);
            if(data.error){
                throw new Error(data.error)
            }

            localStorage.setItem("userInfo",JSON.stringify(data))

            setAuthUser(data)

        } catch (error) {
            toast.error(error.message)
            console.log("error from signup")
        }finally{
            setLoading(false);
        }
    }

    
    return {loading,signup}
    
}

export default useSignup
