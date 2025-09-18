import {
  CheckIcon,
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  StarIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const AboutUs = () => {
  return (
    <main className="bg-gray-50 min-h-screen font-sans antialiased">
      {/* Hero Section (Clean, Text-Only) */}
      <section className="relative bg-gradient-to-r from-[#2CA58D]/90 to-[#1a7461]/90 text-white py-20 sm:py-28 md:py-36">
        <div className="relative z-10 flex flex-col items-center justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight animate-fade-in-up">
            About Us
          </h1>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-100 leading-relaxed mb-8">
            At The Animal Doctor, our mission is to provide exceptional
            veterinary services, ensuring your pets live healthy, joyful lives
            🐾.
          </p>
          <a
            href="#services"
            className="inline-block bg-white text-[#2CA58D] px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full shadow-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-medium text-sm sm:text-base md:text-lg"
          >
            Discover Our Services
          </a>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-white rounded-3xl shadow-lg my-12">
        <div className="text-center mb-16">
          <h2 className="text-[10px] xs:text-xs sm:text-sm md:text-base text-[#2CA58D] font-semibold uppercase mb-3 tracking-widest">
            Our Core Values
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What Drives Us Every Day
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Compassion",
              description:
                "We treat every pet with the love and care they deserve.",
              icon: <HeartIcon className="h-8 w-8 text-red-600" />,
            },
            {
              title: "Expertise",
              description:
                "Our team stays at the forefront of veterinary medicine.",
              icon: <ShieldCheckIcon className="h-8 w-8 text-[#2CA58D]" />,
            },
            {
              title: "Community",
              description:
                "Building strong relationships with pet owners and local communities.",
              icon: <UserGroupIcon className="h-8 w-8 text-blue-600" />,
            },
          ].map((value, idx) => (
            <div
              key={idx}
              className="text-center p-8 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h4 className="text-lg font-semibold mb-2 text-gray-900">
                {value.title}
              </h4>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Alternating Image Section 1: Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-1 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Choose The Animal Doctor?
            </h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              With years of experience and a passion for animal welfare, we
              offer personalized care that goes beyond the ordinary. Our
              state-of-the-art facility ensures your pets receive the best
              treatment possible.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-sm xs:text-base sm:text-lg md:text-xl text-gray-700">
                <CheckIcon className="h-6 w-6 text-[#2CA58D] mr-2" />{" "}
                Cutting-edge diagnostics
              </li>
              <li className="flex items-center text-sm xs:text-base sm:text-lg md:text-xl text-gray-700">
                <CheckIcon className="h-6 w-6 text-[#2CA58D] mr-2" />{" "}
                Compassionate team
              </li>
              <li className="flex items-center text-sm xs:text-base sm:text-lg md:text-xl text-gray-700">
                <CheckIcon className="h-6 w-6 text-[#2CA58D] mr-2" /> Convenient
                online booking
              </li>
            </ul>
            <a
              href="#"
              className="inline-block bg-[#2CA58D] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md hover:bg-[#1a7461] transition-all duration-300 transform hover:scale-105 font-medium text-sm xs:text-base sm:text-lg md:text-[20px]"
            >
              Book an Appointment
            </a>
          </div>
          <div className="order-2 lg:order-2 relative">
            <img
              src="/cats.jpg"
              alt="Veterinarian caring for pet"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Services Section with Carousel-like Grid */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-[#2CA58D]/5 rounded-3xl"
        id="services"
      >
        <div className="text-center mb-16">
          <h2 className="text-[10px] xs:text-xs sm:text-sm md:text-base text-[#2CA58D] font-semibold uppercase mb-3 tracking-widest">
            Our Services
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Tailored Veterinary Care
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Emergency Care",
              description: "24/7 support for urgent needs.",
              icon: <ShieldCheckIcon className="h-8 w-8 text-[#2CA58D]" />,
            },
            {
              title: "Wellness Exams",
              description: "Routine checkups for preventive health.",
              icon: <CheckIcon className="h-8 w-8 text-blue-600" />,
            },
            {
              title: "Surgical Services",
              description: "Advanced procedures with care.",
              icon: <HeartIcon className="h-8 w-8 text-red-600" />,
            },
            {
              title: "Consultations",
              description: "Expert advice tailored to your pet.",
              icon: <UserGroupIcon className="h-8 w-8 text-[#2CA58D]" />,
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="flex justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-900 text-center">
                {service.title}
              </h4>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Alternating Image Section 2: Our Approach */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <img
              src="https://unsplash.com/photos/2l0CWTpcChI/download?force=true"
              alt="Pet health assessment"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Holistic Approach to Pet Care
            </h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              We believe in treating the whole pet – mind, body, and spirit. Our
              integrated approach combines modern medicine with wellness
              strategies for optimal health.
            </p>
            <a
              href="#"
              className="inline-block bg-[#2CA58D] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md hover:bg-[#1a7461] transition-all duration-300 transform hover:scale-105 font-medium text-sm xs:text-base sm:text-lg md:text-[20px]"
            >
              Learn More About Our Methods
            </a>
          </div>
        </div>
      </section>

      {/* Process Section with Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-white rounded-3xl shadow-lg">
        <div className="text-center mb-16">
          <h2 className="text-[10px] xs:text-xs sm:text-sm md:text-base text-[#2CA58D] font-semibold uppercase mb-3 tracking-widest">
            Our Process
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
            From Consultation to Recovery
          </h3>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Initial Consultation",
              description: "Thorough evaluation of your pet's health.",
              icon: <ShieldCheckIcon className="h-8 w-8 text-[#2CA58D]" />,
            },
            {
              title: "Personalized Plan",
              description: "Custom treatment strategies.",
              icon: <HeartIcon className="h-8 w-8 text-red-600" />,
            },
            {
              title: "Ongoing Support",
              description: "Follow-ups for lasting wellness.",
              icon: <CheckIcon className="h-8 w-8 text-blue-600" />,
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className="text-center p-8 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in relative z-10"
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h4 className="text-lg font-semibold mb-2 text-gray-900">
                {step.title}
              </h4>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
          {/* Connecting Lines */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#2CA58D]/20 transform -translate-y-1/2 hidden md:block"></div>
        </div>
      </section>

      {/* Team Section with Enhanced Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-[10px] xs:text-xs sm:text-sm md:text-base text-[#2CA58D] font-semibold uppercase mb-3 tracking-widest">
            Meet the Team
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Dedicated Experts
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {[
            {
              name: "Dr. Jane Mwangi",
              role: "Senior Veterinarian",
              bio: "With 15 years of experience, Dr. Mwangi specializes in preventive care.",
              img: "https://picsum.photos/seed/picsum/200/300",
            },
            {
              name: "Dr. Brian Otieno",
              role: "Surgery Specialist",
              bio: "Expert in advanced surgical techniques for pets.",
              img: "https://picsum.photos/seed/picsum/200/300",
            },
            {
              name: "Dr. Amina Hassan",
              role: "Pet Wellness Expert",
              bio: "Focused on nutrition and behavioral health.",
              img: "https://picsum.photos/seed/picsum/200/300",
            },
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="p-6 text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-[10px] xs:text-xs sm:text-sm md:text-base text-[#2CA58D] mb-4">
                  {member.role}
                </p>
                <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-[#2CA58D]/5 rounded-3xl">
        <div className="text-center mb-16">
          <h2 className="text-[10px] xs:text-xs sm:text-sm md:text-base text-[#2CA58D] font-semibold uppercase mb-3 tracking-widest">
            What Our Clients Say
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Trusted by Pet Owners
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              quote: "The Animal Doctor saved my dog's life! Amazing care.",
              author: "Sarah K.",
              rating: 5,
            },
            {
              quote: "Professional and compassionate team. Highly recommend.",
              author: "Michael T.",
              rating: 5,
            },
            {
              quote: "Best vet clinic in town. My cats love the visits!",
              author: "Emily R.",
              rating: 5,
            },
          ].map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-6 w-6 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <p className="text-[10px] xs:text-xs sm:text-sm md:text-base text-[#2CA58D] font-semibold text-right">
                - {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Community & Stats Section with Parallax Background */}
      <section
        className="relative bg-fixed bg-cover bg-center py-32 text-white"
        style={{
          backgroundImage:
            "url('https://unsplash.com/photos/white-and-brown-long-coated-dog-z4w59Kt4d9E/download?force=true')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#2CA58D]/80 to-[#1a7461]/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[10px] xs:text-xs sm:text-sm md:text-base text-gray-100 uppercase mb-3 tracking-widest">
            Our Impact
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-16">
            Joining Forces for Healthier Pets
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {[
              { value: "7,500+", label: "Pets Treated" },
              { value: "5,000+", label: "Happy Families" },
              { value: "200+", label: "Community Events" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-8 bg-white/10 backdrop-blur-lg rounded-2xl animate-fade-in"
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                <h4 className="text-sm xs:text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                  {stat.value}
                </h4>
                <p className="text-[10px] xs:text-xs sm:text-sm md:text-base text-gray-100">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <a
            href="#"
            className="mt-12 inline-block bg-white text-[#2CA58D] px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-medium text-sm xs:text-base sm:text-lg md:text-[20px]"
          >
            Become Part of Our Community
          </a>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
