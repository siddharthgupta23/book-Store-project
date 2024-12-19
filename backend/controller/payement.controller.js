// payement.controller.js
// import Payment from "../model/payement.js";

// const createPayment = async (req, res) => {
//   const { name, title, image, price, description, amount, paymentMethod, cardNumber, cardExpiryDate, paypalEmail, googlePayAccount } = req.body;

//   try {
//     const newPayment = new Payment({
//       name,
//       title,
//       image,
//       price,
//       description,
//       amount,
//       paymentMethod,
//       cardNumber,
//       cardExpiryDate,
//       paypalEmail,
//       googlePayAccount,
//     });

//     const savedPayment = await newPayment.save();
//     res.status(201).json(savedPayment);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export default { createPayment };  // Default export

import Payment from "../model/payement.js";

// Handle payment submission
const handlePaymentSubmission = async (req, res) => {
  const paymentData = req.body;

  try {
    // Create new payment record in the database
    const newPayment = new Payment(paymentData);

    // Save the payment to the database
    await newPayment.save();

    // Send a success response with the payment data
    res.status(200).json({
      message: "Payment successful",
      paymentData: newPayment,
    });
  } catch (error) {
    // Handle errors (e.g., database issues)
    res.status(400).json({
      message: "Error saving payment data",
      error: error.message,
    });
  }
};

// Export the controller functions
export default {handlePaymentSubmission};