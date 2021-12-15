const mongoose = require('mongoose');
const { Schema } = mongoose.Schema;

const TeacherSchema = new Schema({
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    certified: {
        type: Boolean,
        default: false,
    },
    subjects: {
        type: String,
        enum: ['English', 'Fine Arts', 'Science', 'Foreign Language', 'Math', 'Social Studies', 'Health', 'Physical Education', 'Life Skills', 'Special Education', 'Other'],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    }
})