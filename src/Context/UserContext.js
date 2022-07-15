import { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
const UserContext = createContext();
export default UserContext;


export const UserProvider = ({ children }) => {


    let loginUser=async (e)=>{
        const loginapi=""
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

        }).catch((err)=>{
            
        })
    }








    let contextData = {
        loginUser:loginUser
      };
    
      return (
        <UserContext.Provider value={contextData}>{children}</UserContext.Provider>
      );


}