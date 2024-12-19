import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [courses, setcourses] = useState([]);
  const [books, setBooks] = useState([]);
  const [courseName, setcourseName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [courseTitle, setcourseTitle] = useState("");
  const [coursePrice, setcoursePrice] = useState("");
  const [courseid, setcourseid] = useState("");
  const [courseDescription, setcourseDescription] = useState("");
  const [courseCategory, setcourseCategory] = useState("");
  const [courseImage, setcourseImage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("admin")) {
      navigate("/admin/login");
      return;
    }

    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:3047/admin/users");
        setUsers(res.data);
      } catch (err) {
        toast.error("Error fetching users");
      }
    };

     const fetchcourses = async () => {
       try {
       const response = await axios.get("http://localhost:3047/book");
        // setcourses(res.data);
        if (response.data && response.data.books && response.data.courses) {
          setBooks(response.data.books);  // Set the books array
          setcourses(response.data.courses);  // Set the courses array
        } else {
          toast.error("Data format is incorrect.");
        }
       } catch (err) {
        toast.error("Error fetching courses");
      }
     };
    

    setIsLoading(false);

    fetchUsers();
    fetchcourses();
  }, [navigate]);

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3047/admin/users/${userId}`);
      toast.success("User deleted successfully");
      setUsers(users.filter((user) => user.id !== userId));
    } catch (err) {
      toast.error("Error deleting user");
    }
  };

  // const handleDeletecourse = async (courseId) => {
  //   try {
  //     await axios.delete(`http://localhost:3047/admin/courses/${courseId}`);
  //     toast.success("course deleted successfully");
  //     setcourses(courses.filter((course) => course.id !== courseId)); 
  //   } catch (err) {
  //     toast.error("Error deleting course");
  //   }
  // };
  // const handleDeletecourse = async (courseId) => {
  //   try {
  //     // Delete the course from the server
  //     await axios.delete(`http://localhost:3047/book/${courseId}`);
  //     toast.success("course deleted successfully");
  
  //     // Update the local state by removing the course from the current list
  //     setcourses(courses.filter((course) => course.id !== courseId));
  
  //     // Optionally, fetch the latest list of courses from the server to ensure consistency
  //     const res = await axios.get("http://localhost:3047/book");
  //     setcourses(res.data);
  //   } catch (err) {
  //     toast.error("Error deleting course");
  //   }
  // };
  const handleDelete = async (id, type) => {
    try {
      // Construct the appropriate endpoint based on the type
      let endpoint = "";
      if (type === "course") {
        endpoint = `http://localhost:3047/book/${id}`;
      } else if (type === "book") {
        endpoint = `http://localhost:3047/book/${id}`;
      }

      // Perform the delete request
      await axios.delete(endpoint);
      toast.success(`${type.charAt(0).toUpperCase() + type.slice(1)} deleted successfully`);

      // Update the state by filtering out the deleted item
      if (type === "course") {
        setCourses(courses.filter((course) => course.id !== id));
      } else if (type === "book") {
        setBooks(books.filter((book) => book.id !== id));
      }
    } catch (err) {
      toast.error(`Error deleting ${type}`);
    }
  };
  

  // const handleAddcourse = async () => {
  //   if (
  //     !courseName.trim() ||
  //     !courseTitle.trim() ||
  //     !coursePrice ||
  //     !courseDescription.trim() ||
  //     !courseCategory.trim()
  //   ) {
  //     toast.error("All fields are required");
  //     return;
  //   }

  //   setIsLoading(true);

  //   try {
  //     const newcourseData = {
  //       id: courseid,
  //       title: courseTitle.trim(),
  //       price: coursePrice,
  //       name: courseName.trim(),
  //       description: courseDescription.trim(),
  //       category: courseCategory.trim(),
  //       image: courseImage,
  //     };

  //     const res = await axios.post(
  //       "http://localhost:3047/admin/courses",
  //       newcourseData
  //     );

  //     if (res.status === 201) {
  //       toast.success("course added successfully");
  //       // setcourses([...courses, res.data]);
  //       setcourses((prevcourses) => [...prevcourses, res.data]);
  //       setcourseid(""); // Add the new course to the UI
  //       setcourseName(""); 
  //       setcourseTitle(""); 
  //       setcoursePrice(""); 
  //       setcourseDescription(""); 
  //       setcourseCategory(""); 
  //       setcourseImage(""); 
  //     }
  //   } catch (err) {
  //     console.error("Error adding course:", err);
  //     toast.error("Error adding course");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  const handleAddcourse = async () => {
    if (
      !courseName.trim() ||
      !courseTitle.trim() ||
      !coursePrice ||
      !courseDescription.trim() ||
      !courseCategory.trim()
    ) {
      toast.error("All fields are required");
      return;
    }
  
    setIsLoading(true);
  
    try {
      const newcourseData = {
        id: courseid,
        title: courseTitle.trim(),
        price: coursePrice,
        name: courseName.trim(),
        description: courseDescription.trim(),
        category: courseCategory.trim(),
        image: courseImage,
      };
  
      const res = await axios.post(
        "http://localhost:3047/book",
        newcourseData
      );
  
      if (res.status === 201) {
        toast.success("course added successfully");
  
        // Now, fetch the updated list of courses and update the local state
        const updatedcoursesRes = await axios.get("http://localhost:3047/book"); // Same endpoint used in course.jsx to fetch courses/courses
        setcourses(updatedcoursesRes.data);  // Update state with new data
  
        // Reset the form after adding the course
        setcourseid(""); 
        setcourseName(""); 
        setcourseTitle(""); 
        setcoursePrice(""); 
        setcourseDescription(""); 
        setcourseCategory(""); 
        setcourseImage(""); 
      }
    } catch (err) {
      console.error("Error adding course:", err);
      toast.error("Error adding course");
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>
      
      {/* Add New course Form */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Add New course</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter course title"
            value={courseTitle}
            onChange={(e) => setcourseTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="number"
            placeholder="Enter course price"
            value={coursePrice}
            onChange={(e) => setcoursePrice(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Enter course name"
            value={courseName}
            onChange={(e) => setcourseName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <textarea
            placeholder="Enter course description"
            value={courseDescription}
            onChange={(e) => setcourseDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Enter course category"
            value={courseCategory}
            onChange={(e) => setcourseCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Enter course image URL (optional)"
            value={courseImage}
            onChange={(e) => setcourseImage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="number"
            placeholder="Enter course id"
            value={courseid}
            onChange={(e) => setcourseid(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={handleAddcourse}
            disabled={isLoading}
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
          >
            {isLoading ? "Adding..." : "Add course"}
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Users</h2>
        <table className="w-full border-collapse bg-white shadow-md rounded-md overflow-hidden">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border-b">ID</th>
              <th className="px-4 py-2 border-b">Email</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b">{user.id}</td>
                <td className="px-4 py-2 border-b">{user.email}</td>
                <td className="px-4 py-2 border-b">
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* courses Table */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">courses</h2>
        <table className="w-full border-collapse bg-white shadow-md rounded-md overflow-hidden">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border-b">ID</th>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Title</th>
              <th className="px-4 py-2 border-b">Price</th>
              <th className="px-4 py-2 border-b">Category</th>
              <th className="px-4 py-2 border-b">Image</th>
              <th className="px-4 py-2 border-b">Description</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
          {Array.isArray(courses) && courses.length > 0 ? (
          
          
            courses.map((course) => (
              <tr key={course.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b">{course.id}</td>
                <td className="px-4 py-2 border-b">{course.name}</td>
                <td className="px-4 py-2 border-b">{course.title}</td>
                <td className="px-4 py-2 border-b">${course.price}</td>
                <td className="px-4 py-2 border-b">{course.category}</td>
                <td className="px-4 py-2 border-b">
                  <img src={course.image} alt={course.name} className="w-16 h-16 object-cover rounded-md" />
                </td>
                <td className="px-4 py-2 border-b">{course.description}</td>
                <td className="px-4 py-2 border-b">
                  <button
                    onClick={() => handleDelete(course.id,"course")}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
              
            ))
            
           
          )
          : (
            console.log(courses)
            // <tr>
            //   <td colSpan="8" className="text-center py-4">
            //     No books available
            //   </td>
            // </tr>
                
          )}
          </tbody>
        </table>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Books</h2>
        <table className="w-full border-collapse bg-white shadow-md rounded-md overflow-hidden">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border-b">ID</th>
              <th className="px-4 py-2 border-b">Title</th>
              <th className="px-4 py-2 border-b">Author</th>
              <th className="px-4 py-2 border-b">Category</th>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Price</th>
              <th className="px-4 py-2 border-b">Image</th>
              <td className="px-4 py-2 border-b">Description</td>
              <th className="px-4 py-2 border-b">Actions</th>

            </tr>
          </thead>
          <tbody>
            {Array.isArray(books) && books.length > 0 ? (
              books.map((book) => (
                <tr key={book.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-b">{book.id}</td>
                  <td className="px-4 py-2 border-b">{book.title}</td>
                  <td className="px-4 py-2 border-b">{book.author}</td>
                  <td className="px-4 py-2 border-b">{book.category}</td>
                  <td className="px-4 py-2 border-b">{book.name}</td>
                  <td className="px-4 py-2 border-b">{book.price}</td>
                  <td className="px-4 py-2 border-b">
                  <img src={book.image} alt={book.name} className="w-16 h-16 object-cover rounded-md" />
                </td>
                <td className="px-4 py-2 border-b">{book.description}</td>
                  <td className="px-4 py-2 border-b">
                    <button
                      onClick={() => handleDelete(book.id,"book")} // Adjust for books delete function if needed
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No books available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
