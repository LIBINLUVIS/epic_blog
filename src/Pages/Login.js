import React,{useContext} from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import UserContext from "../Context/UserContext";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../Styles/login.css"
import "../Styles/homemain.css"
import {Link} from "react-router-dom"


function Login() {
  let { loginUser} = useContext(UserContext);
  return (
    <div className='main'>
        <div className='loginhead'>
        <ArrowBackIcon style={{color:"#808080"}}/>
        <Link to="/" className="backlink">
        <h>Go back</h>
        </Link>
        </div>
        <div className='logintext'>
          <h1>Login</h1>
        </div>
        <div >
          <form onSubmit={loginUser} className='loginauth'>
          <TextField id="standard-basic" label="Username" variant="standard" style={{width:"400px"}} name="username" required/>
           <TextField id="standard-basic" label="Password" variant="standard" style={{width:"400px",marginTop:"50px"}} name="password"/>
           <Button variant="contained" disableElevation style={{marginTop:"80px",borderRadius:"50px",width:"300px",height:"60px",backgroundColor:"#FF6719"}} type="submit">
           Login
           </Button>
          </form>
        </div>
    </div>
  )
}

export default Login