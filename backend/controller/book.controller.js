import Book from "../model/book.model.js";
import Course from "../model/course.model.js";

export const getBook = async (req, res) => {
    // const { name, title, price, description, image,category,id } = req.body;


    // if (!name) {
    //   return res.status(400).json({ message: "Course name is required" });
    // } else if (!title) {
    //   return res.status(400).json({ message: "Title is required" });
    // } else if (!price) {
    //   return res.status(400).json({ message: "Price is required" });
    // } else if (isNaN(price) || parseFloat(price) <= 0) {
    //   return res.status(400).json({ message: "Price must be a valid number greater than zero" });
    // } else if (!description) {
    //   return res.status(400).json({ message: "Description is required" });
    // } else if (!image) {
    //   return res.status(400).json({ message: "Image URL is required" });
    // }
    // else if (!category) {
    //   return res.status(400).json({ message: "category is required" });
    // }
    // else if(!id)
    // {
    //   return res.status(400).json({message: " id is required"});
    // }
  
  
    // try {
    // const book = await Course.find();
    //   const newCourse = new Course({
    //     id,
    //     name,
    //     title,
    //     description,
    //     price: parseFloat(price),  
    //     image,
    //     category,
    //   });
  
    //   await newCourse.save();
    //   res.status(201).json(newCourse);
    //   res.status(200).json(book);
    // } catch (err) {
    //   console.error("Error adding course:", err);
    //   res.status(500).json({ message: "Error adding course", error: err.message });
    // }
  try {
    const book = await Course.find();
    const courses=await Book.find();
    const combinedResponse = {
        courses: courses,  // Array of courses
        books: book,      // Array of books
      };
  
      // Send the combined response back to the frontend
      res.status(200).json(combinedResponse);
   
   } catch (error) {
    console.log("Error", error);
     res.status(500).json(error);
   }
};
