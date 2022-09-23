import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import EditIcon from '@mui/icons-material/Edit';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Button from '@mui/material/Button';
import "../Styles/detailblog.css";
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';
import blogimg from '../assets/blog_img1.jpg'
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import TextField from '@mui/material/TextField';



function Detailblog() { 
    const [selectbot,setSelectbot]=useState(false)

    const chatbot=()=>{
      setSelectbot(true);
    } 
    const closechatbot=()=>{
      setSelectbot(false)
    } 
  return ( 
    <>
    <div style={{overflow:'hidden',position:'fixed',backgroundColor:'white'}} className='hide_fotter_1'>
        <div className='blog_side_icons'>
            <HomeIcon id='home_icon_blog' fontSize='large'/>
            <EditIcon id='edit_icon_blog' fontSize='large'/>
            <AutoStoriesIcon id='story_icon_blog' fontSize='large'/>
        </div>
        <div style={{height:'50vh',borderRight:'1px solid black',color:'grey',
        display:'flex',flexDirection:'column',width:'100px',justifyContent:'center',alignItems:'center'}}>
         <PersonIcon fontSize='large'/>
        </div> 
    </div>
    <div className='dblog_head'>
    </div>
    <hr></hr>
    <div className='blog_heading'>
        <h>Blog Heading</h>
    </div>
    <div className='user_detail'>
        <div className='user_icon_name'>
        <div className='inner_user_icon'>
        <PersonIcon fontSize='large' style={{color:'grey'}}/>
        <div style={{display:'flex',flexDirection:'column',paddingLeft:'15px'}}>
        <h>Cory Klippsten</h>
        <span>just now</span>
        </div>
        </div>
        </div>
        <div className='dblog_icons'>
        <FavoriteBorderTwoToneIcon fontSize='large' style={{color:'grey'}}/>
        <ChatBubbleRoundedIcon fontSize='large' style={{color:'grey'}}/>
        <IosShareRoundedIcon fontSize='large' style={{color:'grey'}}/>
        </div>
    </div>
    <div className='dblog_img'>
        <img src={blogimg}/>
    </div>

    <div className='blog_content_body'>
     <p>In late April, 22 members of Congress wrote a letter to the Environmental Protection Agency (EPA) citing their environmental concerns around Bitcoin mining. Unfortunately, the letter was
         filled with common misconceptions 
         and contained misinformation about mining and Bitcoin in general.<br></br>{"       "}
         
        The poorly argued letter resulted in a written response from the Bitcoin mining community in which the contents of the original
        letter were thoroughly debunked point-by-point.<br></br>
        The poorly argued letter resulted in a written response from the Bitcoin mining community in which the contents of the original
        letter were thoroughly debunked point-by-point.
        The poorly argued letter resulted in a written response from the Bitcoin mining community in which the contents of the original
        letter were thoroughly debunked point-by-point.
        The poorly argued letter resulted in a written response from the Bitcoin mining community in which the contents of the original
        letter were thoroughly debunked point-by-point.
        The poorly argued letter resulted in a written response from the Bitcoin mining community in which the contents of the original 
        letter were thoroughly debunked point-by-point.
        The poorly argued letter resulted in a written response from the Bitcoin mining community in which the contents of the original 
        letter were thoroughly debunked point-by-point.
        The poorly argued letter resulted in a written response from the Bitcoin mining community in which the contents of the original 
        letter were thoroughly debunked point-by-point.
     </p>
    </div>
    <hr></hr>
    <div className='comment_sec'>
     {/* <AccountCircleTwoToneIcon style={{marginRight:'20px'}}/> */}
     <div className='comment_text'>
      <div className='comment_box_sec'>
      <TextField
          id="standard-textarea"
          label=""
          placeholder="Write a comment"
          multiline
          variant="standard"
          fullWidth
        />
      </div>
    <div style={{display:'flex',justifyContent:'flex-end',paddingTop:'10px'}}>
    <Button variant="outlined" style={{marginRight:'10px'}}>cancel</Button>
    <Button variant="outlined">comment</Button>
    </div>
     </div>
    </div>
    
    <div className='message_section'>
    <h style={{fontSize:'20px',fontWeight:'bold'}}>Comments</h>
    <div className='comments_user'>
      <div className='user_detail_icons'>
      <AccountCircleTwoToneIcon/>
      <span style={{fontSize:'15px',fontWeight:'bold',marginLeft:'5px',marginRight:'5px'}}>Cyberncode</span>
      <span style={{fontWeight:'lighter'}}>2 days ago</span>
      </div>
      <div className='comment'>
        <h>hey this is an good comment</h>
      </div>

      <div className='user_detail_icons'>
      <AccountCircleTwoToneIcon/>
      <span style={{fontSize:'15px',fontWeight:'bold',marginLeft:'5px',marginRight:'5px'}}>Cyberncode</span>
      <span style={{fontWeight:'lighter'}}>2 days ago</span>
      </div>
      <div className='comment'>
        <h>hey this is an good comment</h>
      </div>

      <div className='user_detail_icons'>
      <AccountCircleTwoToneIcon/>
      <span style={{fontSize:'15px',fontWeight:'bold',marginLeft:'5px',marginRight:'5px'}}>Cyberncode</span>
      <span style={{fontWeight:'lighter'}}>2 days ago</span>
      </div>
      <div className='comment'>
        <h>hey this is an good comment</h>
      </div>
    </div>
    </div>

    <div className='fotter_mobile_blog_sec'>
       <div style={{display:'flex',justifyContent:'space-between',zIndex:'-1',
       marginLeft:'20%',marginRight:'20%',marginTop:'30px',alignItems:'center'}}>
        <Link to='/authhome' >
        <HomeIcon  fontSize='large' style={{color:'grey'}}/>
        </Link>
        <Link to='/write'>
        <EditIcon  fontSize='large' style={{color:'grey'}}/>
        </Link>
        <Link to=''>
        <AutoStoriesIcon  fontSize='large' style={{color:'grey'}}/>
        </Link>
        <Link to='/dashboard'>
        <PersonIcon fontSize='large' style={{color:'grey'}}/>
        </Link>
       </div>
      </div>

    <div style={{textAlign:'center',height:'50px',marginTop:'10px'}} className='hide_fotter_1'>
        <hr style={{width:'99%'}}></hr>
        <p>© 2022   All rights reserved.</p>
    </div>
   </>
  )
}

export default Detailblog