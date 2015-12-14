var mongoose = require('mongoose');

// Create the MovieSchema.
var StudentSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    StudentID: {
        type: String,
        required: true
    },CourseID: {
        type: String,
        required: true
    }
});

// Export the model schema.
module.exports = StudentSchema;