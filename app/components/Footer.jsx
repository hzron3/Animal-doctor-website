import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] mx-auto bg-[#F9FAFB] py-12">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="max-w-3xl mx-auto flex justify-center md:mb-6">
            <a href="/" className="flex items-center space-x-3">
              <Image
                src="/animal-doctor-logo.png"
                alt="Animal Doctor"
                height={500}
                width={500}
                className="h-10 w-auto"
              />
              <span className="text-xl md:text-2xl font-bold text-[#556a2d]/90">
                The Animal Doctor
              </span>
            </a>
          </div>

          {/* Navigation */}
          <ul className="text-sm md:text-lg grid grid-cols-3 gap-7 md:grid-cols-6 md:gap-12 transition-all duration-500 py-6 mb-8 border-b border-gray-200 justify-space-around text-center">
            <Link href="/" className="text-[#556a2d] hover:text-[#556a2d]/80">
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-[#556a2d] hover:text-[#556a2d]/80"
            >
              About Us
            </Link>
            <Link
              href="/our-services"
              className="text-[#556a2d] hover:text-[#556a2d]/80"
            >
              Our Services
            </Link>
            <li>
              <a
                href="/our-gallery"
                className="text-[#556a2d] hover:text-[#556a2d]/80"
              >
                Our Gallery
              </a>
            </li>
            <Link
              href="/our-blogs"
              className="text-[#556a2d] hover:text-[#556a2d]/80"
            >
              Our Blogs
            </Link>
            <Link
              href="/contact-us"
              className="text-[#556a2d] hover:text-[#556a2d]/80"
            >
              Contact Us
            </Link>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-8 justify-center items-center mb-10">
            <Link
              href="#"
              className="text-[#556a2d] hover:text-[#556a2d]/80 transition-all duration-300"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/556a2d/facebook-new.png"
                alt="Facebook"
                className="w-6 h-6"
              />
            </Link>
            <Link
              href="#"
              className="text-[#556a2d] hover:text-[#556a2d]/80 transition-all duration-300"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/556a2d/instagram-new.png"
                alt="Instagram"
                className="w-6 h-6"
              />
            </Link>
            <Link
              href="#"
              className="text-[#556a2d] hover:text-[#556a2d]/80 transition-all duration-300"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/556a2d/twitterx.png"
                alt="Twitter"
                className="w-6 h-6"
              />
            </Link>
            <Link
              href="#"
              className="text-[#556a2d] hover:text-[#556a2d]/80 transition-all duration-300"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/556a2d/whatsapp.png"
                alt="WhatsApp"
                className="w-6 h-6"
              />
            </Link>
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
