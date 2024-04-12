 import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const LoginForm = () => {

    const[firstName,setFirstName] = useState('');
    const[lastName,setLastName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[phoneNo,setPhoneNO] = useState('');
    const[department,setDepartment] = useState('');
        
    const btn = async () => {
        const url ="https://code-ville.vercel.app/users"
        const data = {

            firstName:firstName,
            lastName:lastName,
            email: email,
            password:password,
            phoneNo: phoneNo,
            department:department

        }
        try {
            const response = await axios.post(url, data)
            console.log(response);
        } catch (err) {
            console.log(err);
        }
        // console.log(FirstName,LastName,Email,Password,PhoneNo,);
      };

// useEffect(()=>
// {
// console.log(firstName);
// },[firstName])


    return (
        <div>
                   <TextField id="outlined-basic" label="FirstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} variant="outlined" />
                <TextField id="outlined-basic" label="LastName" value={lastName} onChange={(e) => setLastName(e.target.value)} variant="outlined" />
                  <TextField id="outlined-basic" label="Email" value={email} onChange={(e)=> setEmail(e.target.value)} variant="outlined" />
                 <TextField id="outlined-basic" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} variant="outlined" />
                 <TextField id="outlined-basic" label="PhoneNumber" value={phoneNo} onChange={(e) => setPhoneNO(e.target.value)} variant="outlined" />
                 <TextField id="outlined-basic" label="Department" value={department} onChange={(e) => setDepartment(e.target.value)} variant="outlined" />
              <Button onClick={btn}>Register</Button>
             
        </div>

    )
}

 export default LoginForm



