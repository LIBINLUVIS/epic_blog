import React,{useState,useContext} from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from 'react-router-dom'
import "../Styles/dashboard.css"
import pic from '../assets/Ellipse 4.png'
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
import UserContext from "../Context/UserContext";


function Dashboard() {

  let {logout} = useContext(UserContext);
  
  const [edit,setEdit]=useState(true)

  const makeedit=()=>{
    setEdit(false)
  }

  const changeusername=()=>{
    setEdit(true)
    // post to database apis
  }
  
   
  return (
    <div className='dashmain'>
        <div className='dashback_logout'>
        <div style={{display:"flex"}}>
        <ArrowBackIcon style={{color:"#808080"}}/>
        <Link to="/authhome" style={{textDecorationLine:"none",color:"GrayText"}}>
        <h>Go back</h>
        </Link>
        </div>
        <h style={{fontWeight:"bold",cursor:'pointer'}} onClick={logout}>Logout</h>
        </div>
      <div style={{display:"flex",justifyContent:"center",margin:"40px"}}>
        <h1>Profile Settings</h1>
      </div>



      <div className='profile'>
        <div className='pic_username'>
         <div className='profile_pic'>
          <img src={pic} style={{width:'100px',height:'100px'}}/>
          <CameraAltIcon style={{color:'grey',cursor:'pointer'}} type='file'/>
         </div>
         <div className='profile_username'>
          <div >
            <h>Username</h>
          </div>
          <div style={{display:"flex"}}>
          <TextField
          id="standard-read-only-input"
          label=""
          defaultValue="Hello World"
          InputProps={{
            readOnly: edit,
          }}
          variant="standard"
        />

        <EditIcon style={{color:'grey',cursor:'pointer'}} onClick={makeedit}/>

          </div>
          {edit?<></>:<>
          <button style={{backgroundColor:"#3CB371",borderRadius:'30px',color:'white',
          border:'none',marginTop:'20px',width:'60px',height:"30px",cursor:'pointer'}} 
          onClick={changeusername}>Save</button>
          </>}
         </div>
        </div>

        <div className='change_password'>
          <h style={{marginTop:"10px"}}>Change Password</h>
          <TextField
          id="standard-search"
          label="New Password"
          type="search"
          variant="standard"
          style={{marginTop:"15px"}}
        />
          <TextField
          id="standard-search"
          label="Confirm Password"
          type="search"
          variant="standard"
          style={{marginTop:"15px"}}
        />
        <button style={{backgroundColor:"#3CB371",color:'white',border:'none',
        marginTop:'20px',width:'60px',height:'30px',cursor:'pointer'}}>Done</button>

        </div>
      </div>

      <div className='user_posts_head'>
        <h1>Posts</h1>

        <div className='user_posts'>
         
        <div className='user_post'>
         <div className='post_head'>
           <h>demo post</h>
         </div>
         <div className='post_content'>
          <span style={{color:'#808080'}}>jan 8 at 8:10 pm</span>
          <div style={{display:"flex",alignItems:'center'}}>
          <FavoriteBorderOutlinedIcon style={{color:'#808080'}}/><span>100</span>
          </div>
          <CommentIcon style={{cursor:'pointer',color:'#808080'}}/>
          <DeleteIcon style={{color:'#808080',cursor:'pointer'}}/>
          <EditIcon style={{color:'#808080',cursor:'pointer'}}/>
          
         </div>
         <div className='post_view'>
           <h style={{marginLeft:'40px',fontSize:'40px',color:'grey'}}>2</h>
           <h style={{color:'grey'}}>TOTAL VIEWS</h>
          </div>
        </div>
        <div className='user_post'></div>
        </div>
      </div>

      <div style={{display:"flex",flexDirection:'column',marginTop:"50px",textAlign:'center'}}>
      <hr style={{width:'99%'}}></hr>
       <p>© 2022   All rights reserved.</p>
       </div>

    </div>
  )
}

export default Dashboard