import React from "react";
import List from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
const Freebook = () => {
  const filterData = List.filter((data) => data.category === "Free");
  var settings = {
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
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-8 ">
        <div className="mt-5">

        <h1 className="font-semibold text-xl pb-2">Free offered Courses</h1>
        <p>
          Lorem impsum dolor sit amet ,consectetur adipiscing elit.Accusantium
          veritasis alias paraitur ad dolor repudiandae eligendi corposis nulla
          non suscipit ,iure neque earum?
        </p>
        </div>
      
      <div>
        <Slider {...settings}>
         {filterData.map((item)=>(
            <Card item={item} key={item.id}></Card>
         ))}
        </Slider>
      </div>
      </div>
    </>
  );
};

export default Freebook;
