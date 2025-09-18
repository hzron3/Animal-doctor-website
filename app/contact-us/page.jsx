import ContactUSForm from "../components/ContactUSForm";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const ContactUs = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full mx-auto top-20 px-4 py-12 md:py-16 overflow-hidden">
        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="text-center mb-6">
            <h1 className="text-gray-900 text-3xl md:text-4xl font-bold leading-tight">
              Contact <span className="text-[#2CA58D]">The Animal Doctor</span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg py-4 leading-relaxed max-w-2xl mx-auto">
              We’re here to help you and your pets! Reach out to us for
              appointments, advice, or just to say hello 🐾
            </p>
          </div>

          {/* Contact Card */}
          <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg overflow-hidden p-6 md:p-10">
            {/* Left: Form */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                Send Us a Message
              </h2>
              <ContactUSForm />
            </div>

            {/* Right: Contact Info */}
            <div className="flex flex-col justify-center">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                Reach Us Directly
              </h2>
              {[
                {
                  icon: MapPinIcon,
                  title: "Address",
                  content: "South B, Nairobi",
                },
                {
                  icon: PhoneIcon,
                  title: "Phone",
                  content: "+254 721 920 713",
                },
                {
                  icon: EnvelopeIcon,
                  title: "Email",
                  content: "info@animaldoctor.co.ke",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 py-4 border-b border-gray-100 last:border-none"
                >
                  <item.icon className="w-7 h-7 text-[#2CA58D] flex-shrink-0" />
                  <div>
                    <h5 className="text-lg font-medium text-gray-900">
                      {item.title}
                    </h5>
                    <p className="mt-1 text-gray-600">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background Shape */}
        <div
          className="absolute inset-0 bg-[#2CA58D]/10 z-0"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 70%)",
            borderRadius: "1rem",
          }}
        ></div>
      </div>

      {/* Map */}
      <div className="w-full h-72 sm:h-80 md:h-96 px-4 my-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.098080710435!2d36.82230209726043!3d-1.3106273288307182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11a9d644a551%3A0xffc84960ca560e99!2sSouth%20B%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1758210635351!5m2!1sen!2ske"
          allowFullScreen
          className="w-full h-full rounded-lg shadow-md"
          loading="lazy"
        ></iframe>
        {/* <iframe
          allowFullScreen
          className="w-full h-full rounded-lg shadow-md"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.804505293994!2d36.85038778578863!3d-1.2916642322541008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f114372a2e4cd%3A0x97b5ab059d31317b!2sHazina%20Towers%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1741010697602!5m2!1sen!2ske"
        ></iframe> */}
      </div>
    </>
  );
};

export default ContactUs;
