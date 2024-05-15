import React, { useState } from "react";
import { Button, Input } from "@chakra-ui/react";
import axios from "axios";
import StudentProfile from "./StudentProfile";

function StudentLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [studentId, setStudentId] = useState("");
  const baseUrl = 'https://ruruxbackend.onrender.com/';
  // const baseUrl = process.env.url || 'http://localhost:8080';

  const handleSubmit = async () => {
    try {
      const res = await axios.post(`${baseUrl}/student/login`, {
        username,
        password,
      });
      console.log(res.data, "response");
      setStudentId(res.data.id); 
      setUsername("");
      setPassword("");
      setIsLogin(true);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      {isLogin ? (
        <StudentProfile studentId={studentId} />
      ) : (
        <>
          <div>Student Login</div>
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </>
      )}
    </>
  );
}

export default StudentLogin;
