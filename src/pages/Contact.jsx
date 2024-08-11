// src/pages/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} />
        
        <label>Email:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} />
        
        <label>Message:</label>
        <textarea name="message" value={form.message} onChange={handleChange} />
        
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
