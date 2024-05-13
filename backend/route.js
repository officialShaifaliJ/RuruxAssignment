const express = require("express");
const routes = express.Router();
const StudentModel = require("./student");

routes.post('/admin/login', async (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'admin123') {
        res.send({ message: 'Admin login successfull' });
    } else {
        res.status(400).send({ message: 'Invalid credentials' });
    }
});

routes.get("/students", async (req, res) => {
  try {
    const students = await StudentModel.find();
    res.send(students);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

routes.post("/students", async (req, res) => {
  const student = new StudentModel({
    username: req.body.username,
    password: req.body.password,
    enrollmentYear: req.body.enrollmentYear,
    field: req.body.field,
  });

  try {
    const newStudent = await student.save();
    res.status(201).send(newStudent);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

module.exports = routes;
