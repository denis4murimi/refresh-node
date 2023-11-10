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

// get course
// add filters limit, sort, select
async function getCourses() {
    const course = await Course
        .find()
        .limit(10)
        .sort({name: 1})
        .select({name: 1,tags: 1});
    console.log(course);
}

getCourses();
// createCourse();