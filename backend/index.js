const express = require("express");
const cors = require('cors');
const { connection } = require("./db");
const routes = require("./route");
const app = express();

app.use(cors()); 
app.use(express.json());
app.use('/ruruxapi', routes);

app.post('/admin/login', async (req, res) => {
  const { username, password } = req.body;
  try{
    if (username === 'admin' && password === 'admin123') {
        res.send({ message: 'Admin login successfull' });
    } else {
        res.status(400).send({ message: 'Invalid credentials' });
    }
  }
  catch(error){
    res.status(400).send({"message from post request":error});
  }
});

app.get("/students", async (req, res) => {
try {
  const students = await StudentModel.find();
  res.send(students);
} catch (err) {
  res.status(500).send({ message: err.message });
}
});

app.post("/students", async (req, res) => {
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

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  try {
    // await mongoose.connect("mongodb://127.0.0.1:27017/");
    await connection;
    console.log("connected to mongo <================================================");
  } catch (err) {
    console.log(err);
    console.log("Not able to connect port");
  }
});
