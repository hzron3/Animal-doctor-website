import Image from "next/image";
import Link from "next/link";
import {
  HeartIcon,
  ShieldCheckIcon,
  ScissorsIcon,
  SparklesIcon,
  BeakerIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import TestimonialsAndCTA from "./components/TestimonialAndCTA";
const Home = () => {
  const services = [
    {
      icon: <HeartIcon className="w-8 h-8 text-[#556a2d]" />,
      title: "General Checkups",
      description:
        "Comprehensive health checkups to keep your pets happy and healthy.",
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-[#556a2d]" />,
      title: "Vaccinations",
      description:
        "Protect your pets with essential vaccinations and preventive care.",
    },
    {
      icon: <BeakerIcon className="w-8 h-8 text-[#556a2d]" />,
      title: "Emergency Care",
      description:
        "Round-the-clock urgent medical attention for unexpected situations.",
    },
    {
      icon: <ScissorsIcon className="w-8 h-8 text-[#556a2d]" />,
      title: "Grooming",
      description:
        "Professional grooming services to keep pets clean, neat, and stylish.",
    },
    {
      icon: <SparklesIcon className="w-8 h-8 text-[#556a2d]" />,
      title: "Surgery",
      description:
        "Safe and modern surgical procedures handled by experienced veterinarians.",
    },
    {
      icon: <ChatBubbleLeftEllipsisIcon className="w-8 h-8 text-[#556a2d]" />,
      title: "Nutrition Plans",
      description:
        "Personalized diet and nutrition guidance for optimal pet health.",
    },
  ];
  return (
    <>
      <div className="w-full h-[80vh] sm:h-[85vh] relative flex flex-col justify-center items-center overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/dogs_playing.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>

        {/* Main content */}
        <div className="w-full max-w-6xl text-start relative z-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-center md:text-left text-3xl md:text-5xl font-bold leading-tight animate-fadeIn drop-shadow-lg">
            Compassionate Care for Your Pets
          </h1>
          <p className="text-gray-200 text-base  sm:text-lg md:text-xl py-4 leading-relaxed animate-slideUp delay-100 text-center md:text-left">
            At{" "}
            <span className="font-semibold text-[#556a2d]">
              The Animal Doctor
            </span>
            , we are dedicated to keeping your furry friends healthy and happy.
            From routine checkups to advanced treatments, our mission is to
            provide exceptional veterinary care for dogs, cats, and all beloved
            pets.
          </p>
          <p className="text-[#556a2d] text-base sm:text-xl md:text-[22px] font-medium italic animate-slideUp delay-200 drop-shadow-md text-center md:text-left">
            "Because pets are family."
          </p>
          <div className="mt-3 sm:mt-4 md:mt-6 text-center md:text-left">
            <Link
              href={"/about-us#our-story"}
              className="text-base  sm:text-lg md:text-[20px] px-4 sm:px-6 py-2 sm:py-3 bg-[#556a2d] rounded-lg text-white hover:bg-[#556a2d]/80 hover:scale-105 transition-all duration-300 ease-in-out shadow-md hover:shadow-xl "
            >
              Discover Our Story
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="hidden w-full max-w-6xl absolute bottom-2  sm:bottom-4 md:bottom-6 lg:bottom-10 md:flex flex-wrap justify-center gap-2  sm:gap-4 md:gap-6 lg:gap-12 z-10 px-2 sm:px-4">
          <div className="flex flex-col items-center text-center border-r border-[#556a2d]/50 pr-2  sm:pr-4 md:pr-6 last:border-r-0 min-w-[60px] sm:min-w-[100px]">
            <svg
              className="w-5 h-5  sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#556a2d] mb-1 sm:mb-2"
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
            <span className="text-white text-base  sm:text-xl md:text-2xl font-bold drop-shadow-md">
              5,000+
            </span>
            <span className="text-gray-300 text-[10px]  sm:text-base md:text-base">
              Pets Treated
            </span>
          </div>

          <div className="flex flex-col items-center text-center border-r border-[#556a2d]/50 pr-2  sm:pr-4 md:pr-6 last:border-r-0 min-w-[60px]  sm:min-w-[100px]">
            <svg
              className="w-5 h-5  sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#556a2d] mb-1 sm:mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.657 0-3 1.343-3 3v5h6v-5c0-1.657-1.343-3-3-3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 21h14"
              />
            </svg>
            <span className="text-white text-base  sm:text-xl md:text-2xl font-bold drop-shadow-md">
              15+
            </span>
            <span className="text-gray-300 text-[10px]  sm:text-base md:text-base">
              Years Experience
            </span>
          </div>

          <div className="flex flex-col items-center text-center border-r border-[#556a2d]/50 pr-2  sm:pr-4 md:pr-6 last:border-r-0 min-w-[60px]  sm:min-w-[100px]">
            <svg
              className="w-5 h-5  sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#556a2d] mb-1 sm:mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l6.16-3.422A12.083 12.083 0 0112 21a12.083 12.083 0 01-6.16-10.422L12 14z"
              />
            </svg>
            <span className="text-white text-base sm:text-xl md:text-2xl font-bold drop-shadow-md">
              2,000+
            </span>
            <span className="text-gray-300 text-[10px] sm:text-base md:text-base">
              Happy Pet Owners
            </span>
          </div>

          <div className="flex flex-col items-center text-center pr-2  sm:pr-4 md:pr-6 last:border-r-0 min-w-[60px]  sm:min-w-[100px]">
            <svg
              className="w-5 h-5  sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#556a2d] mb-1 sm:mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11.05 2.93a1 1 0 011.9 0l1.52 4.67a1 1 0 00.95.69h4.92c.97 0 1.37 1.24.59 1.81l-3.98 2.9a1 1 0 00-.36 1.12l1.52 4.67c.3.92-.76 1.69-1.54 1.12l-3.97-2.89a1 1 0 00-1.18 0l-3.97 2.89c-.78.57-1.84-.2-1.54-1.12l1.52-4.67a1 1 0 00-.36-1.12L2.06 10.1c-.78-.57-.38-1.81.59-1.81h4.92a1 1 0 00.95-.69l1.52-4.67z"
              />
            </svg>
            <span className="text-white text-base  sm:text-xl md:text-2xl font-bold drop-shadow-md">
              98%
            </span>
            <span className="text-gray-300 text-[10px]  sm:text-base md:text-base">
              Client Satisfaction
            </span>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] mx-auto  grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">
              About <span className="text-[#556a2d]">The Animal Doctor</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              At{" "}
              <span className="font-semibold text-[#556a2d]">
                The Animal Doctor
              </span>
              , we believe pets are more than just animals – they are family.
              With over{" "}
              <span className="font-semibold">15 years of experience</span> in
              veterinary care, our dedicated team provides compassionate and
              professional services tailored to each pet’s needs.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              From routine wellness checkups to advanced treatments, our mission
              is to ensure your furry friends live healthier, happier lives.
              We’re proud to have cared for{" "}
              <span className="font-semibold">5,000+ pets</span> and built
              lasting relationships with families who trust us with their
              beloved companions.
            </p>
            <Link href="/about-us">
              <button className="bg-[#556a2d] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#556a2d]/80 transition-colors duration-200 inline-flex items-center hover:cursor-pointer">
                Learn More
                <svg
                  className="ml-2 h-4 w-4"
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
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-72 sm:h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/Veterinarian-caring-dog.webp"
              alt="Veterinarian caring for a dog"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-xl md:text-3xl font-bold mb-4 text-gray-900">
            Our <span className="text-[#556a2d]">Services</span>
          </h2>
          <p className="text-gray-600 mb-12">
            From checkups to emergency care, we offer a wide range of veterinary
            services to keep your furry friends healthy.
          </p>

          {/* Service Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-left"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-base text-gray-600 mb-4">
                  {service.description}
                </p>
                {/* <Link
                  href="/services"
                  className="text-[#556a2d] font-medium hover:underline inline-flex items-center"
                >
                  Learn more →
                </Link> */}
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/our-services">
              <button className="bg-[#556a2d] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#556a2d]/90 transition-colors duration-200 inline-flex items-center hover:cursor-pointer">
                View All Services
                <svg
                  className="ml-2 h-4 w-4"
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
            </Link>
          </div>
        </div>
      </section>
      {/* Testimonial & CTA Sections */}
      <TestimonialsAndCTA />
    </>
  );
};

export default Home;
