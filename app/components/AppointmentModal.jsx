"use client";

import { useState } from "react";

const services = [
  "Pet Consultations",
  "Vaccinations",
  "Pet Pharmacy",
  "Pet Dentistry",
  "Pet Grooming",
  "Pet Canteen",
  "Dog Training",
  "Elective Surgeries",
  "Pet Boarding / Daycare",
  "Laboratory & Diagnostic Services",
  "Deworming / Flea & Tick Control Programs",
];

const petTypes = ["Dog", "Cat", "Other"];

const AppointmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    petName: "",
    petType: "",
    breed: "",
    services: [],
    preferredDate: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation functions
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

  const validatePhone = (phone) => {
    if (!phone.trim()) return "Phone number is required";
    const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
    if (!phoneRegex.test(phone)) return "Please enter a valid phone number";
    return "";
  };

  const validatePetName = (petName) => {
    if (!petName.trim()) return "Your pet's name is required";
    return "";
  };

  const validatePetType = (petType) => {
    if (!petType) return "Please select your pet type";
    return "";
  };

  const validateServices = (services) => {
    if (services.length === 0) return "Please select at least one service";
    return "";
  };

  const validatePreferredDate = (date) => {
    if (!date) return ""; // Optional
    const selectedDate = new Date(date);
    const today = new Date("2025-10-05"); // Current date
    if (selectedDate < today)
      return "Preferred date must be today or in the future";
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
      case "phone":
        error = validatePhone(value);
        break;
      case "petName":
        error = validatePetName(value);
        break;
      case "petType":
        error = validatePetType(value);
        break;
      case "preferredDate":
        error = validatePreferredDate(value);
        break;
      case "message":
        error = validateMessage(value);
        break;
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleServiceChange = (service) => {
    setFormData((prev) => {
      const updatedServices = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      const error = validateServices(updatedServices);
      setErrors((prevErrors) => ({ ...prevErrors, services: error }));
      return { ...prev, services: updatedServices };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);
    const petNameError = validatePetName(formData.petName);
    const petTypeError = validatePetType(formData.petType);
    const servicesError = validateServices(formData.services);
    const preferredDateError = validatePreferredDate(formData.preferredDate);
    const messageError = validateMessage(formData.message);

    const newErrors = {
      name: nameError,
      email: emailError,
      phone: phoneError,
      petName: petNameError,
      petType: petTypeError,
      services: servicesError,
      preferredDate: preferredDateError,
      message: messageError,
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error !== "")) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Appointment submitted:", formData);
    setIsSubmitted(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        petName: "",
        petType: "",
        breed: "",
        services: [],
        preferredDate: "",
        message: "",
      });
      setErrors({});
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  const handleClose = () => {
    if (isSubmitted) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        petName: "",
        petType: "",
        breed: "",
        services: [],
        preferredDate: "",
        message: "",
      });
      setErrors({});
      setIsSubmitted(false);
      onClose();
    } else {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-99 p-4">
      <div className="bg-white rounded-xl shadow-xl p-4 sm:p-6 md:p-8 w-full max-w-[95%] sm:max-w-[90%] md:max-w-[1000px] max-h-[95vh] overflow-y-auto relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-200 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2CA58D] focus:ring-offset-2 hover:cursor-pointer"
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
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Thank You!
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Your appointment request has been received. We’ll contact you
              within 24 hours to confirm details and schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleClose}
                className="px-6 py-2 bg-gray-200 text-gray-900 font-medium rounded-lg hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    petName: "",
                    petType: "",
                    breed: "",
                    services: [],
                    preferredDate: "",
                    message: "",
                  });
                  setErrors({});
                }}
                className="px-6 py-2 bg-[#2CA58D] text-white font-medium rounded-lg hover:bg-[#1a7461] transition-colors"
              >
                Book Another
              </button>
            </div>
          </div>
        ) : (
          <>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
              Book an Appointment
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Fill in your details below, and our team will reach out to confirm
              your preferred time.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
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

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
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

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                      errors.phone
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-[#2CA58D]"
                    }`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Pet Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div>
                  <label
                    htmlFor="petName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Pet’s Name *
                  </label>
                  <input
                    type="text"
                    id="petName"
                    name="petName"
                    value={formData.petName}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                      errors.petName
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-[#2CA58D]"
                    }`}
                    placeholder="Buddy"
                  />
                  {errors.petName && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.petName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="petType"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Pet Type *
                  </label>
                  <select
                    id="petType"
                    name="petType"
                    value={formData.petType}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                      errors.petType
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-[#2CA58D]"
                    }`}
                  >
                    <option value="">Select pet type</option>
                    {petTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.petType && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.petType}
                    </p>
                  )}
                </div>

                {formData.petType && (
                  <div>
                    <label
                      htmlFor="breed"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Breed (Optional)
                    </label>
                    <input
                      type="text"
                      id="breed"
                      name="breed"
                      value={formData.breed}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2CA58D] transition-colors"
                      placeholder="e.g., Labrador Retriever"
                    />
                  </div>
                )}
              </div>

              {/* Services */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Services Needed * (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-40 overflow-y-auto p-2 border border-gray-200 rounded-lg bg-gray-50">
                  {services.map((service) => (
                    <label
                      key={service}
                      className="flex items-center space-x-2 p-2 rounded cursor-pointer hover:bg-white transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceChange(service)}
                        className="rounded text-[#2CA58D] focus:ring-[#2CA58D]"
                      />
                      <span className="text-sm text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
                {errors.services && (
                  <p className="mt-1 text-xs text-red-500">{errors.services}</p>
                )}
                {formData.services.length > 0 && (
                  <p className="mt-1 text-xs text-gray-500">
                    Selected: {formData.services.join(", ")}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Preferred Date */}
                {/* <div>
                  <label
                    htmlFor="preferredDate"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Preferred Date (Optional)
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min="2025-10-05"
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                      errors.preferredDate
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-[#2CA58D]"
                    }`}
                  />
                  {errors.preferredDate && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.preferredDate}
                    </p>
                  )}
                </div> */}

                {/* Spacer or future field */}
                <div></div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 resize-none transition-colors ${
                    errors.message
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-[#2CA58D]"
                  }`}
                  placeholder="Any special instructions, allergies, or details..."
                  maxLength={500}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {formData.message.length}/500 characters
                </p>
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={
                  isSubmitting ||
                  Object.values(errors).some((error) => error !== "")
                }
                className="w-full bg-[#2CA58D] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1a7461] transition-all duration-200 shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2 hover:cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Submitting...</span>
                  </>
                ) : (
                  "Book Appointment"
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AppointmentModal;
