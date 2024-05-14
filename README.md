# Student Management System
### This is a simple backend application built with Node.js and Express.js for managing student records.

# Features
### 1 Admin Login: Admin can log in with username and password.
### 2.Student Registration: Students can register with a username, password, and enrollment year.
### 3.Student Login: Students can log in with their registered username and password.
### 4.View All Students: Admin can view a list of all registered students.
### 5.Delete Student: Admin can delete a student from the database.
### 6.Add Stream: Admin can add a stream/field for a specific student.
### 7.Remove Stream: Admin can remove a stream/field for a specific student.


## API Endpoints
### 1 POST /admin/login: Login as an admin.
### 2 POST /student/register: Register a new student.
### 3 POST /student/login: Login as a student.
### 4 GET /allstudents/list: Get a list of all students.
### 5 DELETE /student/:studentId: Delete a student by ID.
### 6 POST /addstream: Add a stream/field for a student.
### 7 PATCH /removestream: Remove a stream/field for a student.
