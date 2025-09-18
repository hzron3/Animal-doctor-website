import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="w-full bg-[#F9FAFB] py-12">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="max-w-3xl mx-auto flex justify-center mb-6">
            <a href="/" className="flex items-center space-x-3">
              <img
                src="/Animal_doc_Logo.png"
                alt="Animal Doctor"
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold text-[#2CA58D]/90">
                Animal Doctor
              </span>
            </a>
          </div>

          {/* Navigation */}
          <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-6 mb-8 border-b border-gray-200">
            <li>
              <a href="#" className="text-[#2CA58D] hover:text-[#38B2AC]">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-[#2CA58D] hover:text-[#38B2AC]">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-[#2CA58D] hover:text-[#38B2AC]">
                Pet Care Tips
              </a>
            </li>
            <li>
              <a href="#" className="text-[#2CA58D] hover:text-[#38B2AC]">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-[#2CA58D] hover:text-[#38B2AC]">
                Contact
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-8 justify-center items-center mb-10">
            <a
              href="#"
              className="text-[#2CA58D] hover:text-[#2CA58D]/90 transition-all duration-300"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/2CA58D/facebook-new.png"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            <a
              href="#"
              className="text-[#2CA58D] hover:text-[#2CA58D]/90 transition-all duration-300"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/2CA58D/instagram-new.png"
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
            <a
              href="#"
              className="text-[#2CA58D] hover:text-[#2CA58D]/90 transition-all duration-300"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/2CA58D/twitterx.png"
                alt="Twitter"
                className="w-6 h-6"
              />
            </a>
            <a
              href="#"
              className="text-[#2CA58D] hover:text-[#2CA58D]/90 transition-all duration-300"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/2CA58D/whatsapp.png"
                alt="WhatsApp"
                className="w-6 h-6"
              />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Animal Doctor. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
