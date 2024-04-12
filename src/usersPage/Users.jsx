
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

import React, { useEffect, useState } from 'react';
// import Loader from '../components/Loader.jsx';
import Dammy from '../components/Dammy';
import { Typography } from '@mui/material';


// import Styled from 'styled-components';





const Users = () => {
        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);


        const fetchData = async ()=>{
            setLoading(true);
            try{
                const response = await fetch("https://code-ville.vercel.app/users");
                const dataJson = await response.json()     
                console.log(dataJson);
                setData(dataJson)
            }catch(err){
                console.log(err);
            }
            setLoading(false)
        };
            useEffect(() =>{
                fetchData()
        }, [])


  return (
    <div>
        
        <div style={{
            width: "80vw"
        }}>
            {
                loading && <Laoder />
            }
           { data?.map((oneData) => {
                return( 
                    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant='h5' fontWeight={600}> {oneData.firstName + " " + oneData.lastName}</Typography>
         
        </AccordionSummary>
        <AccordionDetails sx={{display:"flex"}}>
          <div className=''
                style={{
                    height: '100%',
                    width: "fit-content",
                    // border:'2px solid skyblue',
                    background: 'pink',
                    borderRadius: '0 30px '
                    
                }}
          > <img src={oneData.profilePic ? oneData.profilePic : profilepic} alt='profile pic' style={{
            width: '180px',
            height: '180px',
            objectFit: 'cover',
            borderRadius: '30px',
          }} /> </div>
          <div className='' style={{backgroundColor:'skyblue', marginLeft: '12px', border: "4px double red ", paddingInline:'25px', borderRadius: '0 70px'}}>
           <Typography sx={{lineHeight: '2.9rem'}}>
            
            <b>Email:</b> {oneData.email}, <br/>
            <b>Contact:</b> {oneData.phoneNo}, <br />
           <b> Position:</b> {oneData.department},  <br />
           <b>Identification: </b>{oneData.id}, <br />
            </Typography>
           
            
          </div>
        </AccordionDetails>
      </Accordion>
                )
            })}
     
        </div>
    </div>
  )
}


export default Users;
