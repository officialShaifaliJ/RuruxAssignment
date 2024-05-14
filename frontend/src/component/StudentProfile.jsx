import { Box, Container, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function StudentProfile({ studentId }) {
  const baseUrl = process.env.url || 'http://localhost:8080';
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    const fetchStudentProfile = async () => {
      try {
        const res = await axios.get(`${baseUrl}/profile/${studentId}`);
        setStudentData(res.data);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchStudentProfile();
  }, [baseUrl, studentId]);

  if (!studentData) {
    return <div>Loading...</div>; 
  }

  return (
    <Box>
      <Container>
        <Text>Name: {studentData.name}</Text>
        <Text>Enrollment Year: {studentData.enrollmentYear}</Text>
        <Text color='blue'>
          Field: {studentData.field.map((field, index) => (
            <span key={index}>{index !== 0 && ', '}{field}</span>
          ))}
        </Text>
        <Text color='blue'>
          Marks: {studentData.marks.map((mark, index) => (
            <Text key={index}>{mark.subject + ': ' + mark.marksobtained}</Text>
          ))}
        </Text>
      </Container>
    </Box>
  );
}

export default StudentProfile;
