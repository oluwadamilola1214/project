import { TextField } from '@mui/material'
import React, { useState } from 'react'
import "../App.css"
import axios from 'axios'

import {useNavigate} from 'react-router-dom'



const Regg = () => {
    const navigate = useNavigate()
    const [username, setUsername] =useState('')
    
    const [password, setPassword] =useState('')
 const handleSubmit = async () => {
    const loginUrl = ""
 
    const data  = {
        email:username,
        password:password
    }
   try{ 
    const response =await axios.post(loginUrl, data);
    console.log(response.data.data);
    localStorage.setItem("user",response.data.data.id)
    navigate("/Profile")

   }catch(err){
    console.log("please");
   }
 };
  return (
    <div>
       <div className='box'>
          <h1 
           style={{fontSize: "30px",
         }}>Welcome back {" "}
           </h1>
         <TextField id="outlined-basic" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username'   label="Username" variant="outlined"   />
        <TextField id="outlined-basic"  value={password} onChange={(e) => setPassword(e.target.value)} label="Password"  type="password"  variant="outlined" />
         <button className='loginBtn' onClick={handleSubmit} >Login</button>

</div>
    </div>
  )
        }

export default Regg