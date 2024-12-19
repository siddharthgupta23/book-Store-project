// router.js
import express from "express";
import payementController from "../controller/payement.controller.js"; // Default import
const router = express.Router();

router.post("/payments", payementController.handlePaymentSubmission);

export default router;
