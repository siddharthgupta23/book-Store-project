import React from "react";
import Home from "./components/Home/home";
import Courses from "./Courses/Courses"
import { Navigate, Route,Routes} from "react-router-dom"
import "./index.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Contact from "./components/Contact/Contact";
import BuyNow from "./components/BuyNow";
import Card from "./components/Card";
import About from "./components/About/About";
import {Toaster} from "react-hot-toast"
import { useAuth } from "./context/AuthProvider";
import AdminLogin from "./components/adminLogin";
import AdminDashboard from "./components/adminDashboard";
import OrderConfirmationPage from "./components/OrderConfirmationPage";
const Hello_World = () => {
  const [authUser,setAuthUser]=useAuth()
 console.log(authUser)
  return (
    <>
      {/* <Home />
      <Course/> */}
      <div  className="dark:bg-slate-900 dark:text-white">

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/card" element={<Card />} />
      
        <Route path="/buy-now" element={<BuyNow/>}/>
        <Route path="/OrderConfirmationPage" element={<OrderConfirmationPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
      <Toaster/>
      </div>
    </>
  );
};
export default Hello_World;
