import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderConfirmationPage = () => {
  const location = useLocation();
  const { paymentDetails } = location.state || {}; 

  if (!paymentDetails) {
    return <p>No order details found!</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-5">Order Confirmation</h2>
      
      <div>
        <p className="text-lg font-semibold">Thank you for your purchase!</p>
        <p className="text-lg">Order ID: {paymentDetails.orderId}</p>
        <p className="text-lg">Payment Status: {paymentDetails.paymentStatus}</p>
        <p className="text-lg">Amount Paid: ${paymentDetails.amount}</p>
      </div>

      <h3 className="text-2xl mt-5">Shipping Address</h3>
      <div>
        <p className="text-lg">Name: {paymentDetails.shippingAddress.fullName}</p>
        <p className="text-lg">Address: {paymentDetails.shippingAddress.address}</p>
        <p className="text-lg">City: {paymentDetails.shippingAddress.city}</p>
        <p className="text-lg">State: {paymentDetails.shippingAddress.state}</p>
        <p className="text-lg">Postal Code: {paymentDetails.shippingAddress.postalCode}</p>
        <p className="text-lg">Country: {paymentDetails.shippingAddress.country}</p>
      </div>

      <div className="mt-5">
        <h4 className="text-lg font-semibold">Order Summary:</h4>
        <ul>
          {paymentDetails.items.map((item, index) => (
            <li key={index} className="text-lg">
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-lg font-semibold">Total: ${paymentDetails.amount}</p>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;

