"use client";

import { useState } from "react";

const AppointmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    petName: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation
  const validateName = (name) => {
    if (!name.trim()) return "Your name is required";
    if (name.length < 2) return "Name must be at least 2 characters";
    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const validatePetName = (petName) => {
    if (!petName.trim()) return "Your pet's name is required";
    return "";
  };

  const validateService = (service) => {
    if (!service.trim()) return "Please select a service";
    return "";
  };

  const validateMessage = (message) => {
    if (message && message.length > 500)
      return "Message must be less than 500 characters";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    let error = "";
    switch (name) {
      case "name":
        error = validateName(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "petName":
        error = validatePetName(value);
        break;
      case "service":
        error = validateService(value);
        break;
      case "message":
        error = validateMessage(value);
        break;
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const petNameError = validatePetName(formData.petName);
    const serviceError = validateService(formData.service);
    const messageError = validateMessage(formData.message);

    const newErrors = {
      name: nameError,
      email: emailError,
      petName: petNameError,
      service: serviceError,
      message: messageError,
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error !== "")) return;

    console.log("Appointment submitted:", formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        petName: "",
        service: "",
        message: "",
      });
      setErrors({});
      setIsSubmitted(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 w-full max-w-[95%] sm:max-w-[85%] md:max-w-[600px] relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 focus:outline-none"
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {isSubmitted ? (
          <div className="text-center py-6">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800 mb-4">
              Thank You!
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Your appointment request has been received. We’ll get back to you
              shortly to confirm.
            </p>
          </div>
        ) : (
          <>
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800 mb-4 md:mb-6">
              Book an Appointment
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 md:mb-6">
              Fill in your details and we’ll contact you to confirm your
              appointment.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 ${
                    errors.name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-[#2CA58D]"
                  }`}
                  placeholder="Jane Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 ${
                    errors.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-[#2CA58D]"
                  }`}
                  placeholder="jane.doe@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Pet Name */}
              <div>
                <label
                  htmlFor="petName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Pet’s Name
                </label>
                <input
                  type="text"
                  id="petName"
                  name="petName"
                  value={formData.petName}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 ${
                    errors.petName
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-[#2CA58D]"
                  }`}
                  placeholder="Buddy"
                />
                {errors.petName && (
                  <p className="mt-1 text-xs text-red-500">{errors.petName}</p>
                )}
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 ${
                    errors.service
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-[#2CA58D]"
                  }`}
                >
                  <option value="">Select a service</option>
                  <option value="Check-up">General Check-up</option>
                  <option value="Vaccination">Vaccination</option>
                  <option value="Surgery">Surgery</option>
                  <option value="Dental Care">Dental Care</option>
                  <option value="Emergency">Emergency</option>
                </select>
                {errors.service && (
                  <p className="mt-1 text-xs text-red-500">{errors.service}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Additional Notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 resize-none ${
                    errors.message
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-[#2CA58D]"
                  }`}
                  placeholder="Any special instructions..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[#2CA58D] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2CA58D]/90 transition-all duration-200 hover:shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={Object.values(errors).some((error) => error !== "")}
              >
                Book Appointment
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AppointmentModal;
