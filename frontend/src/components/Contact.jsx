

import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'; 

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      
      const response = await axios.post('http://localhost:3047/contact/submit', data);

      if (response.status === 201) {
        alert('Contact form submitted successfully!');
      } else {
        alert('Failed to submit the contact form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen pt-28 flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md bg-white shadow-md rounded px-8 py-6">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

    
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            {...register("name", { required: true })}
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <p className="text-red-500 text-xs italic">Name is required.</p>}
        </div>

       
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            {...register("email", { required: true })}
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <p className="text-red-500 text-xs italic">Email is required.</p>}
        </div>

       
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            {...register("phone", { required: true })}
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.phone && <p className="text-red-500 text-xs italic">Phone number is required.</p>}
        </div>

       
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Enter your message"
            {...register("message", { required: true })}
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          {errors.message && <p className="text-red-500 text-xs italic">Message is required.</p>}
        </div>

      
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 duration-200 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;

