import Contact from '../model/contact.model.js';

export const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    res.status(201).json({ message: 'Contact form submitted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again later.', error });
  }
};