import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function AdminPage() {
  const [students, setStudents] = useState([]);
const baseUrl = process.env.url || 'http://localhost:8080';
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/allstudents/list`
      );
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (studentId) => {
    try {
      const res = await axios.delete(
        `${baseUrl}/student/${studentId}`
      );
      console.log(res);
      fetchData();
      setStudents(response.data);
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };
  console.log(students);
  const navigate = useNavigate();
  return (
    <Container>
      <Heading m="1pc ">AdminPage</Heading>
      <Text onClick={() => navigate("/")}>back to Home</Text>
      <Box>
        {students.map((e) => {
          return (
            <Box
              key={e._id}
              border="1px dashed grey"
              m="1pc"
              align="left"
              p="0.5pc"
            >
              <Text>Name : {e.username}</Text>
              <Text>Enrollment year : {e.enrollmentYear}</Text>
              <Text>
                Field :{" "}
                {e.field.map((e) => {
                  return <Text>{e}</Text>;
                })}
              </Text>
              <Text>
                Marks:{" "}
                {e.marks.map((mark) => (
                  <Text> {mark.subject + ": " + mark.marksobtained}</Text>
                ))}
              </Text>{" "}
              {/* Display marks as a comma-separated list */}
              <Button colorScheme="red" onClick={() => handleDelete(e._id)}>
                Delete
              </Button>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
}

export default AdminPage;
