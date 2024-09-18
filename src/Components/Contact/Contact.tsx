"use client"
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';

interface FormData {
  email: string;
  phone: string;
  first: string;
  last: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(() => {
    const savedData = localStorage.getItem('formData');
    return savedData ? JSON.parse(savedData) : {
      email: '',
      phone: '',
      first: '',
      last: '',
      message: '',
    };
  });

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert('Form submitted');

    localStorage.removeItem('formData');
    setFormData({
      email: '',
      phone: '',
      first: '',
      last: '',
      message: '',
    });
  };

  return (
    <form className="container mt-12 mx-auto p-5 bg-dark-900 text-gray-200 rounded-lg shadow-lg w-full max-w-lg mb-6" onSubmit={handleSubmit}>
      <h1 className='text-4xl md:text-5xl font-bold text-center mt-10 mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text animate-gradient-text'>
            Get In Touch With Us
      </h1>
      <div className="flex flex-col mb-4">
        <label htmlFor="frm-email" className="mb-2">Email</label>
        <input
          id="frm-email"
          type="email"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="py-1 px-1 border border-gray-600 rounded-md bg-blue-50 text-gray-800 text-base"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="frm-phone" className="mb-0">Phone</label>
        <input
          id="frm-phone"
          type="text"
          name="phone"
          autoComplete="tel"
          value={formData.phone}
          onChange={handleChange}
          required
          className="py-1 px-1 border border-gray-600 rounded-md bg-blue-50 text-gray-800 text-base"
        />
      </div>
      <div className="flex flex-row justify-between mb-1">
        <div className="flex flex-col w-1/2 pr-2">
          <label htmlFor="frm-first" className="mb-2">First Name</label>
          <input
            id="frm-first"
            type="text"
            name="first"
            autoComplete="given-name"
            value={formData.first}
            onChange={handleChange}
            required
            className="py-1 px-1 border border-gray-600 rounded-md bg-blue-50 text-gray-800 text-base"
          />
        </div>
        <div className="flex flex-col w-1/2 pl-2">
          <label htmlFor="frm-last" className="mb-2">Last Name</label>
          <input
            id="frm-last"
            type="text"
            name="last"
            autoComplete="family-name"
            value={formData.last}
            onChange={handleChange}
            required
            className="py-1 px-1 border border-gray-600 rounded-md bg-blue-50 text-gray-800 text-base"
          />
        </div>
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="frm-message" className="mb-2">Message</label>
        <textarea
          id="frm-message"
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="py-2 px-3 border border-gray-600 rounded-md bg-blue-50 text-gray-800 text-base resize-none"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-4 py-2 text-lg font-semibold border border-black rounded-md bg-gray-900 text-gray-200 hover:bg-gray-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
