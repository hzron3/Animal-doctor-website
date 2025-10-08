"use client";
import { useState } from "react";

const ContactUSForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name required";
    if (!formData.email.trim()) newErrors.email = "Email required";
    if (!formData.subject) newErrors.subject = "Please select a subject";
    if (!formData.message.trim()) newErrors.message = "Message required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setSubmitted(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-2xl p-8 space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-[#556a2d]`}
            placeholder="John"
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs">{errors.firstName}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.lastName ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-[#556a2d]`}
            placeholder="Doe"
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs">{errors.lastName}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-[#556a2d]`}
          placeholder="you@example.com"
        />
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
      </div>

      {/* Subject */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Subject
        </label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.subject ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-[#556a2d] bg-white`}
        >
          <option value="">Select a subject</option>
          <option value="appointment">Book an Appointment</option>
          <option value="emergency">Emergency Care</option>
          <option value="advice">General Advice</option>
          <option value="other">Other</option>
        </select>
        {errors.subject && (
          <p className="text-red-500 text-xs">{errors.subject}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.message ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-[#556a2d]`}
          placeholder="Tell us about your pet..."
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-xs">{errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <div className="flex flex-col items-center">
        <button
          type="submit"
          className="px-8 py-3 bg-[#556a2d] text-white font-semibold rounded-lg hover:bg-[#556a2d]/90 transition-all hover:cursor-pointer"
        >
          Send Message
        </button>
        {submitted && (
          <p className="text-green-600 text-sm mt-2">
            Message sent successfully!
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactUSForm;
