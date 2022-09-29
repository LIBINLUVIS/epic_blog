import React, { useEffect, useState } from 'react'
import '../Styles/blogs.css'
import HomeIcon from '@mui/icons-material/Home';
import EditIcon from '@mui/icons-material/Edit';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PersonIcon from '@mui/icons-material/Person';
import dumyimg from '../assets/Rectangle 44.png'
import {Link,NavLink, useParams} from "react-router-dom"
import bot from "../assets/chatbot.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';



function Blogs() {
  const {id}=useParams()
  console.log(id)
 
  const [selectbot,setSelectbot]=useState(false)
  const [categoryblog,setCategoryblog]=useState([])


  const chatbot=()=>{
    setSelectbot(true);
  }
  const closechatbot=()=>{
    setSelectbot(false)
  }
  console.log(categoryblog)
  useEffect(()=>{
    console.log("hello")
    const catgeoryfetchapi=`http://localhost:5000/api/posts/categoricalfetch/${id}`
    axios.get(catgeoryfetchapi).then((res)=>{
      if(res.status==200){
        console.log(res.data)
        setCategoryblog(res.data)
      }
    })
  },[])

  return (
  <div className='main_blogs_container'>
    <div
     className='blog_sec_sidemenu'>
        <div className='blog_side_icons'>
            <Link to='/authhome' style={{color:'grey'}}>
            <HomeIcon id='home_icon_blog' fontSize='large'/>
            </Link>
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
     {/* <div className='text_area1'>
     <TextField id="standard-basic" label="" variant="standard" style={{marginTop:'9px'}}/>
     <SearchIcon style={{marginTop:'10px',color:'grey',cursor:'pointer'}}/>
     </div> */}
    </div>
    <>
     <hr style={{width:'99%'}}></hr>
     </>
    
    
    <div className='blog_section'>
    <div className='blogs'>
    <div className='blogs_scroll'>
     {categoryblog[0]?<>
      {categoryblog.map((obj)=>(
           <div className='blog_box'>
           <div className='ineer_blog_head'>
           <span>
                  <NavLink to={`/blog/${obj._id}`} style={{color:'grey'}}>
                  <ArrowForwardIcon/>
                  </NavLink>
                </span>
                <span>{obj.username}</span>
                <span>5 days ago</span>
               </div>
               <div style={{fontSize:'20px',fontWeight:'thin',
               marginLeft:'25px',marginTop:'10px'}}>
               <h>{obj.title}</h>
               </div>
               <div className='inner_blog_body'>
              <img src={dumyimg}/>
              <p>{obj.description}....</p>
      
             {/* <NavLink to={`/blog/${obj._id}`} style={{textDecoration:'none',cursor:'pointer'}}>
              read more
              </NavLink> */}
              
          
          </div>

     </div>
    ))}
     </>:<>
     <h1 style={{color:'grey'}}>No Posts Yet For this Topic</h1>
     </>}
    </div>
    </div>

    <div className='chat_bot'>
      {selectbot?<>
        <div className='chat_area1'>
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
     
        <TextField  id="standard-basic" 
        label="" variant="standard"
        />
        </div>
        <SendIcon style={{color:'grey',cursor:'pointer'}}/>
      </div>
    </div>
      </>:<>
      <div className='chat_area2'>
    <div className='cross_icon'>
      </div>
      <div className='message_box'>
      </div>
    </div>
      </>}   
    <div className='chatbot'>
    <img src={bot} onClick={chatbot}/>
    </div>
    </div>
    </div>
    
 


    <div style={{textAlign:'center',height:'100px',marginTop:'auto'}} className='hide_fotter'>
        <hr style={{width:'99%'}}></hr>
         <p>© 2022   All rights reserved.</p>
    </div>
   </div> 

   
  )
}

export default Blogs