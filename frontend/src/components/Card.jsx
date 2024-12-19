// import React from "react";

// function Card({ item }) {

//   return (
//     <>
//       <div className="mt-4 my-3 p-3">
//         <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
//           <figure>
//             <img src={item.image} alt="Shoes" />
//           </figure>
//           <div className="card-body">
//             <h2 className="card-title">
//               {item.name}
//               <div className="badge badge-secondary">{item.category}</div>
//             </h2>
//             <p>{item.title}</p>
//             <div className="card-actions justify-between">
//               <div className="badge badge-outline">${item.price}</div>
//               <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-orange-600 hover:text-white p-2 duration-200">
//                 Buy Now
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Card;
// import React from "react";

// function Card({ item, onClick }) {
//   return (
//     <div className="mt-4 my-3 p-3">
//       <div
//         className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border"
//         onClick={onClick} // Handle the click to show detailed view of the book
//       >
//         <figure>
//           <img src={item.image} alt={item.name} className="w-full h-60 object-cover" />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">
//             {item.name}
//             <div className="badge badge-secondary">{item.category}</div>
//           </h2>
//           <p>{item.title}</p>
//           <div className="card-actions justify-between">
//             <div className="badge badge-outline">${item.price}</div>
//             <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-orange-600 hover:text-white p-2 duration-200">
//               Buy Now
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;
import React from "react";
import { useNavigate } from "react-router-dom";
import {useState} from "react";


function Card({ name, title, price, category, image, description}) {
  const navigate=useNavigate()
  const [showAbstract, setShowAbstract] = useState(false); // state to toggle abstract visibility

  const toggleAbstract = () => {
    setShowAbstract(!showAbstract);
  };
  const handleBuyNow = () => {
    navigate("/buy-now", {
      state: {
        
        
        image: image,
        name:name,
        title:title,
        price: price,
        description: description,
       
        
      },
    });
  };
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-lg font-bold mt-2">{name}</h2>
      <p className="text-gray-600">{title}</p>
      <p className="text-blue-500 mt-2">Price: ${price}</p>
      <p className="text-sm text-gray-500">Category: {category}</p>
      <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-orange-600 hover:text-white p-2 duration-200 text-center">
      <button onClick={handleBuyNow}>Buy Now</button>
           </div>
           
    </div>
  );
}

export default Card;

