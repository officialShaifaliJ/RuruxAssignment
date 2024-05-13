const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    username: String,
    password: String,
    enrollmentYear: Number,
    field: String,
});

module.exports = mongoose.model('Student', studentSchema);
