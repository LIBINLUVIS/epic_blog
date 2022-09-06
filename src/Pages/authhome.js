import React from 'react'
import "../Styles/authhomesidemenu.css"
import "../Styles/homemain.css"
import banner from "../assets/Frame.png"
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import CreateIcon from '@mui/icons-material/Create';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

function authhome() {
  return (
    <>
    <div className='home'>
     <div className='v1'></div>
     <div className='side-menu'>

   
     <Link to='/write'>
     <CreateIcon id="write_icon" style={{color:"grey"}}/>
     </Link>
     <Link to='/read'>
     <AutoStoriesIcon id="book_icon" style={{color:"grey"}}/>
     </Link>
   
     <Link to='/dashboard'>
     <PersonIcon  id="dash_icon" style={{color:"grey"}}/>
     </Link>
     
     </div>

     <div className='home-main'>
      <h2 style={{color:"#FF6719"}}>Inc. This Morning</h2>
      <h1 style={{color:"#FF6719"}}>"Blog"</h1>
      <div className='background'>
        <img src={banner} style={{height:"535px",width:"1123px"}}/>
        <h1 className="img-text">The home for great  <br></br> writers and readers</h1>
        <Link to='/read'>
        <button className='read-btn'>Start Reading</button>
        </Link>
        <Link to='/write'>
        <button className='write-btn'>Start Writing</button>
        </Link>
        
      </div>

      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

      <div style={{borderBottom:"2px solid grey",marginTop:"50px",marginLeft:"20px",width:"1440px"}}></div>
      <div style={{display:"flex",justifyContent:"space-evenly",width:"100%",marginTop:"10px"}}>
      <p>© 2022 All rights reserved.</p>
      </div>
     </div>
     </div>
    </div>
    </>
  )
}

export default authhome