import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
        const response = await fetch('https://joyous-tech.onrender.com/api/contact/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } else {
            setStatus('Failed to send message.');
        }
        } catch (error) {
        setStatus('An error occurred.');
        }
    };
  return (
    <section id="contact" className="py-20 bg-gray-100 px-6">
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mx-auto max-w-3xl"
        >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Let’s Work Together</h2>
            <p className="mb-10 text-gray-600">
            Got a project in mind? Let’s bring it to life. Drop me a message below.
            </p>
           <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded border"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded border"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded border"
                    rows={5}
                />
                <button
                    type="submit"
                    className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition"
                >
                    Send
                </button>
                <p className="mt-2 text-center">{status}</p>
            </form>
      </motion.div>
    </section>
  );
};

export default Contact;
