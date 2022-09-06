import { createContext, useState, useEffect } from "react";
import { Navigate, useHistory, useNavigate } from "react-router-dom";
import axios from "axios";
const UserContext = createContext();
export default UserContext;


export const UserProvider = ({ children }) => {
    const [useralredyin,setUseralredyin]=useState(false);

    let navigate=useNavigate();


    let loginUser=async (e)=>{
        const loginapi="http://localhost:5000/api/auth/login"
        e.preventDefault();
        let username = e.target.username.value;
        let password = e.target.password.value;
        const config={
            headers:{
                "Content-Type": "application/json",
            },

        };
        const body=JSON.stringify({
            username:username,
            password:password
        });

        await axios.post(loginapi,body,config).then((res)=>{
          console.log(res.data)
          if(res.status==200){
            navigate("/authhome")
          }

        }).catch((err)=>{
            
        })
    }

    let signup=()=>{
        
      var username = localStorage.getItem("susername");
      var password= localStorage.getItem("spassword");

       const config={
          headers:{
            "Content-Type":"application/json",
          },
       };
       const body=JSON.stringify({
         username:username,
         password:password
       });
       const signupapi="http://localhost:5000/api/auth/signup";

       axios.post(signupapi,body,config).then((res)=>{
        console.log("User Created!");
        if(res.status==200){
          navigate("/signin")
        }
       }).catch((err)=>{
        console.log(err.response.data)
        console.log(err.response.status)
        if(err.response.status==400){
          setUseralredyin(true);
        }
        console.log("User not Created!");
       })
        
    }








    let contextData = {
        loginUser:loginUser,
        signup:signup,
        useralredyin:useralredyin,
        setUseralredyin:setUseralredyin
      }; 
    
      return (
        <UserContext.Provider value={contextData}>{children}</UserContext.Provider>
      );


}