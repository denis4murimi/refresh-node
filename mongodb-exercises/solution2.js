// get all published html, python and finance
// sort by price in descending order
// pick only name and author
// display them

const mongoose = require('mongoose');

// connect to db
mongoose.connect('mongodb://127.0.0.1:27017/mongo-exercises')
    .then(() => console.log('Connected to db..'))
    .catch(err => console.error('Could not connect to db', err));

// define schema
const schema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: Number
});

// define model
const Course = mongoose.model('course', schema);


// get data
async function getCourses() {
    return await Course
    .find({isPublished: true})
    .or([{tags: 'HTML'}, {tags: 'Python'}, {tags: 'Finance'}])
    .sort('price')
    //.select('name tag price author')
}

// display data
async function display() {
    const courses = await getCourses();
    console.log(courses);
}

display()