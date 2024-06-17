// routes/contacts.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const PhoneNumber = require('../models/PhoneNumber');

// Create new contact
router.post('/contacts', async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumbers } = req.body;

    // Check if email already exists
    const existingContact = await Contact.findOne({ where: { email } });
    if (existingContact) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Create new contact
    const newContact = await Contact.create({ firstName, lastName, email });

    // Create phone numbers
    if (phoneNumbers && phoneNumbers.length > 0) {
      await PhoneNumber.bulkCreate(
        phoneNumbers.map(number => ({ number, contactId: newContact.id }))
      );
    }

    res.status(201).json(newContact);
  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
