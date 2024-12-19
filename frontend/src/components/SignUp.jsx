// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Login from "./Login";

// function SignUp() {
//   const [isModalOpen, setModalOpen] = useState(false);

//   const openModal = () => {
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   return (
//     <div>
//       {/* Sign Up Form */}
//       <div className="border-[2px] shadow-md p-5 rounded-md">
//         <div className="w-[600px]">
//           <div className="modal-box dark:bg-slate-900 dark:text-white dark:border">
//             <form method="dialog">
//               <button
//                 type="button"
//                 onClick={closeModal}
//                 className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//               >
//                 ✕
//               </button>
//             </form>
//             <h3 className="font-bold text-lg">Sign Up</h3>
//             <div className="mt-4 space-y-2">
//               <span>Name</span>
//               <br />
//               <input
//                 type="text"
//                 placeholder="Enter your full name"
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//               />
//             </div>
//             <div className="mt-4 space-y-2">
//               <span>Email</span>
//               <br />
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//               />
//             </div>
//             <div className="mt-4 space-y-2">
//               <span>Password</span>
//               <br />
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//               />
//             </div>
//             <div className="flex justify-around mt-4">
//               <button className="bg-pink-700 text-white rounded-md px-3 py-1 hover:bg-pink-800 duration-200">
//                 Sign Up
//               </button>
//               <p className="text-xl">
//                 Have an account?{" "}
//                 <a
//                   className="text-blue-500 cursor-pointer"
//                   onClick={openModal}
//                 >
//                   Login
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Login Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-5 rounded-md">
//             <h3 className="font-bold text-lg">Login</h3>
//             <Login />
//             <button onClick={closeModal} className="mt-4 bg-red-500 text-white rounded-md px-3 py-1">
//             Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default SignUp;

// import React from "react";
// import { Link, Navigate } from "react-router-dom"; // Import Link component
// import Login from "./Login";
// import {useForm} from "react-hook-form";

// function SignUp() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };
//   return (
//     <div>
//       {/* Sign Up Form */}
//       <div className="border-[2px] shadow-md p-5 rounded-md">
//         <div className="w-[600px]">
//           <div className="modal-box dark:bg-slate-900 dark:text-white dark:border">
//             <div className="flex justify-end">
//               <Link to="/">Close</Link>
//             </div>
//             <h3 className="font-bold text-lg">Sign Up</h3>
//             <div className="mt-4 space-y-2">
//               <span>Name</span>
//               <br />
//               <input
//                 type="text"
//                 placeholder="Enter your full name"
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//                 {...register("Name", { required: true })}
//               />
//               {errors.Name && <p className="text-red-500">Name is required</p>}
//             </div>
//             <div className="mt-4 space-y-2">
//               <span>Email</span>
//               <br />
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//                 {...register("email", { required: true })}
                
//               />
//               {errors.email && <p className="text-red-500">Email is required</p>}
//             </div>
//             <div className="mt-4 space-y-2">
//               <span>Password</span>
//               <br />
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//                 {...register("password", { required: true })}
//               />
//               {errors.password && <p className="text-red-500">Password is required</p>}
              
//             </div>
//             <div className="flex justify-around mt-4">
//               <button className="bg-pink-700 text-white rounded-md px-3 py-1 hover:bg-pink-800 duration-200"
//               onSubmit={handleSubmit(onSubmit)}>
//                 Sign Up
//               </button>
//               <p className="text-xl">
//                 Have an account?{" "}
//                 {/* <Link to="/Login" className="text-blue-500 cursor-pointer">
//                   Login
//                 </Link> */}
//                 <div className="">
//                   <p
//                     className="text-blue-800 duration-300 cursor-pointer"
//                     onClick={() =>
//                       document.getElementById("my_modal_3").showModal()
//                     }
//                   >
//                     Login
//                   </p>
//                   <Login />
//                 </div>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUp;
import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom"; // Import Link component
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";


function SignUp() {

  const location=useLocation()
  const navigate=useNavigate()

  const from=location.state?.from?.pathname || "/"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {
   const userInfo={
    fullname:data.fullname,
    email:data.email,
    password:data.password
   }
   await axios.post("http://localhost:3047/user/SignUp",userInfo)
   .then((res)=>{
    console.log(res.data)
    if(res.data)
    {
      toast.success("Sign up successfully");
      navigate(from,{replace:true});
     
    }
    localStorage.setItem("Users",JSON.stringify(res.data.user))
   }).catch((err)=>{
    console.log(err)
    toast.error("Error"+err.response.data.message)
   })

  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
  
      <div className="w-full max-w-lg p-6 bg-white shadow-md rounded-md border border-gray-300">
        <div className="modal-box dark:bg-slate-900 dark:text-white dark:border">
          <div className="flex justify-end">
            <Link to="/" className="text-sm text-gray-500 hover:text-gray-700">
              Close
            </Link>
          </div>
          <h3 className="font-bold text-lg text-center">Sign Up</h3>

 
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-gray-700">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                {...register("fullname", { required: "Name is required" })}
              />
              {errors.fullname && (
                <p className="text-red-500 text-xs">{errors.Name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-500 text-xs">{errors.password.message}</p>
              )}
            </div>

            
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="w-full md:w-auto bg-pink-700 text-white rounded-md px-6 py-2 hover:bg-pink-800 duration-200"
              >
                Sign Up
              </button>
            </div>
          </form>

          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-700">
              Have an account?{" "}
              <span
                className="text-blue-800 cursor-pointer hover:underline"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </span>
            </p>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
