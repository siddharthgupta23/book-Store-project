// import React from "react";
// import SignUp from "./SignUp";
// import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";

// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm()

//   const onSubmit = (data) => console.log(data)

//   return (
//     <div>
//       {/* You can open the modal using document.getElementById('ID').showModal() method */}
//       {/* <button
//         className="btn"
//         onClick={() => document.getElementById("my_modal_3").showModal()}
//       >
//       </button> */}
//       <dialog id="my_modal_3" className="modal ">
//         <div className="modal-box dark:bg-slate-900 dark:text-white dark:border">
//           <form onSubmit={handleSubmit(onSubmit)} method="dialog">
//             {/* if there is a button in form, it will close the modal */}
//             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//               ✕
//             </button>
//           </form>
//           <h3 className="font-bold text-lg">Hello!</h3>
//           <div className="mt-4 space-y-2">
//             <span>Email</span>
//             <br />
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-80 px-3 py-1 border rounded-md outline-none"
//               {...register("email", { required: true })}
//             />
//           </div>
//           <div className="mt-4 space-y-2">
//             <span>Password</span>
//             <br />
//             <input
//               type="password"
//               placeholder="Enter your password"
//               className="w-80 px-3 py-1 border rounded-md outline-none"
//               {...register("password", { required: true })}
//             />
//           </div>
//           <div className="flex justify-around mt-4">
//             <button className="bg-pink-700 text-white rounded-md px-3 py-1 hover:bg-pink-800 duration-200">
//               Login
//             </button>
//             <p>
//               Not Registered?
//               <Link to="/signup" className="text-blue-500 cursor-pointer">Sign Up</Link>{" "}
//             </p>
//           </div>
//         </div>
//       </dialog>
//     </div>
//   );
// };

// export default Login;

// import React from "react";

// import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import toast from "react-hot-toast";

// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const userInfo = {
//       email: data.email,
//       password: data.password,
//     };
//     await axios
//       .post("http://localhost:3047/user/login", userInfo)
//       .then((res) => {
//         console.log(res.data);
//         if (res.data) {
//           toast.success("Logged in  successfully");
//           // document.getElementById("my_modal_3").close();
//           setTimeout(() => {
//             window.location.reload();
//             localStorage.setItem("Users", JSON.stringify(res.data.user));
//           }, 1000);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         {
//           toast.error(err.response?.data?.message || "Login failed"); 
//           setTimeout(()=>{},2000)
//           //   setTimeout(() => {
//           //   window.location.reload();
//           //   localStorage.setItem("Users", JSON.stringify(res.data.user));
//           // }, 1000);
//         }
//       });
//   };
//   return (
//     <div>
//       <dialog id="my_modal_3" className="modal">
//         <div className="modal-box dark:bg-slate-900 dark:text-white dark:border">
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <button
//               type="button"
//               className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//               onClick={() => document.getElementById("my_modal_3").close()}
//             >
//               Close
//             </button>
//             <h3 className="font-bold text-lg">Hello!</h3>
//             <div className="mt-4 space-y-2">
//               <label>Email</label>
//               <br />
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//                 {...register("email", { required: true })}
//               />
//               {errors.email && (
//                 <p className="text-red-500">Email is required</p>
//               )}
//             </div>
//             <div className="mt-4 space-y-2">
//               <label>Password</label>
//               <br />
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//                 {...register("password", { required: true })}
//               />
//               {errors.password && (
//                 <p className="text-red-500">Password is required</p>
//               )}
//             </div>
//             <div className="flex justify-around mt-4">
//               <button
//                 type="submit"
//                 className="bg-pink-700 text-white rounded-md px-3 py-1 hover:bg-pink-800 duration-200"
//               >
//                 Login
//               </button>
//               <p>
//                 Not Registered?{" "}
//                 <Link to="/signup" className="text-blue-500 cursor-pointer">
//                   Sign Up
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </dialog>
//     </div>
//   );
// };

// export default Login;
 import React from "react";
 import { Link } from "react-router-dom";
 import { useForm } from "react-hook-form";
 import axios from "axios";
 import toast from "react-hot-toast";

 const Login = () => {
   const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
       email: data.email,
       password: data.password,
     };
     try {
       const res = await axios.post("http://localhost:3047/user/login", userInfo);
       if (res.data) {
        toast.success("Logged in successfully");
         // Reload after successful login
         setTimeout(() => {
          window.location.reload();
          localStorage.setItem("Users", JSON.stringify(res.data.existingUser));
        }, 1000);
      }
    } catch (err) {
       console.log(err);
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

   return (
    <div>
       <dialog id="my_modal_3" className="modal">
         <div className="modal-box dark:bg-slate-900 dark:text-white dark:border">
          <form onSubmit={handleSubmit(onSubmit)}>
            <button
               type="button"
               className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
               Close
             </button>
             <h3 className="font-bold text-lg">Hello!</h3>
             <div className="mt-4 space-y-2">
               <label>Email</label>
               <br />
               <input
                 type="email"
                 placeholder="Enter your email"
                 className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
               />
               {errors.email && <p className="text-red-500">Email is required</p>}
             </div>
             <div className="mt-4 space-y-2">
               <label>Password</label>
               <br />
               <input
                 type="password"
                 placeholder="Enter your password"
                 className="w-80 px-3 py-1 border rounded-md outline-none"
                 {...register("password", { required: true })}
               />
               {errors.password && <p className="text-red-500">Password is required</p>}
             </div>
             <div className="flex justify-around mt-4">
               <button
                 type="submit"
                 className="bg-pink-700 text-white rounded-md px-3 py-1 hover:bg-pink-800 duration-200"
               >
                 Login
               </button>
               <p>
                 Not Registered?{" "}
                 <Link to="/signup" className="text-blue-500 cursor-pointer">
                   Sign Up
                 </Link>
               </p>
             </div>
           </form>
        </div>
      </dialog>
     </div>
   );
 };

 export default Login;

