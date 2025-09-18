"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import AppointmentModal from "./AppointmentModal";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#", label: "About Us" },
    { href: "#", label: "Our Services" },
    { href: "#", label: "Resources" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className="bg-white fixed w-full top-0 z-50 py-3">
      <div className="max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                className="transition-transform hover:scale-105 h-20 w-auto"
                src="/Animal_doc_Logo.png"
                height={400}
                width={400}
                alt="The Animal Doctor Logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10 flex-1 justify-center">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={index}
                  href={link.href}
                  className={`font-medium text-sm uppercase tracking-wide transition-colors duration-200 ${
                    isActive
                      ? "text-[#2CA58D] border-b-2 border-[#2CA58D] pb-1"
                      : "text-gray-700 hover:text-[#2CA58D]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Social & Appointment Button */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <Link
                href="#"
                className="text-gray-700 hover:text-[#2CA58D] transition-colors duration-200"
              >
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-glyphs/30/twitterx--v2.png"
                  alt="twitterx--v2"
                />
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-[#2CA58D] transition-colors duration-200"
              >
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/fluency/48/linkedin.png"
                  alt="linkedin"
                />
              </Link>
            </div>
            <button
              onClick={openModal}
              className="bg-[#2CA58D] text-white px-4 py-2 rounded-lg text-md font-bold hover:bg-[#2CA58D]/90 transition-all duration-200 hover:shadow-md hover:cursor-pointer"
            >
              Book an Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-[#2CA58D] focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? "text-[#2CA58D] bg-gray-100"
                        : "text-gray-700 hover:text-[#2CA58D] hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="flex space-x-4 px-3 py-2">
                <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios-glyphs/30/twitterx--v2.png"
                    alt="twitterx--v2"
                  />
                </Link>
                <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/fluency/48/linkedin.png"
                    alt="linkedin"
                  />
                </Link>
              </div>
              <button
                onClick={openModal}
                className="block w-full text-center bg-[#2CA58D] text-white px-4 py-2 rounded-lg mt-2 hover:bg-[#2CA58D]/90 transition-colors duration-200"
              >
                Book an Appointment
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Appointment Modal */}
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
};

export default Header;
