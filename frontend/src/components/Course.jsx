// // // import React from "react";
// // // import List from "../../public/list.json";
// // // import Card from "./Card";
// // // import{Link} from "react-router-dom";

// // // function Course() {
// // //   console.log(List);
// // //   return (
// // //     <>
// // //       <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 top:0 left:0 z-60 overflow-auto">
// // //         <div className="mt-28 book-center justify-center text-center">
// // //           <h1 className="text-2xl font-semibold md:text-4xl">
// // //             We are Delighted to have you
// // //             <span className="text-pink-300"> Here :)</span>
// // //           </h1>
// // //           <p className="mt-12">
// // //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
// // //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
// // //             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
// // //             aliquip ex ea commodo consequat. Duis aute irure dolor in
// // //             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
// // //             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
// // //             culpa qui officia deserunt mollit anim id est laborum.
// // //           </p>
// // //           <Link to="/">

// // //           <button className="mt-6 bg-pink-800 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
// // //             Back
// // //           </button>
// // //           </Link>
// // //         </div>
// // //         <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
// // //           {List.map((book) => (
// // //             <Card key={book.id} book={book} />
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // }

// // // export default Course;
// // import React, { useEffect, useState } from "react";
// // import { useLocation, useNavigate } from "react-router-dom";
// // import Card from "./Card";
// // import axios from "axios";

// // function Course() {
// //   const [book, setBook] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   useEffect(() => {
// //     const getBook = async () => {
// //       setLoading(true);
// //       try {
// //         const res = await axios.get("http://localhost:3047/book");
// //         console.log(res.data);
// //         setBook(res.data);
// //       } catch (error) {
// //         console.log(error);
// //       }
// //       finally{
// //         setLoading(false);
// //       }
// //     };
// //     getBook();
// //   }, []);
// //   const location = useLocation();
// //   const navigate = useNavigate();

// //   // Extract the filtered books passed through state or display all by default
// //   const filteredBooks =
// //     location.state && location.state.filteredBooks
// //       ? location.state.filteredBooks
// //       : book;
// //   // : [
// //   //   {
// //   //     "id":"1",
// //   //     "name":"Comics",
// //   //     "title":"jhyfrtgdcc cyt5rt5 hgtf",
// //   //     "price":0,
// //   //     "category":"Free",
// //   //     "image":"book_image(2).jpg"

// //   // },
// //   // {
// //   //     "id":"2",
// //   //     "name":"Comics",
// //   //     "title":"jhyfrtgdcc cyt5rt5 hgtft5 htfttt tuyftv",
// //   //     "price":0,
// //   //     "category":"Free",
// //   //     "image":"book_image(2).jpg"

// //   // },
// //   // {
// //   //     "id":"3",
// //   //     "name":"Comics",
// //   //     "title":"jhyfrtgdcc cyt5rt5 hgtft5 htfttt tuyftv",
// //   //     "price":0,
// //   //     "category":"Free",
// //   //     "image":"book_image(2).jpg"

// //   // },
// //   // {
// //   //     "id":"4",
// //   //     "name":"Comics",
// //   //     "title":"jhyfrtgdcc cyt5rt5 hgtft5 htfttt tuyftv",
// //   //     "price":0,
// //   //     "category":"Free",
// //   //     "image":"book_image(2).jpg"

// //   // },
// //   // {
// //   //     "id":"5",
// //   //     "name":"Comics",
// //   //     "title":"jhyfrtgdcc cyt5rt5 hgtft5 htfttt tuyftv",
// //   //     "price":0,
// //   //     "category":"Free",
// //   //     "image":"book_image(2).jpg"

// //   // },

// //   //     {
// //   //         "id":"6",
// //   //         "name":"Sports Book",
// //   //         "title":"jhyfrtgdcc cyt5rt5 hgtft5 htfttt tuyftv",
// //   //         "price":20,
// //   //         "category":"Sports",
// //   //         "image":"book_image(2).jpg"

// //   //     }
// //   // ,

// //   //     {
// //   //         "id":"7",
// //   //         "name":"Filmy Books",
// //   //         "title":"jhyfrtgdcc cyt5rt5 hgtft5 htfttt tuyftv",
// //   //         "price":40,
// //   //         "category":"Entertainment",
// //   //         "image":"book_image(2).jpg"

// //   //     }
// //   // ,

// //   //     {
// //   //         "id":"8",
// //   //         "name":"Comedy Books",
// //   //         "title":"jhyfrtgdcc cyt5rt5 hgtft5 htfttt tuyftv",
// //   //         "price":80,
// //   //         "category":"Comedy",
// //   //         "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-pPckgN0t9nxzer43ImsNr3TODGVparaUmJTfdLvwmTREsv1EcvnL1o4&s"

// //   //     }
// //   // ,

// //   //     {
// //   //         "id":"9",
// //   //         "name":"Music Books ",
// //   //         "title":"jhyfrtgdcc cyt5rt5 hgtft5 htfttt tuyftv",
// //   //         "price":200,
// //   //         "category":"Music",
// //   //         "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-pPckgN0t9nxzer43ImsNr3TODGVparaUmJTfdLvwmTREsv1EcvnL1o4&s"

// //   //     }
// //   // ,

// //   //     {
// //   //         "id":"10",
// //   //         "name":"Literature Books ",
// //   //         "title":"jhyfrtgdcc cyt5rt5 hgtft5 htfttt tuyftv",
// //   //         "price":300,
// //   //         "category":"Literature",
// //   //         "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-pPckgN0t9nxzer43ImsNr3TODGVparaUmJTfdLvwmTREsv1EcvnL1o4&s"

// //   //     }
// //   // ,

// //   //     {
// //   //         "id":"11",
// //   //         "name":"Historical Books ",
// //   //         "title":"jhyfrtgdcc cyt5rt5 hgtft5 htfttt tuyftv",
// //   //         "price":400,
// //   //         "category":"History",
// //   //         "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-pPckgN0t9nxzer43ImsNr3TODGVparaUmJTfdLvwmTREsv1EcvnL1o4&s"

// //   //     }
// //   // ,

// //   //     {
// //   //         "id":"12",
// //   //         "name":"Fiction Books ",
// //   //         "title":"jhyfrtgdcc cyt5rt5 hgtft5 htfttt tuyftv",
// //   //         "price":500,
// //   //         "category":"Fiction",
// //   //         "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-pPckgN0t9nxzer43ImsNr3TODGVparaUmJTfdLvwmTREsv1EcvnL1o4&s"

// //   //     }
// //   // ,
// //   //     {
// //   //         "id":"13",
// //   //         "name":"Music Books ",
// //   //         "title":"jhyfrtgdcc cyt5rt5 hgtft5 htfttt tuyftv",
// //   //         "price":200,
// //   //         "category":"Music",
// //   //         "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-pPckgN0t9nxzer43ImsNr3TODGVparaUmJTfdLvwmTREsv1EcvnL1o4&s"

// //   //     }
// //   // ,

// //   // {
// //   //     "id":"14",
// //   //     "name":"Computer Science Books ",
// //   //     "title":"jhyfrtgdcc cyt5rt5 hgtft5 htfttt tuyftv",
// //   //     "price":1000,
// //   //     "category":"Information Technology",
// //   //     "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-pPckgN0t9nxzer43ImsNr3TODGVparaUmJTfdLvwmTREsv1EcvnL1o4&s"

// //   // }
// //   //   ];

// //   // Navigate back to previous page or home
// //   const goBack = () => {
// //     navigate(-1); // Navigate to the previous page
// //   };

// //   return (
// //     <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10">
// //       <button
// //         onClick={goBack}
// //         className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
// //       >
// //         Go Back
// //       </button>

// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {filteredBooks.length > 0 ? (
// //           filteredBooks.map((book) => (
// //             <Card
// //               key={book.id}
// //               name={book.name}
// //               title={book.title}
// //               price={book.price}
// //               category={book.category}
// //               image={book.image}
// //               description={book.description}
// //             />
// //           ))
// //         ) : (
// //           <p>No books found matching your search criteria.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Course;
// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Card from "./Card";
// import axios from "axios";

// function Course() {
//   const [courses, setCourses] = useState([]);
//   const [book, setBooks] = useState([]);
//   const [loading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const getBook = async () => {
//       // setLoading(true); // Start loading when fetching
//       // try {
//       //   const res = await axios.get("http://localhost:3047/book"); // Same API used in AdminDashboard.jsx to fetch courses
//       //   console.log(res.data);
//       //   setBook(res.data); // Update the book state with the new data
//       // } catch (error) {
//       //   console.log(error);
//       // } finally {
//       //   setLoading(false); // Stop loading after fetching
//       // }
//       try {
//         const response = await axios.get("http://localhost:3047/book"); // Fetch combined data from backend
//         console.log(response.data); // Debug: Check the structure of the data

//         // Ensure that the response contains arrays for courses and books
//         if (
//           Array.isArray(response.data.courses) &&
//           Array.isArray(response.data.books)
//         ) {
//           setCourses(response.data.courses); // Set the courses
//           setBooks(response.data.books); // Set the books
//         } else {
//           throw new Error("Data format is incorrect.");
//         }
//         setIsLoading(false);
//       } catch (error) {
//         console.log("Error fetching data:", error);
//         toast.error("Failed to load data");
//       }
//     };
//     getBook();
//   }, []); // This effect runs only when the component mounts

//   const location = useLocation();
//   const navigate = useNavigate();

//   // Filter books if there are filteredBooks passed through state
//   const filteredBooks =
//     location.state && location.state.filteredBooks
//       ? location.state.filteredBooks
//       : book;
 

  // Navigate back to previous page or home
  
  const goBack = () => {
    navigate(-1); // Navigate to the previous page
  };

//   return (
//     <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10">
//       <button
//         onClick={goBack}
//         className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
//       >
//         Go Back
//       </button>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {loading ? (
//           <p>Loading...</p>
//         ) : filteredBooks.length > 0 ? (
//           filteredBooks.map((book) => (
//             <Card
//               key={book.id}
//               name={book.name}
//               title={book.title}
//               price={book.price}
//               category={book.category}
//               image={book.image}
//               description={book.description}
//             />
//           ))
//         ) : (
//           <p>No books found matching your search criteria.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Course;
// import { useState, useEffect } from "react";
// import axios from "axios";
// import  toast  from "react-hot-toast";
// import Card from "./Card"; // Assuming you have a Card component

// const Course = () => {
//   // Single state to hold both courses and books
//   const [data, setData] = useState({
//     courses: [],
//     books: [],
//   });
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3047/book"); // Fetch combined data from backend
//         console.log(response.data);  // Debug: Check the structure of the data

//         // Ensure that the response contains arrays for courses and books
//         if (
//           Array.isArray(response.data.courses) &&
//           Array.isArray(response.data.books)
//         ) {
//           setData({
//             courses: response.data.courses,  // Set courses
//             books: response.data.books,      // Set books
//           });
//         } else {
//           throw new Error("Data format is incorrect.");
//         }
//         setIsLoading(false);
//       } catch (error) {
//         console.log("Error fetching data:", error);
//         toast.error("Failed to load data");
//       }
//     };

//     fetchData();
//   }, []);

//   // Combine courses and books into one array
//   const filteredBooks = [...data.courses, ...data.books];


//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Courses and Books</h1>
//       {/* <div className="card-container"> */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//        {isLoading ? (
//           <p>Loading...</p>
//         ) : filteredBooks.length > 0 ? (
        
//       filteredBooks.map((book) => (
//           <Card
//             key={book.id}
//             name={book.name}
//             title={book.title}
//             price={book.price}
//             category={book.category}
//             image={book.image}
//             description={book.description}
//             type={book.type} // Optionally distinguish between book and course by type
//           />
//         ))
//       ):(
        
//                    <p>No books found matching your search criteria.</p>
          
//       )
//     }
//       </div>
//     </div>
//   );
// };

// export default Course;
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Card from "./Card"; // Assuming you have a Card component

// handleSearch function for filtering data based on search query
export const handleSearch = (query, data, setFilteredResults) => {
  // Check if data is undefined or missing
  if (!data || !data.courses || !data.books) {
    console.error('Data is undefined or missing courses/books arrays');
    return; // Early exit if data is not available
  }

  // Ensure query is a string before calling toLowerCase
  const searchQuery = (query || "").toString().toLowerCase(); // Default to empty string if query is falsy

  // Combine courses and books into one array for searching
  const combinedData = [...data.courses, ...data.books];

  // Filter the combined data based on the search query (name or title)
  const filteredData = combinedData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery) ||
      item.title.toLowerCase().includes(searchQuery)
  );

  // Set the filtered results in state
  setFilteredResults(filteredData);
};

// handleSearchIconClick function to handle the search button click
export const handleSearchIconClick = (searchQuery, data, setFilteredResults) => {
 
  if (!data || !data.courses || !data.books) {
    console.error('Data is undefined or missing courses/books arrays');
    return; // Early exit if data is not available
  }

  // Ensure query is a string before calling toLowerCase
  const query = (searchQuery || "").toString().toLowerCase(); // Default to empty string if query is falsy

  if (query.trim()) {
    const combinedData = [...data.courses, ...data.books];

    // Filter based on name or title
    const filteredData = combinedData.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.title.toLowerCase().includes(query)
    );

    setFilteredResults(filteredData);
  }
};


const CourseWithSearch = () => {
  // State initialization for courses and books data
  const [data, setData] = useState({
    courses: [],
    books: [],
  });
  const [filteredResults, setFilteredResults] = useState([]); // For storing search results
  const [searchQuery, setSearchQuery] = useState(""); // For storing the search query
  const [isLoading, setIsLoading] = useState(true); // Loading state

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3047/book"); // Fetch data from backend
        console.log(response.data); // Debug: Check the structure of the response

        // Ensure the response contains courses and books as arrays
        if (
          response.data &&
          Array.isArray(response.data.courses) &&
          Array.isArray(response.data.books)
        ) {
          setData({
            courses: response.data.courses,
            books: response.data.books,
          });

          // Combine courses and books into a single array and set the initial filtered results
          setFilteredResults([
            ...response.data.courses,
            ...response.data.books,
          ]);
        } else {
          throw new Error("API response is not in the expected format.");
        }

        setIsLoading(false); // Data loaded successfully
      } catch (error) {
        console.log("Error fetching data:", error);
        toast.error("Failed to load data");
        setIsLoading(false); // Stop loading
      }
    };

    fetchData(); // Call fetchData when the component mounts
  }, []); // Empty dependency array means it runs only once after the initial render

  // Handle search query change (input field)
  const onSearchChange = (event) => {
    setSearchQuery(event.target.value); // Update the search query

    // Only call handleSearch if data is available
    if (data && data.courses && data.books) {
      handleSearch(event.target.value, data, setFilteredResults); // Filter results based on the query
    } else {
      console.error("Data is not available yet");
    }
  };

  // Handle search icon click
  // const handleSearchIconClick = () => {
  //   // Trigger search if there is any query entered
  //   if (searchQuery.trim()) {
  //     if (data && data.courses && data.books) {
  //       handleSearch(searchQuery, data, setFilteredResults); // Use the same handleSearch function
  //     } else {
  //       console.error("Data is not available yet");
  //     }
  //   }
  // };

  // If data is still loading, show loading state
  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-semibold my-6 text-center">Courses and Books</h1>

      {/* Search bar */}
      <div className="flex justify-center items-center space-x-2 mb-6">
        <input
          type="text"
          placeholder="Search courses and books"
          value={searchQuery}
          onChange={onSearchChange} // Handle input change
          className="w-72 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* <button
          onClick={handleSearchIconClick} // Trigger search on icon click
          className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          {/* Font Awesome Search Icon */}
          {/* <i className="fas fa-search text-white"></i>
        </button> */} 
      </div>

      {/* Display filtered results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResults.length > 0 ? (
          filteredResults.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              title={item.title}
              price={item.price}
              category={item.category}
              image={item.image}
              description={item.description}
              type={item.type} // Optionally distinguish between book and course by type
            />
          ))
        ) : (
          <p className="text-center text-xl">No books or courses found matching your search criteria.</p>
        )}
      </div>
    </div>
  );
};

export default CourseWithSearch;