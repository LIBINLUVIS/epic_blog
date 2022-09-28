import React, { useState,useRef } from 'react'
import {Link} from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../Styles/write.css';
import TextField from '@mui/material/TextField';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Alert from "@mui/material/Alert";
import Autocomplete from '@mui/material/Autocomplete';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import axios from 'axios'
import CloseIcon from '@mui/icons-material/Close';
import CopyAllIcon from '@mui/icons-material/CopyAll'; 
import copy from "copy-to-clipboard";
import Snackbar from '@mui/material/Snackbar';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@material-ui/core/styles'; 



const useStyles=makeStyles((theme)=>({
    blog_section : {
      display:'flex',
      flexDirection:'column',
      marginLeft:'350px',
      marginRight:'350px',
    [theme.breakpoints.down("md")]: {
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      margin:'20px'
    }, 
  },
  blog_body_content:{
    width:'840px',
    height:'200px',
    fontSize:'20px',
    fontFamily:'Roboto',
    [theme.breakpoints.down("xs")]:{
      width:'300px',
      height:'200px'

    },
  },
  blog_body:{
    marginLeft:'350px',
    marginRight:'350px',
    marginTop:'50px',
    [theme.breakpoints.down("xs")]:{
       marginLeft:'10%',
       marginTop:'50px'
    }
  }


}))

function Write() {
    const classes=useStyles();
    const [img,setImg]=useState(false)
    const [spell,setSpell]=useState("")
    const [result,setResult]=useState("")
    const [blogwrite,setBlogwrite]=useState(false)
    const [open, setOpen] = React.useState(false);
    const [spellcheckbox,setSpellcheckbox]=useState(true)
    const [topicvalue,setTopicvalue]=useState("")
    const [publish,setPublish]=useState(false)
    const [publishalert,setPublishalert]=useState(false) 
    const [postimg,setPostimg]=useState({
      selectedFile:null
    })
    const [blogpost,setBlogpost]=useState({
      title:"",
      topic:"",
      description:""
    })
    const { title,topic,description } = blogpost;
    const onChange = e => setBlogpost({ ...blogpost, [e.target.name]: e.target.value });

  //  const  uploadpostimage=(e)=>{
  //   const fd=new FormData();
  //   fd.append('postimg',postimg.selectedFile);
  //   }
    var fd=new FormData();
   
    const onSubmit=e=>{
      e.preventDefault(); 
      fd.append('description',description)
      axios({
        method: "post",
        url: "http://localhost:5000/api/posts/createPost",
        data: fd,
        headers: { "Content-Type": "multipart/form-data",
        "auth-token": localStorage.getItem('user_token') },
      }).then((res)=>{
        console.log(res.data)
      }).catch((err)=>{
        console.log(err.data)
      })

      // fd.append('title',title)
      // fd.append('description',description)
      // fd.append('topic',topicvalue)
      // fd.append('postimg',postimg.selectedFile)
      // setPublish(true)
      // // console.log(postimg.selectedFile)
      // console.log(title)
      // console.log(topicvalue)
      // console.log(description)
      // console.log(fd)
 
      //   const postapi="http://localhost:5000/api/posts/createPost";
      //   const config = {
      //     headers: {
      //         'Content-Type': 'multipart/form-data',
      //         'auth-token': localStorage.getItem('user_token'),   
      //     }
      // };
      // // const body=JSON.stringify({title:title,topic:topicvalue,description:description});
     
      // axios.post(postapi,,config).then((res)=>{
      //   setPublish(false)
      //   setPublishalert(true)
      //   console.log(res.data)
      // }).catch((err)=>{
      //   console.log("fuckk")
      //   console.log(err.data)
      // })
      
   
    }
   

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
    const textcopy=()=>{
      var value=result.result
      copy(value)
      setOpen(true)
    }
    const spellcheckclose=()=>{
      setSpellcheckbox(false)
    }
    const addspellcheck=()=>{
      setSpellcheckbox(true)
    }

    const correctspell=async(e)=>{
       setBlogwrite(false)
       setBlogpost({ ...blogpost, [e.target.name]: e.target.value});
       setSpell(e.target.value)
       const word=e.target.value
       const controller = new AbortController();

      
       await axios.get(`http://127.0.0.1:8000/api/spellcheck/${word}/`,{signal: controller.signal})
       .then((res)=>{
        console.log(res.data)
        setResult(res.data)
        setBlogwrite(true)
      });
      controller.abort();
      
      //  setBlogwrite(false)
      //  const spellapi="http://127.0.0.1:8000/api/spellcheck"
      // const config = {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // };
      // const body = JSON.stringify({
      //     spell:e.target.value
      // });
      // await axios.post(spellapi,body,config).then((res)=>{
      //   setResult(res.data)
      //   setBlogwrite(true)
      // }).catch((err)=>{
      //   console.log(err)
      // })
    }
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
   const uploadimg=()=>{
    document.getElementById("blogimg").click()  
   }
   const FileSelectHandler = event=>{

    if(event.target && event.target.files[0]){
      console.log("pic")
      
      fd.append('postimg',event.target.files[0])
      console.log(fd.postimg)
    }
    
    // setPostimg({
    //   selectedFile:event.target.files[0]
    // })
    
   }
   const closemsg=()=>{
      setPublishalert(false)
   }
   

 
  

  return (
    <>
     <div className='write_section'>
     <form onSubmit={e => onSubmit(e)}>
        <div className='dashback_logout'>
        <div style={{display:"flex"}}>
        <ArrowBackIcon style={{color:"#808080"}}/>
        <Link to="/authhome" style={{textDecorationLine:"none",color:"GrayText"}}>
        <h>Go back</h>
        </Link>
        </div>
        {!publish?<>
          <button style={{fontWeight:"bold",backgroundColor:'#FF6719',borderRadius:'50px',
        height:'50px',width:'100px',border:'none',color:'white',cursor:'pointer'}} type='submit'>
         Publish
        </button>
        </>:<>
        <button style={{fontWeight:"bold",backgroundColor:'#FF6719',borderRadius:'50px',
        height:'50px',width:'100px',border:'none',color:'white',cursor:'pointer'}} type='submit'>
         <CircularProgress style={{height:'25px',width:'25px',color:'white'}}/>
        </button>
        </>}
        </div>
        
        <div className={classes.blog_section}>
        <TextField
          id="standard-helperText"
          label=""
          defaultValue="Title"
          placeholder='Title'
          helperText=""
          variant="standard"
          value={title}
          name="title"
          onChange={e => onChange(e)}
          inputProps={{style: {fontSize: 35,fontFamily:'serif'}}}
        />
        </div>

        <div className='img_upload_tag'>
      
        <div className='upload_icons'>
            {img?<>
            <RemoveCircleOutlineOutlinedIcon style={{color:'#bdbdbd',width:'60px',height:'60px',cursor:'pointer'}} onClick={closeimg}/>
            <button type="button" onClick={uploadimg} style={{backgroundColor:'white',border:'none'}}>
            <CameraAltIcon style={{color:'#bdbdbd',width:'55px',height:'55px',cursor:'pointer'}}/>
            </button>
            <input id="blogimg" type="file" style={{display:'none'}} onChange={FileSelectHandler}/>
            {/* <VideocamIcon style={{color:'#bdbdbd',width:'60px',height:'60px',cursor:'pointer'}}/> */}
            </>:<>
            <AddCircleOutlineOutlinedIcon style={{color:'#bdbdbd',width:'60px',height:'60px',cursor:'pointer'}} onClick={addimg}/>
            </>}
            
        </div>
            <Autocomplete
            disablePortal
            onChange={(event, value) => setTopicvalue(value.label)} 
            id="combo-box-demo" 
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Topic" />}
            />
        </div> 
        
        {spellcheckbox?<>
          <diV className="text_recomm">
          <div style={{display:'flex',alignItems:'center',margin:'20px'}}>
          <h>Spell checker</h>
          </div>
            <div style={{display:'flex'}}>
            {blogwrite?<>
            <TextField id="outlined-basic"
            value={result.result} variant="outlined" 
            focused
            color='grey'
            style={{width:'500px'}}/>
           </>:<>
           <TextField id="outlined-basic"
            value={result.result} variant="outlined" 
            focused
            color='success'
            style={{width:'500px'}}/>
           </>}
           <div style={{display:'flex',alignItems:'center',margin:'20px'}}>
           <CloseIcon style={{width:'30px',height:'30px',cursor:'pointer',color:'grey'}} onClick={spellcheckclose}/>
           <CopyAllIcon style={{width:'30px',height:'30px',
           cursor:'pointer',color:'grey'}} onClick={textcopy}/>
           </div>
            </div>
        </diV>
        </>:<>
        <div className='text_recomm1'>
        <AddCircleOutlineOutlinedIcon style={{color:'#bdbdbd',width:'50px',height:'50px',cursor:'pointer'}} onClick={addspellcheck}/>
        </div>
        </>}


        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert  severity="success" sx={{ width: '100%' }} onClose={handleClose}>
          content copied!
        </Alert>
      </Snackbar>
       
        <div className={classes.blog_body}>
          <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Body"
          value={description}
          name="description"

          className={classes.blog_body_content}
          onChange={event=>correctspell(event)} 
          />
        </div>
        </form>
     </div>
      {publishalert?<>
      <Alert onClose={() => {closemsg()}} style={{marginTop:'10px',marginLeft:'200px',marginRight:'200px'}}>Blog Published!</Alert>
      </>:<></>}
     <div style={{textAlign:'center',height:'50px',marginTop:'307px'}}>
      <hr style={{width:'99%'}}></hr>
       <p>© 2022   All rights reserved.</p>
    </div>
     </>
  )
}

export default Write