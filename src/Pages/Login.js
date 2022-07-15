import React,{useContext} from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import UserContext from "../Context/UserContext";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../Styles/login.css"


function Login() {
  let { loginUser} = useContext(UserContext);
  return (
    <div className='main'>
        <div className='loginhead'>
        <ArrowBackIcon style={{color:"#808080"}}/> <h>Go back</h>
        </div>
        <div className='logintext'>
          <h1>Login</h1>
        </div>
        <div >
          <form onSubmit={loginUser} className='loginauth'>
          <TextField id="standard-basic" label="Username" variant="standard" style={{width:"400px"}} name="username" />
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