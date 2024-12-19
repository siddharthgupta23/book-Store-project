// import React from "react";
// import List from "../../public/list.json";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import Card from "./Card";
// const Freecourse = () => {
//   const filterData = List.filter((data) => data.category === "Free");
//   var settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <div className="max-w-screen-2xl container mx-auto md:px-20 px-8 ">
//         <div className="mt-5">

//         <h1 className="font-semibold text-xl pb-2">Free offered Courses</h1>
//         <p>
//           Lorem impsum dolor sit amet ,consectetur adipiscing elit.Accusantium
//           veritasis alias paraitur ad dolor repudiandae eligendi corposis nulla
//           non suscipit ,iure neque earum?
//         </p>
//         </div>

//       <div>
//         <Slider {...settings}>
//          {filterData.map((item)=>(
//             <Card item={item} key={item.id}></Card>
//          ))}
//         </Slider>
//       </div>
//       </div>
//     </>
//   );
// };

// export default Freecourse;
// import React from "react";
// // Import your JSON data
// import "slick-carousel/slick/slick.css"; // Import slick carousel CSS
// import "slick-carousel/slick/slick-theme.css"; // Import slick carousel theme
// import Slider from "react-slick"; // Import slick carousel component
// import Card from "./Card";
// import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react"; // Assuming you're using Card component to display course items

// const Freebook = () => {
//   const [course, setcourse] = useState([]);
//   useEffect(() => {
//     const getbook = async () => {
//       try {
//         const res = await axios.get("http://localhost:3047/book");
//         setcourse(res.data.filter((data) => data.category === "Free"));
//         console.log(res.data.filter((data) => data.category === "Free"));
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getbook();
//   }, []);
//   // Filter the data to only include "Free" category
//   // const filterData = course.filter((data) => data.category === "Free");

//   // Slick slider settings
//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <div className="max-w-screen-2xl container mx-auto md:px-20 px-8 ">
//         <div className="mt-5">
//           <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accusantium
//             veritatis alias pariatur ad dolor repudiandae eligendi corporis
//             nulla non suscipit, iure neque earum?
//           </p>
//         </div>

//         {/* Slick Slider Component */}
//         <div>
//           <Slider {...settings}>
//             {course.map((item) => (
//               <Card
//                 key={item.id}
//                 name={item.name}
//                 title={item.title}
//                 price={item.price}
//                 category={item.category}
//                 image={item.image}
//               />
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Freebook;
import React, { useState, useEffect } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css"; // Import slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick carousel theme
import Slider from "react-slick"; // Import slick carousel component
import Card from "./Card"; // Assuming Card component is used to display each item

const Freebook = () => {
  const [freeBooks, setFreeBooks] = useState([]);

  useEffect(() => {
    const getBooksAndCourses = async () => {
      try {
        const res = await axios.get("http://localhost:3047/book");

        // Assuming res.data contains both courses and books as arrays
        const { courses, books } = res.data;

        // Filter both the courses and books for items where category === "Free"
        const filteredCourses = courses.filter(item => item.category === "Free");
        const filteredBooks = books.filter(item => item.category === "Free");

        // Combine the filtered courses and books arrays
        const combinedData = [...filteredCourses, ...filteredBooks];

        // Set the combined filtered data to state
        setFreeBooks(combinedData);

        console.log(combinedData); // Check the filtered data
      } catch (error) {
        console.log(error);
      }
    };

    getBooksAndCourses();
  }, []);

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-8 ">
      <div className="mt-5">
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accusantium
          veritatis alias pariatur ad dolor repudiandae eligendi corporis
          nulla non suscipit, iure neque earum?
        </p>
      </div>

      {/* Slick Slider Component */}
      <div>
        <Slider {...settings}>
          {freeBooks.map((item) => (
            <Card
              key={item.id}
              name={item.name} // Assuming the object has a `name` property
              title={item.title}
              price={item.price}
              category={item.category}
              image={item.image}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Freebook;
