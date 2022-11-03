import React, { useState } from 'react';
import '../styles/form.css';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import {Box} from '@mui/material';

export const Form: React.FC = () => {
const [name, setName]=useState<string>("");
const [email, setEmail]=useState<string>("");
const [mobile, setMobile]=useState<string>("");
const [message, setMessage]=useState<string>("");

let handleSubmit=(e: React.FormEvent)=>{
  e.preventDefault;
    console.log(name, email, mobile, message);
}
  return (
    <>
    <Box 
    component="form"
    className='form-wrapper'>
        <TextField
          required
          id="outlined-required"
          label="Name"
          color="secondary" 
          focused
          size='small'
          sx={{
            width:"100%",
            marginTop:"10px",
            marginBottom:"10px"
          }}
          type="text"
          value={name}
          onChange={(event=>setName(event.target.value))}
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          color="secondary" 
          focused
          size='small'
          sx={{
            width:"100%",
            marginTop:"10px",
            marginBottom:"10px",
          }}
          type="email"
          value={email}
          onChange={(event=>setEmail(event.target.value))}
        />
        <TextField
        //   required
          id="outlined-required"
          label="Mobile No."
          color="secondary" 
          focused
          size='small'
          sx={{
            width:"100%",
            marginTop:"10px",
            marginBottom:"10px",
          }}
        type="number"
        value={mobile}
        onChange={(event=>setMobile(event.target.value))}
        />
            <TextField
          required
          id="outlined-required"
          label="Message"
          color="secondary"
          focused
          multiline
          rows={4}
          size='small'
          sx={{
            width:"100%",
            marginTop:"10px",
            marginBottom:"10px",
          }}
          value={message}
          onChange={(event=>setMessage(event.target.value))}
        />
        
        <Button
         sx={{
            color: "white",
            backgroundColor: "purple",
            borderColor: "purple",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: "12px",
            "&:hover": { backgroundColor: "purple" },
         }}
         onClick={handleSubmit}
        >
            Submit
        </Button>
    </Box>
    </>
  )
}
