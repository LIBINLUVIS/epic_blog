import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../Styles/login.css"


function Login() {
  return (
    <div className='main'>
        <div className='loginhead'>
        <ArrowBackIcon style={{color:"#808080"}}/> <h>Go back</h>
        </div>
        <div className='logintext'>
          <h1>Login</h1>
        </div>
        <div className='loginauth'>
           <TextField id="standard-basic" label="Username" variant="standard" style={{width:"400px"}} />
           <TextField id="standard-basic" label="Password" variant="standard" style={{width:"400px",marginTop:"50px"}} />
           <Button variant="contained" disableElevation style={{marginTop:"80px",borderRadius:"50px",width:"300px",height:"60px",backgroundColor:"#FF6719"}}>
           Login
           </Button>
        </div>
    </div>
  )
}

export default Login