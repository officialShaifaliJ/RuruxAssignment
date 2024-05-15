import { Button, Input } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react'

function RegisterStudent() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [enrollmentYear,setenrollmentYear] = useState("")
  const baseUrl = 'https://ruruxbackend.onrender.com/';
  // const baseUrl = process.env.url || 'http://localhost:8080';
   
    return (
      <> 
        <div>studentRegister</div>
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Input
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Input
          placeholder="enrollmentYear"
          value={enrollmentYear}
          onChange={(e) => {
            setenrollmentYear(e.target.value);
          }}
        />
        <Button  onClick={async () => {
          try {
            const res = await axios.post(`${baseUrl}/student/register`, {
              username,
              password,
              enrollmentYear
            });
            console.log(res.data,"reesponse");
            setUsername("");
            setPassword("");
            setenrollmentYear("")
          } catch (error) {
            console.log("Error:", error);
          }
        }}>Submit</Button>
      </>
    );
}

export default RegisterStudent