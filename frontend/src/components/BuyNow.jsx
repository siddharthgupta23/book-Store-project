// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";

// function BuyNow() {
//   const location = useLocation();
//   const { image, price, description } = location.state || {};

//   // State to manage which payment option is selected
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

//   // Handler to set the selected payment method
//   const handlePaymentMethodSelect = (method) => {
//     setSelectedPaymentMethod(method);
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
//       {/* Book image */}
//       <img
//         src={image}
//         alt="Book cover"
//         className="w-full h-auto rounded-md mb-4"
//       />
//       {/* Book price */}
//       <h2 className="text-2xl font-semibold text-gray-800 mb-2">${price}</h2>
//       {/* Book description */}
//       <p className="text-gray-600 mb-4">{description}</p>

//       {/* Payment Options */}
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold text-gray-800 mb-2">Select Payment Method</h3>
//         <div className="space-y-2">
//           <button
//             className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition duration-300"
//             onClick={() => handlePaymentMethodSelect("debit")}
//           >
//             Debit Card
//           </button>
//           <button
//             className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition duration-300"
//             onClick={() => handlePaymentMethodSelect("credit")}
//           >
//             Credit Card
//           </button>
//           <button
//             className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition duration-300"
//             onClick={() => handlePaymentMethodSelect("paypal")}
//           >
//             PayPal
//           </button>
//           <button
//             className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition duration-300"
//             onClick={() => handlePaymentMethodSelect("google")}
//           >
//             Google Pay
//           </button>
//         </div>
//       </div>

//       {/* Conditionally render payment form based on selected method */}
//       {selectedPaymentMethod && (
//         <div className="mt-4">
//           <h4 className="text-lg font-semibold text-gray-800 mb-2">
//             Payment Details for {selectedPaymentMethod.charAt(0).toUpperCase() + selectedPaymentMethod.slice(1)}
//           </h4>

//           {/* Display form fields based on selected payment method */}
//           {selectedPaymentMethod === "debit" && (
//             <div>
//               <label className="block text-sm text-gray-600">Card Number</label>
//               <input
//                 type="text"
//                 className="w-full p-2 border rounded-md mb-4"
//                 placeholder="Enter your debit card number"
//               />
//               <label className="block text-sm text-gray-600">Expiry Date</label>
//               <input
//                 type="text"
//                 className="w-full p-2 border rounded-md mb-4"
//                 placeholder="MM/YY"
//               />
//             </div>
//           )}

//           {selectedPaymentMethod === "credit" && (
//             <div>
//               <label className="block text-sm text-gray-600">Card Number</label>
//               <input
//                 type="text"
//                 className="w-full p-2 border rounded-md mb-4"
//                 placeholder="Enter your credit card number"
//               />
//               <label className="block text-sm text-gray-600">Expiry Date</label>
//               <input
//                 type="text"
//                 className="w-full p-2 border rounded-md mb-4"
//                 placeholder="MM/YY"
//               />
//             </div>
//           )}

//           {selectedPaymentMethod === "paypal" && (
//             <div>
//               <label className="block text-sm text-gray-600">PayPal Email</label>
//               <input
//                 type="email"
//                 className="w-full p-2 border rounded-md mb-4"
//                 placeholder="Enter your PayPal email"
//               />
//             </div>
//           )}

//           {selectedPaymentMethod === "google" && (
//             <div>
//               <label className="block text-sm text-gray-600">Google Pay Account</label>
//               <input
//                 type="text"
//                 className="w-full p-2 border rounded-md mb-4"
//                 placeholder="Enter your Google Pay account"
//               />
//             </div>
//           )}
//         </div>
//       )}

//       {/* Proceed to Payment Button */}
//       <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 mt-4">
//         Proceed to Payment
//       </button>
//     </div>
//   );
// }

// export default BuyNow;
// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";

// function BuyNow() {
//   const location = useLocation();
//   const { name, title, image, price, description } = location.state || {};

//   const [showAbstract, setShowAbstract] = useState(false);
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
//   const [amount, setAmount] = useState("");
//   const [card, setCard] = useState("");
//   const [cardExpiryDate, setCardExpiryDate] = useState("");
//   const [email, setEmail] = useState("");
//   const [account, setAccount] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();
//   const handleCard = () => {
//     setShowAbstract((prevState) => !prevState);
//   };

//   const handlePaymentMethodSelect = (method) => {
//     setSelectedPaymentMethod(method);
//     setErrorMessage("");
//   };

//   const handlePaymentSubmit = async () => {
//     if (!amount) {
//       setErrorMessage("Please enter an amount before proceeding.");
//       return;
//     }

//     if (
//       selectedPaymentMethod === "debit" ||
//       selectedPaymentMethod === "credit"
//     ) {
//       if (!card) {
//         setErrorMessage("Please enter a card number before proceeding.");
//         return;
//       }
//       if (!cardExpiryDate) {
//         setErrorMessage("Please enter the card expiry date before proceeding.");
//         return;
//       }
//     }

//     if (selectedPaymentMethod === "paypal" && !email) {
//       setErrorMessage("Please enter your PayPal email before proceeding.");
//       return;
//     }

//     if (selectedPaymentMethod === "google" && !account) {
//       setErrorMessage(
//         "Please enter your Google Pay account before proceeding."
//       );
//       return;
//     }

//     const paymentData = {
//       name,
//       title,
//       image,
//       price,
//       description,
//       amount,
//       paymentMethod: selectedPaymentMethod,
//       cardNumber: selectedPaymentMethod === "credit" || selectedPaymentMethod === "debit" ? card : undefined,
//       cardExpiryDate: selectedPaymentMethod === "credit" || selectedPaymentMethod === "debit" ? cardExpiryDate : undefined,
//       paypalEmail: selectedPaymentMethod === "paypal" ? email : undefined,
//       googlePayAccount: selectedPaymentMethod === "google" ? account : undefined,

//     };

//     try {
//       const response = await axios.post("http://localhost:3047/api/payments", paymentData);
//       alert("Payment submitted successfully!");
//       setErrorMessage("");
//       navigate('/OrderConfirmationPage', {
//         state: { paymentDetails: paymentData },
//       });
//     } catch (error) {
//       setErrorMessage("Error submitting payment: " + error.response.data.message);
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
//       <img
//         src={image}
//         alt="Book cover"
//         className="w-full h-auto rounded-md mb-4"
//       />
//       <h3 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h3>
//       <h4 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h4>
//       <h2 className="text-2xl font-semibold text-gray-800 mb-2">${price}</h2>
//       <p className="text-gray-600 mb-4">{description}</p>
//       <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-orange-600 hover:text-white p-2 duration-200 text-center  dark:bg-slate-900 dark:text-white ">
//         <button onClick={handleCard} >Abstract</button>
//       </div>
//       {showAbstract && (
//         <div className="mt-4 text-sm text-gray-800">
//           <p>
//             Discover a world of endless possibilities with our curated
//             collection of books, designed to inspire, educate, and entertain.
//             Whether you're looking for captivating fiction, insightful
//             non-fiction, or expert guides in various fields, our selection has
//             something for every reader. Enjoy exclusive discounts and deals that
//             make your next literary adventure more affordable. With secure
//             checkout and fast delivery, buying your next favorite book is just a
//             click away. Explore a wide range of genres, from bestsellers to
//             hidden gems, and find the perfect book to enrich your life today!
//           </p>
//         </div>
//       )}

//       <div className="mb-4">
//         <h3 className="text-lg font-semibold text-gray-800 mb-2">
//           Select Payment Method
//         </h3>
//         <div className="space-y-2">
//           {["debit", "credit", "paypal", "google"].map((method) => (
//             <button
//               key={method}
//               className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition duration-300"
//               onClick={() => handlePaymentMethodSelect(method)}
//             >
//               {method.charAt(0).toUpperCase() + method.slice(1)} Card
//             </button>
//           ))}
//         </div>
//       </div>

//       {selectedPaymentMethod && (
//         <div className="mt-4">
//           <h4 className="text-lg font-semibold text-gray-800 mb-2">
//             Payment Details for{" "}
//             {selectedPaymentMethod.charAt(0).toUpperCase() +
//               selectedPaymentMethod.slice(1)}
//           </h4>

//           <div>
//             <label className="block text-sm text-gray-600">Amount</label>
//             <input
//               type="text"
//               className="w-full p-2 border rounded-md mb-4"
//               placeholder="Enter the amount"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//             />
//           </div>

//           {(selectedPaymentMethod === "debit" ||
//             selectedPaymentMethod === "credit") && (
//             <>
//               <label className="block text-sm text-gray-600">Card Number</label>
//               <input
//                 type="text"
//                 className="w-full p-2 border rounded-md mb-4"
//                 placeholder="Enter your card number"
//                 value={card}
//                 onChange={(e) => setCard(e.target.value)}
//               />
//               <label className="block text-sm text-gray-600">Expiry Date</label>
//               <input
//                 type="text"
//                 className="w-full p-2 border rounded-md mb-4"
//                 placeholder="MM/YY"
//                 value={cardExpiryDate}
//                 onChange={(e) => setCardExpiryDate(e.target.value)}
//               />
//             </>
//           )}

//           {selectedPaymentMethod === "paypal" && (
//             <div>
//               <label className="block text-sm text-gray-600">
//                 PayPal Email
//               </label>
//               <input
//                 type="email"
//                 className="w-full p-2 border rounded-md mb-4"
//                 placeholder="Enter your PayPal email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//           )}

//           {selectedPaymentMethod === "google" && (
//             <div>
//               <label className="block text-sm text-gray-600">
//                 Google Pay Account
//               </label>
//               <input
//                 type="text"
//                 className="w-full p-2 border rounded-md mb-4"
//                 placeholder="Enter your Google Pay account"
//                 value={account}
//                 onChange={(e) => setAccount(e.target.value)}
//               />
//             </div>
//           )}
//         </div>
//       )}

//       {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}

//       <button
//         className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 mt-4"
//         onClick={handlePaymentSubmit}
//       >
//         Proceed to Payment
//       </button>
//     </div>
//   );
// }

// export default BuyNow
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BuyNow() {
  const location = useLocation();
  const { name, title, image, price, description } = location.state || {};

  const [showAbstract, setShowAbstract] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [amount, setAmount] = useState("");
  const [card, setCard] = useState("");
  const [cardExpiryDate, setCardExpiryDate] = useState("");
  const [email, setEmail] = useState("");
  const [account, setAccount] = useState("");
  const [shippingAddress, setShippingAddress] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleCard = () => {
    setShowAbstract((prevState) => !prevState);
  };

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
    setErrorMessage("");
  };

  const handlePaymentSubmit = async () => {
    if (!amount) {
      setErrorMessage("Please enter an amount before proceeding.");
      return;
    }

    if (
      selectedPaymentMethod === "debit" ||
      selectedPaymentMethod === "credit"
    ) {
      if (!card) {
        setErrorMessage("Please enter a card number before proceeding.");
        return;
      }
      if (!cardExpiryDate) {
        setErrorMessage("Please enter the card expiry date before proceeding.");
        return;
      }
    }

    if (selectedPaymentMethod === "paypal" && !email) {
      setErrorMessage("Please enter your PayPal email before proceeding.");
      return;
    }

    if (selectedPaymentMethod === "google" && !account) {
      setErrorMessage(
        "Please enter your Google Pay account before proceeding."
      );
      return;
    }

    const paymentData = {
      name,
      title,
      image,
      price,
      description,
      amount,
      paymentMethod: selectedPaymentMethod,
      cardNumber:
        selectedPaymentMethod === "credit" || selectedPaymentMethod === "debit"
          ? card
          : undefined,
      cardExpiryDate:
        selectedPaymentMethod === "credit" || selectedPaymentMethod === "debit"
          ? cardExpiryDate
          : undefined,
      paypalEmail: selectedPaymentMethod === "paypal" ? email : undefined,
      googlePayAccount:
        selectedPaymentMethod === "google" ? account : undefined,
      shippingAddress,
      items: [
        {
          name,
          price,
        },
      ],
      orderId: `ORD-${Math.floor(Math.random() * 1000000)}`,
      paymentStatus: "Pending",
    };

    try {
      const response = await axios.post(
        "http://localhost:3047/api/payments",
        paymentData
      );
      alert("Payment submitted successfully!");
      setErrorMessage("");
      navigate("/OrderConfirmationPage", {
        state: { paymentDetails: paymentData },
      });
    } catch (error) {
      setErrorMessage(
        "Error submitting payment: " + error.response?.data?.message
      );
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <img
        src={image}
        alt="Book cover"
        className="w-full h-auto rounded-md mb-4"
      />
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h3>
      <h4 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h4>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">${price}</h2>
      <p className="text-gray-600 mb-4">{description}</p>

      {/* Show Abstract */}
      <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-orange-600 hover:text-white p-2 duration-200 text-center dark:bg-slate-900 dark:text-white">
        <button onClick={handleCard}>Abstract</button>
      </div>

      {showAbstract && (
        <div className="mt-4 text-sm text-gray-800">
          <p>
            Discover a world of endless possibilities with our curated //
            collection of books, designed to inspire, educate, and entertain. //
            Whether you're looking for captivating fiction, insightful //
            non-fiction, or expert guides in various fields, our selection has
            // something for every reader. Enjoy exclusive discounts and deals
            that // make your next literary adventure more affordable. With
            secure // checkout and fast delivery, buying your next favorite book
            is just a // click away. Explore a wide range of genres, from
            bestsellers to // hidden gems, and find the perfect book to enrich
            your life today!
          </p>
        </div>
      )}

      {/* Payment Method Selection */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Select Payment Method
        </h3>
        <div className="space-y-2">
          {["debit", "credit", "paypal", "google"].map((method) => (
            <button
              key={method}
              className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition duration-300"
              onClick={() => handlePaymentMethodSelect(method)}
            >
              {method.charAt(0).toUpperCase() + method.slice(1)} Card
            </button>
          ))}
        </div>
      </div>

      {selectedPaymentMethod && (
        <div className="mt-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            Payment Details for{" "}
            {selectedPaymentMethod.charAt(0).toUpperCase() +
              selectedPaymentMethod.slice(1)}
          </h4>

          <div>
            <label className="block text-sm text-gray-600">Amount</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md mb-4"
              placeholder="Enter the amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          {(selectedPaymentMethod === "debit" ||
            selectedPaymentMethod === "credit") && (
            <>
              <label className="block text-sm text-gray-600">Card Number</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md mb-4"
                placeholder="Enter your card number"
                value={card}
                onChange={(e) => setCard(e.target.value)}
              />
              <label className="block text-sm text-gray-600">Expiry Date</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md mb-4"
                placeholder="MM/YY"
                value={cardExpiryDate}
                onChange={(e) => setCardExpiryDate(e.target.value)}
              />
            </>
          )}

          {selectedPaymentMethod === "paypal" && (
            <div>
              <label className="block text-sm text-gray-600">
                PayPal Email
              </label>
              <input
                type="email"
                className="w-full p-2 border rounded-md mb-4"
                placeholder="Enter your PayPal email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          )}

          {selectedPaymentMethod === "google" && (
            <div>
              <label className="block text-sm text-gray-600">
                Google Pay Account
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md mb-4"
                placeholder="Enter your Google Pay account"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
              />
            </div>
          )}

          <div className="mt-8 max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Shipping Address
            </h4>

            <input
              type="text"
              placeholder="Full Name"
              value={shippingAddress.fullName}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  fullName: e.target.value,
                })
              }
              className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Address"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="City"
              value={shippingAddress.city}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  city: e.target.value,
                })
              }
              className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Country"
              value={shippingAddress.country}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                })
              }
              className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Postal Code"
              value={shippingAddress.postalCode}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  postalCode: e.target.value,
                })
              }
              className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="State"
              value={shippingAddress.state}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  state: e.target.value,
                })
              }
              className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      )}

      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}

      <button
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 mt-4"
        onClick={handlePaymentSubmit}
      >
        Proceed to Payment
      </button>
    </div>
  );
}

export default BuyNow;
