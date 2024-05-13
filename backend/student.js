const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    username: String,
    password: String,
    enrollmentYear: Number,
    field: String,
});
const StudentModel =mongoose.model('Student', studentSchema);
module.exports = {StudentModel};
