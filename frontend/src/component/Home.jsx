import { Container, Heading, Select } from '@chakra-ui/react';
import React, { useState } from 'react';
import AdminLogin from './AdminLogin';
import StudentLogin from './StudentLogin';
import RegisterStudent from './RegisterStudent';

function Home() {
  const [selectedOpt, setSelectedOpt] = useState("");
  return (
    <>
    <Heading my='2pc'>University Dashboard</Heading>
      <Container>
        <Select
          placeholder="Login/Signup"
          value={selectedOpt}
          onChange={(e) => {
            setSelectedOpt(e.target.value);
          }}
        >
          <option value="Admin">Admin</option>
          <option value="studentlogin">Student Login</option>
          <option value="studentregister">Resgister Student</option>
        </Select>
      </Container>
      <Container my='4pc'>
        {selectedOpt === "Admin" &&
        selectedOpt !== "studentregister" &&
        selectedOpt !== "studentlogin" ? (
          <AdminLogin />
        ) : (
          ""
        )}
        {selectedOpt === "studentlogin" ? <StudentLogin /> : ""}
        {selectedOpt === "studentregister" ? <RegisterStudent/> : ""}
      </Container>
    </>
  )
}

export default Home