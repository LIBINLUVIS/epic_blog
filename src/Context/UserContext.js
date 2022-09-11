import {createContext,useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
const UserContext = createContext();
export default UserContext;


export const UserProvider = ({ children }) => {
    const [useralredyin,setUseralredyin]=useState(false);
    const [usertoken,setUsertoken]=useState(false)
    const [usersignup,setUsersignup]=useState(false)
    const [userlogin,setUserlogin]=useState(false)
    const [loginerror,setLoginerror]=useState(false)
    const [networkerror,setNetworkerror]=useState(false)
    // const [userauth,setUserauth]=useState(false)

    let navigate=useNavigate(); 


    let loginUser=async (e)=>{
        setUserlogin(true)
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
            let token=res.data.token
            localStorage.setItem('user_token',token)
            setUserlogin(false)
            setUsertoken(true)
            navigate("/authhome")
          }

        }).catch((err)=>{
            console.log('login error')
            console.log(err.request)
            if(err.response.status==401){
              setLoginerror(true)
              setUserlogin(false)
            }
            if(!err.response || err.response.status==500){
              setNetworkerror(true)
              setUserlogin(false)
            }
        })
    }

    let signup=()=>{
      setUsersignup(true)
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
          setUsersignup(false)
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
    const checkauth=()=>{
      var token = localStorage.getItem('user_token')
      if(token){
        setUsertoken(true)
        // setUserauth(true)
      }
    }

    let contextData = {
        loginUser:loginUser,
        signup:signup,
        useralredyin:useralredyin,
        setUseralredyin:setUseralredyin,
        usertoken:usertoken,
        usersignup:usersignup,
        userlogin:userlogin,
        loginerror:loginerror,
        networkerror:networkerror,
        checkauth:checkauth
      }; 
    
      return (
        <UserContext.Provider value={contextData}>{children}</UserContext.Provider>
      );


}