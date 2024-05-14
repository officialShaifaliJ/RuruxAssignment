import React, { useState } from "react";
import { Button, Input } from "@chakra-ui/react";
import axios from "axios";

function StudentLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div>StudentLogin</div>
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
      <Button onClick={async () => {
          try {
            const res = await axios.post("http://localhost:8080/student/login", {
              username,
              password,
            });
            console.log(res.data,"reesponse");
            setUsername("")
            setPassword("")
          } catch (error) {
            console.log("Error:", error);
          }
        }}>Submit</Button>
    </>
  );
}

export default StudentLogin;
