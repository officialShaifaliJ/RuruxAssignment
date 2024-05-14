const mongoose = require("mongoose");

// const streamSchema = new mongoose.Schema({
//   name:string
// });

// const subjectSchema = new mongoose.Schema({
//     name : String,
//     streams : Number
// });

const studentSchema = new mongoose.Schema({
  username: String,
  password: String,
  enrollmentYear: Number,
  field: [String],
  subject: [String],
  marks: [
    {
      subject: String,
      marksobtained: Number,
      feild: String,
    },
  ],
});

const StudentModel = mongoose.model("Student", studentSchema);
module.exports = { StudentModel };
