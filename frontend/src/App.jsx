import React from "react";
import Home from "./components/Home/home";
import Courses from "./Courses/Courses"
import { Route,Routes} from "react-router-dom"
import "./index.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Contact from "./components/Contact/Contact";
const Hello_World = () => {
  return (
    <>
      {/* <Home />
      <Course/> */}
      <div  className="dark:bg-slate-900 dark:text-white">

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Courses/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/Login" element={<Login />} />
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      </div>
    </>
  );
};

export default Hello_World;
