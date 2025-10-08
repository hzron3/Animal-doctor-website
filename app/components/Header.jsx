"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import AppointmentModal from "./AppointmentModal";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/our-services", label: "Our Services" },
    { href: "/our-gallery", label: "Our Gallery" },
    { href: "/our-blogs", label: "Blogs" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      {/* Top Contact Bar - Hidden on mobile */}
      <div className="hidden md:flex  bg-gradient-to-r from-[#556a2d] to-[#6b8238] text-white text-sm py-2">
        <div className="max-w-[90%] lg:max-w-[80%] mx-auto w-full">
          <div className="flex items-center justify-between space-x-6">
            <div className="flex items-center space-x-2 group">
              <EnvelopeIcon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              <Link
                href="mailto:theanimaldoctor24@gmail.com"
                className="font-medium hover:underline transition-all duration-200 text-md"
              >
                theanimaldoctor24@gmail.com
              </Link>
            </div>

            <div className="flex items-center space-x-2 group">
              <MapPinIcon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              <Link
                href="https://maps.app.goo.gl/YN9GiRkCyW69S1wSA"
                className="font-medium hover:underline transition-all duration-200 text-md"
              >
                House A 2nd Floor, South B, Nairobi
              </Link>
            </div>

            <div className="flex items-center  space-x-2 group">
              <PhoneIcon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              <Link
                href="tel:+254745545270"
                className="font-medium hover:underline transition-all duration-200 text-md"
              >
                +254 745 545 270
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="py-3">
        <div className="max-w-[90%] lg:max-w-[80%] mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  className="transition-transform hover:scale-105 h-12 md:h-16 w-auto"
                  src="/animal-doctor-logo.png"
                  height={400}
                  width={400}
                  alt="The Animal Doctor Logo"
                />
              </Link>
            </div>

            {/* Mobile Contact Info */}
            <div className="md:hidden flex flex-col items-center space-x-3">
              <Link
                href="tel:+254745545270"
                className="text-gray-800 hover:text-[#556a2d] text-base text-center"
              >
                +254 745 545 270
              </Link>
              <Link
                href="https://maps.app.goo.gl/YN9GiRkCyW69S1wSA"
                className="text-gray-800 hover:text-[#556a2d] text-base text-center"
              >
                House A 2nd Floor, South B, Nairobi
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
                    className={`font-medium text-md capitalize tracking-wide transition-colors duration-200 ${
                      isActive
                        ? "text-[#556a2d] border-b-2 border-[#556a2d] pb-1"
                        : "text-gray-700 hover:text-[#556a2d]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Book Button */}
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={openModal}
                className="bg-[#556a2d] text-white px-4 py-2 rounded-lg text-md font-bold hover:bg-[#6b8238] transition-all duration-200 hover:shadow-md hover:cursor-pointer"
              >
                Book a Service
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-[#556a2d] focus:outline-none"
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
            <div className="md:hidden bg-white border-t border-gray-200 mt-2">
              <div className="px-3 py-3 space-y-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        isActive
                          ? "text-[#556a2d] bg-gray-100"
                          : "text-gray-700 hover:text-[#556a2d] hover:bg-gray-50"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <button
                  onClick={openModal}
                  className="block w-full text-center bg-[#556a2d] text-white px-4 py-2 rounded-lg mt-2 hover:bg-[#6b8238] transition-colors duration-200"
                >
                  Book a Service
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Appointment Modal */}
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
};

export default Header;
