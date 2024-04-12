
import {Route,Routes} from 'react-router-dom';
import React from 'react';
import LoginSignup from './pages/LoginSignup';
import Users from './usersPage/Users';
import LoginForm from './components/LoginForm';
import Regg from './components/Regg';
import Profile from './pages/Profile';


 const App =()=>{
 
  return (
    <div>
    <Routes>
       <Route path= "/LoginSignup" element={<LoginSignup/>}/>
      <Route path ="/Users" element={<Users/>}/> 
      <Route path ="/Regg" element={<Regg/>}/>
      <Route path ="/Profile" element={<Profile/>}/>
      <Route path ="/LoginForm" element={<LoginForm/>}/>
    </Routes>
    
    </div>
  )
}

export default App
