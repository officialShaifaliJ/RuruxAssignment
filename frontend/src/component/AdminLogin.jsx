import React, { useState } from "react";
import { Input } from "@chakra-ui/react";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div>AdminLogin</div>
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
    </>
  );
}

export default AdminLogin;
