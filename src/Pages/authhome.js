import React from 'react'
import "../Styles/authhomesidemenu.css"
import "../Styles/homemain.css"
import banner from "../assets/Frame.png"
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import CreateIcon from '@mui/icons-material/Create';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HomeIcon from '@mui/icons-material/Home';

function authhome() {
  return (
    <div className='home'>

    <div style={{overflow:'hidden',position:'fixed',backgroundColor:'white'}}>
      <div className='blog_side_icons'>
      <Link to='/'>
      <HomeIcon style={{color:"grey"}} fontSize='large'/>
      </Link>
       <Link to='/write'>
     <CreateIcon style={{color:"grey"}} fontSize='large' id="create_icon"/>
     </Link>
     <Link to='/Read'>
     <AutoStoriesIcon style={{color:"grey"}} fontSize='large'/>
     </Link>
    </div>
       <div style={{height:'50vh',borderRight:'1px solid black',color:'grey',
       display:'flex',flexDirection:'column',width:'100px',justifyContent:'center',alignItems:'center'}}>
        <PersonIcon fontSize='large'/>
       </div> 
   </div>
     <div className='home-main'>
       <h2 style={{color:"#FF6719"}}>Inc. This Morning<br></br>
       <span style={{marginLeft:'19%',fontSize:'40px'}}><span style={{color:'grey'}}>"</span>Blog<span style={{color:'grey'}}>"</span></span>
       </h2>
       <p><span style={{marginLeft:'50px'}}>awesome place to make oneself</span><br></br>
       productive and entertained through daily updates</p>

      <div className='background'>
        <img src={banner} style={{height:"470px",width:"1123px"}}/>
        <h1 className="img-text">The home for great  <br></br> writers and readers</h1>
        <button className='read-btn'>Start Reading</button>
        <button className='write-btn'>Start Writing</button>
      </div> 
      <div style={{textAlign:'center',height:'50px',marginTop:'10px'}}>
       <hr style={{width:'1520px'}}></hr>
        <p>© 2022   All rights reserved.</p>
      </div>
      </div>
     </div>
  )
}

export default authhome