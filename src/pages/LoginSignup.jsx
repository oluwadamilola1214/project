
import React,{ useState } from 'react'
import "./login.css"
// import"../main"
import { TextField} from '@mui/material';


const LoginSignup = () => {
const [openSignup, setOpenSignup] = useState(false)

const changeState = () => {
  setOpenSignup(!openSignup);
};

return (
<div className='LoginSignup'>
<div className="left"></div>
<div className="right">
{
  openSignup&&(
<div className="box">
  <h1 style ={{frontSize:"20px",}}>Welcome Back{" "}</h1>
  <TextField id="outlined-basic" label="username" variant="outlined" />
  <TextField id="outlined-basic" label="password" variant="outlined" />
  <button className="loginBtn">Login</button>
  <small> Dont have an account?<span className="link" onClick={changeState}>register</span></small>
</div>
)}
{
  !openSignup &&(
    <div className="box">
      <h1 className='heading'>welcome to anything</h1>
      <TextField id="outlined-basic" label="fullname" variant="outlined" />
      <TextField id="outlined-basic" label="phone number" variant="outlined" />
      <TextField id="outlined-basic" label="email" variant="outlined" />
      <TextField id="outlined-basic" label="password" variant="outlined" />
      <TextField id="outlined-basic" label="confirm password" variant="outlined" />
      
      <button className="loginBtn">Submit Here</button>
      <small>Already have an account? <span className='link' onClick={changeState}>Login</span></small>
      </div>
)};
</div>
</div>

)
  }





export default LoginSignup;
