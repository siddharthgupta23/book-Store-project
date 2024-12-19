// import mongoose from "mongoose";

// const paymentSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   title: { type: String, required: true },
//   image: { type: String, required: true },
//   price: { type: Number, required: true },
//   description: { type: String, required: true },
//   amount: { type: Number, required: true },
//   paymentMethod: { type: String, required: true },
//   cardNumber: { type: String },
//   cardExpiryDate: { type: String },
//   paypalEmail: { type: String },
//   googlePayAccount: { type: String },
// }, { timestamps: true });

// const abcfe = mongoose.model("Payment", paymentSchema);
// export default abcfe;
import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  orderId: String,
  name: String,
  title: String,
  price: Number,
  description: String,
  amount: Number,
  paymentMethod: String,
  cardNumber: String,
  cardExpiryDate: String,
  paypalEmail: String,
  googlePayAccount: String,
  shippingAddress: {
    fullName: String,
    address: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
  },
  items: Array,
  paymentStatus: String,
});

const abcfe = mongoose.model("Payment", paymentSchema);
export default abcfe;
