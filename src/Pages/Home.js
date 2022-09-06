import React from 'react'
import "../Styles/sidemenu.css"
import "../Styles/homemain.css"
import AddIcon from '@mui/icons-material/Add';
import LoginIcon from '@mui/icons-material/Login';
import banner from "../assets/Frame.png"
import { Link } from "react-router-dom";


function Home() {
  return (
     <>
     <div className='home'>
      <div className='v1'></div>
      <div className='side-menu1'>
      <Link to='/signup'>
      <AddIcon id='add_icon' style={{color:"grey"}}/>
      </Link>
      <Link to='/signin'>
      <LoginIcon id='login_icon' style={{color:"grey"}}/>
      </Link>
      </div>

      <div className='home-main'>
     
        <h2 style={{color:"#FF6719"}}>Inc. This Morning<br></br>
        <span style={{marginLeft:'19%',fontSize:'40px'}}><span style={{color:'grey'}}>"</span>Blog<span style={{color:'grey'}}>"</span></span>
        </h2>
        <p><span style={{marginLeft:'50px'}}>awesome place to make oneself</span><br></br>
        productive and entertained through daily updates</p>
       <div className='background'>
         <img src={banner} style={{height:"535px",width:"1123px"}}/>
         <h1 className="img-text">The home for great  <br></br> writers and readers</h1>
         <button className='read-btn'>Start Reading</button>
         <button className='write-btn'>Start Writing</button>
       </div>

       <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

       <div style={{borderBottom:"2px solid grey",marginTop:"70px",marginLeft:"20px",width:"1440px"}}></div>
       <div style={{display:"flex",justifyContent:"space-evenly",width:"100%",marginTop:"10px"}}>
       <p>© 2022   All rights reserved.</p>
       </div>
      </div>
      </div>
     </div>
     </>
    
     
  )
}

export default Home