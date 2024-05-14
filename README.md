# Student Management System
This is a simple backend application built with Node.js and Express.js for managing student records.

## Features
 ### Admin Login: Admin can log in with username and password.
 ### Student Registration: Students can register with a username, password, and enrollment year.
 ### Student Login: Students can log in with their registered username and password.
 ### View All Students: Admin can view a list of all registered students.
 ### Delete Student: Admin can delete a student from the database.
 ### Add Stream: Admin can add a stream/field for a specific student.
 ### Remove Stream: Admin can remove a stream/field for a specific student.


## API Endpoints
 ### POST /admin/login: Login as an admin.
 ### POST /student/register: Register a new student.
 ### POST /student/login: Login as a student.
 ### GET /allstudents/list: Get a list of all students.
 ### DELETE /student/:studentId: Delete a student by ID.
 ### POST /addstream: Add a stream/field for a student.
 ### PATCH /removestream: Remove a stream/field for a student.
