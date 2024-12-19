

import React from "react";

const About = () => {
  return (
    <div className="about p-16 max-w-4xl mx-auto text-gray-800">
        
      <h1 className="text-3xl font-bold mb-2 text-center dark:bg-slate-900 dark:text-white ">About Our Bookstore</h1>
      <p className="mb-6 text-lg text-center bg-white">
        Welcome to our online bookstore! We’re passionate about connecting readers with the books they love. Our platform is designed
        to make buying books as easy, secure, and affordable as possible, with a wide range of features tailored for book lovers.
      </p>
      
      <h2 className="text-2xl font-semibold mb-4  dark:bg-slate-900 dark:text-white">Features</h2>
      <ul className="space-y-4 mb-8">
        <li className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <strong className="text-blue-600">Wide Collection:</strong> We offer a diverse collection of genres and categories, from bestselling fiction and 
          timeless classics to academic books and niche genres. Whether you’re a casual reader or an avid collector, there’s 
          something for everyone.
        </li>
        <li className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <strong className="text-blue-600">Discounts & Deals:</strong> Enjoy special discounts, seasonal offers, and member-exclusive deals to make your 
          favorite books more affordable. Our discounts are updated regularly, so check back often!
        </li>
        <li className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <strong className="text-blue-600">Secure Checkout:</strong> We prioritize your security and privacy with a streamlined, secure checkout process. 
          Purchase books with confidence, knowing your transactions are safe.
        </li>
        <li className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <strong className="text-blue-600">Personalized Recommendations:</strong> Discover personalized book recommendations based on your reading interests. 
          Our system helps you explore new books and authors that align with your tastes.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4  dark:bg-slate-900 dark:text-white">Why Choose Us?</h2>
      <p className="text-lg bg-white">
        Our mission is to make reading accessible and affordable for everyone. With a user-friendly platform and commitment to
        customer satisfaction, we’re here to help you find the books you’ll love at prices that fit your budget. Thank you for 
        choosing our bookstore for all your reading needs!
      </p>
    </div>
  );
};

export default About;
