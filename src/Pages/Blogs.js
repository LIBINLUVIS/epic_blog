import React, { useState } from 'react'
import '../Styles/blogs.css'
import HomeIcon from '@mui/icons-material/Home';
import EditIcon from '@mui/icons-material/Edit';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PersonIcon from '@mui/icons-material/Person';
import dumyimg from '../assets/Rectangle 44.png'
import {Link,NavLink} from "react-router-dom"
import bot from "../assets/chatbot.png"
import CloseIcon from '@mui/icons-material/Close';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';



function Blogs() {
  const [selectbot,setSelectbot]=useState(false)

  const chatbot=()=>{
    setSelectbot(true);
  }
  const closechatbot=()=>{
    setSelectbot(false)
  }

  return (
  <>
    <div style={{overflow:'hidden',position:'fixed',backgroundColor:'white'}}>
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

    <div className='blog_head'>
     <h1>Inbox</h1>
     <div className='text_area1'>
     <TextField id="standard-basic" label="" variant="standard" style={{marginTop:'9px'}}/>
     <SearchIcon style={{marginTop:'10px',color:'grey',cursor:'pointer'}}/>
     </div>
    </div>
    <hr></hr>

    <div className='outer_blog'>
    <div className='blogs'>
        {/* {for loop} */}
      <div className='blog_box'>
        <div className='ineer_blog_head'>
         <span>user name</span>
         <span>5 days ago</span>
        </div>
        <div style={{fontSize:'20px',fontWeight:'thin',
        marginLeft:'25px',marginTop:'10px'}}>
        <h>A Simple blog post</h>
        </div>
        <div className='inner_blog_body'>
          <img src={dumyimg}/>
          <p>Lorem Ipsum is simply dummy text 
            of the printing and typesetting industry.<br></br> 
            Lorem Ipsum has been the industry's standard dummy<br></br> 
            text ever since the 1500s....
            <NavLink to="" style={{textDecoration:'none'}}><span style={{color:'#FF6719'}}>read more</span></NavLink>
           </p>
        </div>
      </div>

      <div className='blog_box'>
        <div className='ineer_blog_head'>
         <span>user name</span>
         <span>5 days ago</span>
        </div>
        <div style={{fontSize:'20px',fontWeight:'thin',
        marginLeft:'25px',marginTop:'10px'}}>
        <h>A Simple blog post</h>
        </div>
        <div className='inner_blog_body'>
          <img src={dumyimg}/>
          <p>Lorem Ipsum is simply dummy text 
            of the printing and typesetting industry.<br></br> 
            Lorem Ipsum has been the industry's standard dummy<br></br> 
            text ever since the 1500s....
            <NavLink to="" style={{textDecoration:'none'}}><span style={{color:'#FF6719'}}>read more</span></NavLink>
           </p>
        </div>
      </div>

      <div className='blog_box'>
        <div className='ineer_blog_head'>
         <span>user name</span>
         <span>5 days ago</span>
        </div>
        <div style={{fontSize:'20px',fontWeight:'thin',
        marginLeft:'25px',marginTop:'10px'}}>
        <h>A Simple blog post</h>
        </div>
        <div className='inner_blog_body'>
          <img src={dumyimg}/>
          <p>Lorem Ipsum is simply dummy text 
            of the printing and typesetting industry.<br></br> 
            Lorem Ipsum has been the industry's standard dummy<br></br> 
            text ever since the 1500s....
            <NavLink to="" style={{textDecoration:'none'}}><span style={{color:'#FF6719'}}>read more</span></NavLink>
           </p>
        </div>
      </div>
      
    </div>
    {selectbot?<>
      <div className='chat_area'>
      <div className='cross_icon'>
        <CloseIcon style={{cursor:'pointer'}} onClick={closechatbot}/>
      </div>
      <div className='message_box'>
        <div className='user_query'>
          <PersonIcon style={{color:'blue'}}/>
          <div className='user_msg'>
            <h>hello</h>
          </div>
        </div>

        <div className='bot_query'>
          <SmartToyIcon style={{color:'orange'}}/>
          <div className='bot_result'>
            <h>hai...</h>
          </div>
        </div>
      </div>
      <div className='text_box'>
        <div className='text_area'>
        {/* {{TODO}} */}
        <TextField  id="standard-basic" 
        label="" variant="standard"
        />
        </div>
        <SendIcon style={{color:'grey',cursor:'pointer'}}/>
      </div>
    </div>
    </>:<></>}
    <div className='chatbot'>
    <img src={bot} onClick={chatbot}/>
    </div>
    </div>

    <div style={{textAlign:'center',height:'50px',marginTop:'10px'}}>
        <hr style={{width:'99%'}}></hr>
         <p>© 2022   All rights reserved.</p>
    </div>
   </>

   
  )
}

export default Blogs