import React, { useEffect, useState } from "react";
import { Button, Heading, Input } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminPage from "./AdminPage";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const response = axios.post("http://localhost:8080/admin/login", {
  //   username,
  //   password,
  // });

  // useEffect(() => {
  //   console.log(response);
  // }, [response]);

  return (
    <>
      <Heading size="md" my="2pc">
        Login As Admin
      </Heading>
      <Input
        my="1pc"
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <Input
        my="1pc"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button
        onClick={async () => {
          try {
            const res = await axios.post("http://localhost:8080/admin/login", {
              username,
              password,
            });
            console.log(res.data);
            navigate("/adminpage");
          } catch (error) {
            console.log("Error:", error);
          }
        }}
      >
        {" "}
        Submit{" "}
      </Button>
    </>
  );
}

export default AdminLogin;
