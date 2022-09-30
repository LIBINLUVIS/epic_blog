import React, { useState, useContext, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import "../Styles/dashboard.css";
import pic from "../assets/Ellipse 4.png";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import DeleteIcon from "@mui/icons-material/Delete";
import UserContext from "../Context/UserContext";
import axios from "axios";
import UploadIcon from "@mui/icons-material/Upload";

function Dashboard() {
  let { logout, userposts, userblogpost, userinfofetch, userinfo } =
    useContext(UserContext);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [namesave, setNamesave] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [erropen, setErropen] = useState(false);
  const [newusername, setNewusername] = useState("");
  const [hideuploadbtn, setHideuploadbtn] = useState(false);
  const [hidecambtn, setHidecambtn] = useState(true);

  useEffect(() => {
    userposts();
  }, []);
  useEffect(() => {
    userinfofetch();
  }, []);

  console.log(userinfo);
  const [edit, setEdit] = useState(true);

  const makeedit = () => {
    setEdit(false);
  };

  const changeusername = () => {
    setEdit(true);
    setNamesave(true);
    const namechangeapi = "http://localhost:5000/api/auth/changeusername";
    const body = JSON.stringify({ username: newusername });
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("user_token"),
      },
    };

    axios
      .put(namechangeapi, body, config)
      .then((res) => {
        if (res.status == 200) {
          setNamesave(false);
          userinfofetch();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // post to database apis
  };
  const deletepost = (id) => {
    console.log(id);
    const deleteapi = `http://localhost:5000/api/posts/deletePost/${id}`;
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("user_token"),
      },
    };
    axios.delete(deleteapi, config).then((res) => {
      if (res.status == 200) {
        userposts();
      }
    });
  };
  const UpdateUserPassword = (e) => {
    e.preventDefault();
    const pass1 = password1;
    const pass2 = password2;
    const UpdatePassapi = "http://localhost:5000/api/auth/changepw";
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("user_token"),
      },
    };
    const body = JSON.stringify({ newpass: pass2 });
    if (pass1 === pass2) {
      axios
        .put(UpdatePassapi, body, config)
        .then((res) => {
          if (res.status == 200) {
            setPassword1("");
            setPassword2("");
            setOpen(true);
          }
        })
        .catch((err) => {
          setErropen(true);
          console.log("Password Not Changed");
        });
    } else {
      alert("passwords are not matching");
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const closemsg = () => {
    setOpen(false);
  };
  const closemsgerror = () => {
    setErropen(false);
  };

  const getupdatedval = (e) => {
    const updatedname = e.target.value;
    setNewusername(updatedname);
  };
  let fd = new FormData();
  const uploaduserpic = () => {
    document.getElementById("blogimg").click();
  };
  const FileSelectHandler = (event) => {
    if (event.target && event.target.files[0]) {
      console.log("pic selected");
      console.log(event.target.files[0]);
      fd.append("image", event.target.files[0]);
    }
    // setHidecambtn(false)
    // setHideuploadbtn(true)
  };
  const uploadpic = () => {
    const userdpapi = "http://localhost:5000/api/auth/changedp";
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "auth-token": localStorage.getItem("user_token"),
      },
    };
    axios
      .put(userdpapi, fd, config)
      .then((res) => {
        console.log(res.data);
        userinfofetch();
      })
      .catch((err) => {
        console.log(err.data);
      });
  };
  return (
    <div className="dashmain">
      <div className="dashback_logout">
        <div style={{ display: "flex" }}>
          <ArrowBackIcon style={{ color: "#808080" }} />
          <Link
            to="/authhome"
            style={{ textDecorationLine: "none", color: "GrayText" }}
          >
            <h>Go back</h>
          </Link>
        </div>
        <h style={{ fontWeight: "bold", cursor: "pointer" }} onClick={logout}>
          Logout
        </h>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "40px" }}
      >
        <h1>Profile Settings</h1>
      </div>

      <div className="profile">
        <div className="pic_username">
          <div className="profile_pic">
            {userinfo ? (
              <>
                <img
                  src={`data:image/jpeg;base64,${userinfo.profilepic}`}
                  style={{ width: "100px", height: "100px" }}
                />
              </>
            ) : (
              <>
                <img src={pic} style={{ width: "100px", height: "100px" }} />
              </>
            )}
            {/* {hidecambtn?<> */}
            <button
              type="button"
              onClick={uploaduserpic}
              style={{ backgroundColor: "white", border: "none" }}
            >
              <CameraAltIcon style={{ color: "grey", cursor: "pointer" }} />
            </button>
            {/* </>:<></>} */}
            <input
              id="blogimg"
              type="file"
              style={{ display: "none" }}
              onChange={FileSelectHandler}
            />
            {/* {hideuploadbtn?<> */}
            <UploadIcon
              onClick={uploadpic}
              style={{ color: "grey", cursor: "pointer" }}
            />
            {/* <button  style={{marginBottom:'40px'}}>upload</button> */}
            {/* </>:<></>} */}
          </div>
          <div className="profile_username">
            <div>
              <h>Username</h>
            </div>
            <div style={{ display: "flex" }}>
              {userinfo ? (
                <>
                  <TextField
                    id="standard-read-only-input"
                    label=""
                    defaultValue={userinfo.username}
                    InputProps={{
                      readOnly: edit,
                    }}
                    variant="standard"
                    onChange={getupdatedval}
                  />
                </>
              ) : (
                <></>
              )}

              <EditIcon
                style={{ color: "grey", cursor: "pointer" }}
                onClick={makeedit}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {edit ? (
                <></>
              ) : (
                <>
                  <button
                    style={{
                      backgroundColor: "#3CB371",
                      borderRadius: "30px",
                      color: "white",
                      border: "none",
                      marginTop: "20px",
                      width: "60px",
                      height: "30px",
                      cursor: "pointer",
                    }}
                    onClick={changeusername}
                  >
                    Save
                  </button>
                </>
              )}
              {namesave ? (
                <>
                  <CircularProgress
                    style={{
                      height: "30px",
                      width: "30px",
                      marginTop: "30px",
                      color: "green",
                    }}
                  />
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <form onSubmit={UpdateUserPassword}>
          <div className="change_password">
            <h style={{ marginTop: "10px" }}>Change Password</h>
            <TextField
              id="standard-search"
              label="New Password"
              type="search"
              onChange={(e) => setPassword1(e.target.value)}
              variant="standard"
              value={password1}
              style={{ marginTop: "15px" }}
            />
            <TextField
              id="standard-search"
              label="Confirm Password"
              type="password"
              onChange={(e) => setPassword2(e.target.value)}
              variant="standard"
              value={password2}
              style={{ marginTop: "15px" }}
            />
            <button
              style={{
                backgroundColor: "#3CB371",
                color: "white",
                border: "none",
                marginTop: "20px",
                width: "60px",
                height: "30px",
                cursor: "pointer",
              }}
              type="submit"
            >
              Done
            </button>
          </div>
          {open ? (
            <>
              <Alert
                onClose={() => {
                  closemsg();
                }}
                style={{ marginTop: "10px" }}
              >
                Password Updated!
              </Alert>
            </>
          ) : (
            <></>
          )}
          {erropen ? (
            <>
              <Alert
                onClose={() => {
                  closemsgerror();
                }}
                style={{ marginTop: "10px" }}
                severity="error"
              >
                Password Not Updated!
              </Alert>
            </>
          ) : (
            <></>
          )}
        </form>
      </div>

      <div className="user_posts_head">
        <h1>Posts</h1>
        {userblogpost[0] ? (
          <>
            <div className="user_posts">
              {userblogpost.map((obj) => (
                <div className="user_post">
                  <div className="post_head">
                    <h>{obj.title}</h>
                  </div>
                  <div className="post_content">
                    <span style={{ color: "#808080" }}>jan 8 at 8:10 pm</span>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {/* <FavoriteBorderOutlinedIcon style={{color:'#808080'}}/><span>100</span> */}
                    </div>
                    {/* <CommentIcon style={{cursor:'pointer',color:'#808080'}}/> */}

                    <DeleteIcon
                      style={{ color: "#808080", cursor: "pointer" }}
                      onClick={(e) => deletepost(obj._id)}
                    />
                    <Link to={`/updatepost/${obj._id}`}>
                      <EditIcon
                        style={{ color: "#808080", cursor: "pointer" }}
                      />
                    </Link>
                  </div>
                  <div className="post_view">
                    <h
                      style={{
                        marginLeft: "40px",
                        fontSize: "40px",
                        color: "grey",
                      }}
                    >
                      2
                    </h>
                    <h style={{ color: "grey" }}>TOTAL VIEWS</h>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress style={{ color: "grey" }} />
            </div>
          </>
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "50px",
          textAlign: "center",
        }}
      >
        <hr style={{ width: "99%" }}></hr>
        <p>© 2022 All rights reserved.</p>
      </div>
    </div>
  );
}

export default Dashboard;
