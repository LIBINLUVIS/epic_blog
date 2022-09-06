import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../Styles/write.css';
import TextField from '@mui/material/TextField';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import VideocamIcon from '@mui/icons-material/Videocam';
import Autocomplete from '@mui/material/Autocomplete';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import TextareaAutosize from '@mui/material/TextareaAutosize';


function Write() {
    const [img,setImg]=useState(false)
    const options=[
        { label: 'Culture'},
        { label: 'Crypto' },
        { label: 'Education'},
        { label: 'Technology'},
        { label: 'Science'},
        { label: 'History'},
        { label: 'Politics'},
        { label: 'News'},
        { label: 'Travel'},
    ]
    const addimg=()=>{
        setImg(true)
    }
    const closeimg=()=>{
        setImg(false)
    }
  return (
    <>
     <div className='write_section'>
        <div className='dashback_logout'>
        <div style={{display:"flex"}}>
        <ArrowBackIcon style={{color:"#808080"}}/>
        <Link to="/authhome" style={{textDecorationLine:"none",color:"GrayText"}}>
        <h>Go back</h>
        </Link>
        </div>
        <button style={{fontWeight:"bold",backgroundColor:'#FF6719',borderRadius:'50px',
        height:'50px',width:'100px',border:'none',color:'white',cursor:'pointer'}} onClick={''}>
         Publish
        </button>
        </div>

        <div className='blog_section'>
        <TextField
          id="standard-helperText"
          label=""
          defaultValue="Title"
          helperText=""
          variant="standard"
          inputProps={{style: {fontSize: 35,fontFamily:'serif'}}}
        />
        </div>

        <div className='img_upload_tag'>
        <div>
            {img?<>
            <RemoveCircleOutlineOutlinedIcon style={{color:'#bdbdbd',width:'60px',height:'60px',cursor:'pointer'}} onClick={closeimg}/>
            <CameraAltIcon style={{color:'#bdbdbd',width:'55px',height:'55px',cursor:'pointer'}}/>
            <VideocamIcon style={{color:'#bdbdbd',width:'60px',height:'60px',cursor:'pointer'}}/>
            </>:<>
            <AddCircleOutlineOutlinedIcon style={{color:'#bdbdbd',width:'60px',height:'60px',cursor:'pointer'}} onClick={addimg}/>
            </>}
        </div>
            <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Topic" />}
            />
        </div>
        <div className='blog_body'>
          <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Body"
          style={{ width: 840}}
          />
        </div>
     </div>
    <div style={{textAlign:'center',height:'50px',marginTop:'307px'}}>
      <hr style={{width:'99%'}}></hr>
       <p>© 2022   All rights reserved.</p>
    </div>
     </>
  )
}

export default Write