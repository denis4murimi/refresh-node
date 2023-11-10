// get all published courses
// sort them by name in ascending order
// get only name and author
// display

const mongoose = require('mongoose');

// connect to db
mongoose.connect('mongodb://127.0.0.1:27017/mongo-exercises')
    .then(() => console.log('Connected to db..'))
    .catch(err => console.error('Could not connect to db', err));

// define schema
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: Number
});

// define model 
const Course = mongoose.model('course', courseSchema);

async function getCourses() {
    const courses = await Course
    .find({isPublished: true})
    .sort({name: 1})
    .select({name: 1, author: 1});
    console.log(courses);
}

getCourses()
