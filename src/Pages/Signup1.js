import React,{useContext} from 'react'
import '../Styles/Signup.css'
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import UserContext  from '../Context/UserContext';
import Alert from '@mui/material/Alert';




function Signup1() {
     
    let{signup,useralredyin}=useContext(UserContext);

    const setpassword=(e)=>{ 
        e.preventDefault();
        let password=e.target.password.value;
        localStorage.setItem("spassword",password);
        signup();

    }

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
  return (
    <div className='main'>
    <div className='loginhead'>
    <ArrowBackIcon style={{color:"#808080"}}/> <h>Go back</h>
    </div>
    <div className='logintext'>
      <h1>Setup an Password</h1>
      <p>Enter an Password to create an <br/><p style={{marginLeft:"35%"}}>account</p></p>
    </div>
    <div style={{display:'flex',justifyContent:"center",marginTop:"30px"}}>
      <h style={{color:"#808080",fontSize:"20px"}}>Your Password</h>
    </div>
    <div >
      <form onSubmit={setpassword} className='loginauth'>
      {/* <TextField id="standard-basic" label="" variant="standard" style={{width:"400px"}} name="password" /> */}
      {/* {login field} */}
      <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            name="password"
            endAdornment={
             
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
              

            }
            // label="Password"
          />
        </FormControl>
        {useralredyin?<>
          <Alert variant="outlined" severity="error" style={{marginTop:"30px"}}>
          User already exists — check it out!
        </Alert>
        </>:<>
        
        </>}
        {/* {login button} */}
       <Button variant="contained" disableElevation style={{marginTop:"50px",borderRadius:"50px",width:"300px",height:"60px",backgroundColor:"#FF6719"}} type="submit">
       Signup
       </Button>
      </form>
    </div>
</div>
  )
}

export default Signup1