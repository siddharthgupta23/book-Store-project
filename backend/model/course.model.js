import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({


  title: {
    type: String,
    required: true,
    trim: true, 
  },
  price: {
    type: Number,
    required: true,
    min: 0, 
  },
  name: {
    type: String,
    required: true,
    trim: true, 
  },
  description: {
    type: String,
    required: true,
    trim: true, 
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: false, 
  },
  id:{
    type:Number,
    required:true,
    min:0,
  }
});


const Course = mongoose.model("Course", courseSchema);

export default Course;
