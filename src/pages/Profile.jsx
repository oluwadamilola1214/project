import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom"

const Profile = () => {
  const deletBtn =()=>{
console.log("clicked");
  }
   const navigate = useNavigate()
    useEffect(()=>{
        const isLoggedIn = localStorage.getItem('user');
        if( !isLoggedIn){
            navigate("/")
    }
    },[]
   );
  return (
    <div>
      <button onClick={deletBtn}>Submit</button>
      profile
    </div>
  )
}

export default Profile
