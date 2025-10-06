"use client";
import { useState, useEffect } from "react";
import {
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  CheckIcon,
  StarIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import AppointmentModal from "../components/AppointmentModal";

const OurServices = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [activeSection, setActiveSection] = useState("");

  const getSectionId = (name) => name.toLowerCase().replace(/[^a-z0-9]/g, "-");

  const services = [
    {
      name: "Pet Consultations",
      description:
        "Our expert veterinarians provide comprehensive health assessments and personalized advice tailored to your pet's unique needs. We conduct thorough examinations, discuss your pet's history, and offer guidance on nutrition, behavior, and preventive care to ensure optimal health throughout their life.",
      benefits: [
        "Early detection of health issues through detailed check-ups",
        "Customized wellness plans based on breed, age, and lifestyle",
        "Peace of mind for pet owners with expert recommendations and follow-up support",
      ],
      priceRange: "KES 5,000 - KES15,000",
      image: "https://placedog.net/600x400?id=1",
      alt: "Veterinarian consulting with pet owner",
    },
    {
      name: "Vaccinations",
      description:
        "Stay ahead of preventable diseases with our up-to-date vaccination schedules, ensuring your pet's long-term health and safety. Our team uses the latest protocols to administer core and optional vaccines, while educating owners on potential side effects and booster requirements.",
      benefits: [
        "Protection against common illnesses like rabies, distemper, and parvovirus",
        "Compliance with local regulations and travel requirements",
        "Boosted immunity for active lifestyles, including boarding and daycare",
      ],
      priceRange: "KES 2,000 - KES 8,000 per vaccine",
      image: "https://www.placecats.com/600/400",
      alt: "Pet receiving vaccination",
    },
    {
      name: "Pet Pharmacy",
      description:
        "Access a wide range of high-quality medications and supplements with convenient prescription services and expert guidance. From flea preventatives to chronic condition treatments, our in-house pharmacy ensures quick access to trusted brands with competitive pricing and home delivery options.",
      benefits: [
        "Affordable pricing on essentials and bulk purchases",
        "Fast prescription fulfillment with auto-refill reminders",
        "Personalized medication advice from our veterinary pharmacists",
      ],
      priceRange: "Varies by prescription",
      image: "https://placedog.net/600x400?id=3",
      alt: "Pet pharmacy shelves",
    },
    {
      name: "Pet Dentistry",
      description:
        "Specialized dental care to prevent and treat oral health issues, keeping your pet's smile bright and breath fresh. Our services include professional cleanings, extractions if needed, and home care kits to maintain dental hygiene between visits.",
      benefits: [
        "Prevention of periodontal disease and related systemic issues",
        "Pain-free procedures under safe anesthesia",
        "Improved overall health by reducing risks of heart and kidney problems",
      ],
      priceRange: "KES 10,000 - KES50,000",
      image: "https://www.placecats.com/600/400",
      alt: "Pet dental cleaning",
    },
    {
      name: "Pet Grooming",
      description:
        "Professional grooming services to keep your pet looking and feeling their best, with gentle handling and premium products. We offer breed-specific cuts, nail trims, ear cleaning, and spa treatments using hypoallergenic shampoos for sensitive skin.",
      benefits: [
        "Regular coat maintenance to prevent matting and skin issues",
        "Reduced shedding and allergens in your home",
        "Enhanced comfort and hygiene with sanitary trims and gland expressions",
      ],
      priceRange: "KES 3,000 - KES10,000",
      image: "https://placedog.net/600x400?id=7",
      alt: "Pet grooming session",
    },
    {
      name: "Pet Canteen",
      description:
        "Nutritious, vet-recommended meals and treats designed to support your pet's dietary needs and preferences. Our selection includes prescription diets, organic options, and supplements for joint health, weight control, and digestive support.",
      benefits: [
        "Balanced nutrition for all life stages from puppies to seniors",
        "Allergy-friendly options free from common irritants",
        "Promotes healthy weight management and energy levels",
      ],
      priceRange: "KES 1,000 - KES 5,000 per pack",
      image: "https://www.placecats.com/600/400",
      alt: "Pet food selection",
    },
    {
      name: "Dog Training",
      description:
        "Expert-led training programs to build obedience, confidence, and socialization skills in a fun, positive environment. From basic commands to advanced agility, our certified trainers use reward-based methods tailored to your dog's temperament.",
      benefits: [
        "Stronger owner-pet bond through effective communication",
        "Better behavior at home and in public spaces",
        "Socialization with other dogs to reduce anxiety and aggression",
      ],
      priceRange: "KES 7,500 - KES 20,000 per session",
      image: "https://placedog.net/600x400?id=12",
      alt: "Dog training class",
    },
    {
      name: "Elective Surgeries",
      description:
        "Safe and advanced surgical options for spaying, neutering, and other elective procedures with compassionate care. We utilize modern techniques, pain management protocols, and post-operative monitoring for the best outcomes.",
      benefits: [
        "Population control and health benefits like reduced cancer risks",
        "Minimally invasive techniques for faster healing",
        "Quick recovery support with take-home care instructions",
      ],
      priceRange: "KES 20,000 - KES 80,000",
      image: "https://www.placecats.com/600/400",
      alt: "Pet surgery preparation",
    },
    {
      name: "Pet Boarding / Daycare",
      description:
        "Secure and engaging boarding and daycare facilities where your pet can play, relax, and receive daily care while you're away. Our climate-controlled spaces include playgroups, individual attention, and webcam access for owners.",
      benefits: [
        "24/7 supervision and comfort in spacious enclosures",
        "Daily exercise and socialization activities",
        "Customized care plans including medication administration",
      ],
      priceRange: "KES 2,500 - KES 6,000 per day",
      image: "https://placedog.net/600x400?id=34",
      alt: "Pet daycare play area",
    },
    {
      name: "Laboratory & Diagnostic Services",
      description:
        "State-of-the-art lab testing and imaging for accurate diagnosis and monitoring of your pet's health conditions. Services include blood work, X-rays, ultrasounds, and biopsies processed in our on-site lab for quick results.",
      benefits: [
        "Rapid results for timely treatment decisions",
        "Non-invasive options available like digital radiography",
        "Comprehensive health insights for chronic disease management",
      ],
      priceRange: "KES 5,000 - KES 30,000",
      image: "https://www.placecats.com/600/400",
      alt: "Pet diagnostic lab",
    },
    {
      name: "Deworming / Flea & Tick Control Programs",
      description:
        "Ongoing prevention programs to protect your pet from parasites, with safe and effective treatments tailored to their lifestyle. We offer monthly preventatives, testing, and environmental advice to keep your home pest-free.",
      benefits: [
        "Prevention of infestations and related diseases like Lyme",
        "Protection for the whole family from zoonotic parasites",
        "Regular monitoring and adjustments based on seasonal risks",
      ],
      priceRange: "KES 1,500 - KES 5,000 per treatment",
      image: "https://placedog.net/600x400?id=67",
      alt: "Pet parasite control",
    },
  ];

  // Track which section is visible
  useEffect(() => {
    const sectionIds = services.map((s) => getSectionId(s.name));
    const observers = [];

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.95 } // Trigger when 95% of the section is visible
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [services]);

  return (
    <main className="bg-gray-50 min-h-screen antialiased">
      {/* Header Section */}
      <section className="bg-white pb-3 md:pb-6 pt-28 md:pt-32">
        <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] text-center">
          <h6 className="text-sm text-[#2CA58D] font-normal uppercase tracking-wider mb-2">
            Our Services
          </h6>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Care for Your Beloved Pets
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At The Animal Doctor, we offer a full spectrum of veterinary
            services designed to keep your pets healthy, happy, and thriving.
            From routine check-ups to specialized treatments, our team is here
            to provide exceptional care with a focus on compassion and
            expertise.
          </p>
          <button
            onClick={openModal}
            className="mt-8 inline-flex items-center px-6 py-3 bg-[#2CA58D] hover:bg-[#1a7461] text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:cursor-pointer"
          >
            Reserve a Spot
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>

          {/* Appointment Modal */}
          <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </section>

      {/* Sticky Navigation Bar */}
      <nav className="hidden md:block sticky top-24 z-50 bg-white shadow-md border-b border-gray-200">
        <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%]">
          <ul className="flex flex-wrap space-y-4 justify-center gap-4 p-4">
            {services.map((service) => {
              const id = getSectionId(service.name);
              const isActive = activeSection === id;

              return (
                <li key={service.name}>
                  <Link
                    href={`#${id}`}
                    className={`px-6 py-2 font-medium rounded-full transition-all duration-300 text-sm ${
                      isActive
                        ? "bg-[#2CA58D] text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-[#2CA58D]"
                    }`}
                  >
                    {service.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Services Sections */}
      {services.map((service, index) => {
        const id = getSectionId(service.name);
        return (
          <section
            key={service.name}
            id={id}
            className={`py-12 md:py-16 ${
              index % 2 === 0 ? "bg-white" : "bg-gray-50"
            } scroll-mt-20`}
          >
            <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%]">
              <div
                className={`flex flex-col lg:flex-row ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                } gap-8 lg:gap-12 items-start lg:items-center`}
              >
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="flex items-center space-x-3">
                    <ShieldCheckIcon className="h-8 w-8 text-[#2CA58D]" />
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900">
                      {service.name}
                    </h2>
                  </div>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                      Key Benefits:
                    </h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckIcon className="h-5 w-5 text-[#2CA58D] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {service.priceRange && (
                    <div className="bg-[#2CA58D]/5 p-3 rounded-lg inline-block">
                      <p className="text-sm font-medium text-gray-700">
                        Price Range:{" "}
                        <span className="text-[#2CA58D]">
                          {service.priceRange}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
                <div className="w-full lg:w-1/2 relative">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-auto object-cover rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default OurServices;
