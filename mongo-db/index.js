const mongoose = require('mongoose');

// connect mongoose to db
// connection string should come from an environment variable for 
// security.
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log('Connected to db...'))
    .catch(err => console.error('Could not connect to db', err));

// Prepare a couse schema
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

// prepare course model / class
const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const courseObject = new Course({
        name: 'Angular',
        author: 'Mosh Hamedani',
        tags: ['angular', 'frontend'],
        isPublished: true
    });

    const result = await courseObject.save();
    console.log(result);
}

createCourse();