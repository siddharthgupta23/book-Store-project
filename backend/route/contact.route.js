import express from 'express';
import { createContact } from '../controller/contact.controlller.js';

const router = express.Router();

router.post('/submit', createContact);

export default router;