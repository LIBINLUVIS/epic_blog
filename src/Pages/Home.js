import React from 'react'
import "../Styles/sidemenu.css"
import "../Styles/homemain.css"
import AddIcon from '@mui/icons-material/Add';
import LoginIcon from '@mui/icons-material/Login';
import banner from "../assets/Frame.png"
import { Link } from "react-router-dom";


function Home() {
  return (
     
     <div className='home'>

     <div style={{overflow:'hidden',position:'fixed',backgroundColor:'white'}}>
        <div className='blog_side_icons'>
        <Link to='/signup'>
      <AddIcon id='add_icon' style={{color:"grey"}} fontSize='large'/>
      </Link>
      <Link to='/signin'>
      <LoginIcon id='login_icon' style={{color:"grey"}} fontSize='large'/>
      </Link>
        </div>
        <div style={{height:'50vh',borderRight:'1px solid black',color:'grey',
        display:'flex',flexDirection:'column',width:'100px',justifyContent:'center',alignItems:'center'}}>
         {/* <PersonIcon fontSize='large'/> */}
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
         <Link to="/Read">
         <button className='read-btn'>Start Reading</button>
         </Link>
         <Link to="/Write">
         <button className='write-btn'>Start Writing</button>
         </Link>
       </div> 
       <div style={{textAlign:'center',height:'50px',marginTop:'10px'}}>
        <hr style={{width:'1520px'}}></hr>
         <p>© 2022   All rights reserved.</p>
       </div>
       </div>
      </div>
  )
}

export default Home