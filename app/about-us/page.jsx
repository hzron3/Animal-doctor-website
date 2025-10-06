'"use client";';
import {
  HeartIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  HandRaisedIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const AboutUs = () => {
  const stats = [
    {
      value: "15+",
      label: "Years of Service",
      description: "Building Trust in Animal Healthcare",
    },
    {
      value: "10K+",
      label: "Lives Saved",
      description: "From Routine Checkups to Emergencies",
    },
    {
      value: "50+",
      label: "Veterinary Partners",
      description: "Collaborating for Better Care",
    },
    {
      value: "98%",
      label: "Satisfaction Rate",
      description: "Pet Owners Raving About Us",
    },
  ];

  const features = [
    {
      name: "Tailored Treatments",
      description:
        "Every pet is unique, so our care plans are customized to fit their individual needs and lifestyles.",
      icon: CloudArrowUpIcon,
    },
    {
      name: "Secure & Safe",
      description:
        "We prioritize your pet's safety with the latest protocols and a sterile, comforting environment.",
      icon: LockClosedIcon,
    },
    {
      name: "Reliable Support",
      description:
        "Round-the-clock guidance and follow-ups to ensure your pet's recovery is smooth and swift.",
      icon: ServerIcon,
    },
  ];

  const storySections = [
    {
      heading: "Our Founding Vision",
      description:
        "Founded in 2010 by a passionate team of animal lovers and vets, The Animal Doctor began as a small clinic dedicated to making high-quality care accessible to every pet family in the community.",
      image: "https://placecats.com/400/300",
    },
    {
      heading: "Growth Through Innovation",
      description:
        "Over the years, we've expanded our services with cutting-edge technology, from AI-assisted diagnostics to holistic wellness programs, always putting pet health first.",
      image: "https://placedog.net/400x300?id=87",
    },
    {
      heading: "Community and Compassion",
      description:
        "Beyond medical care, we’re proud to serve our community through outreach programs, rescue partnerships, and education initiatives that promote responsible pet ownership and animal welfare.",
      image: "https://placecats.com/400/300",
    },
  ];

  const values = [
    {
      title: "Compassion for Every Creature",
      description:
        "We treat every animal with empathy, kindness, and dignity — ensuring comfort and trust throughout their care journey.",
      icon: HeartIcon,
    },
    {
      title: "Integrity in Every Procedure",
      description:
        "Honesty and transparency guide every diagnosis, treatment, and recommendation we provide.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Innovation in Every Treatment",
      description:
        "We use the latest veterinary technologies and research-backed methods to provide the best possible outcomes.",
      icon: LightBulbIcon,
    },
    {
      title: "Commitment to Community",
      description:
        "We educate, support, and engage local communities to promote healthier, happier pets and families.",
      icon: HandRaisedIcon,
    },
  ];
  return (
    <main className="bg-gray-50 min-h-screen antialiased">
      {/* Template 1: Achievement Story Section */}
      <section className="pb-12 pt-36 relative">
        <div className="w-full max-w-[90%] sm:max-w-[85%] lg:max-w-[80%]  mx-auto">
          <div className="w-full justify-start items-center grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full lg:justify-start justify-center items-start flex">
              <div className="sm:w-[650px] w-full sm:h-[500px] h-full sm:bg-gray-100 rounded-2xl sm:border border-gray-200 relative">
                <img
                  className="sm:mt-4 sm:ml-4 w-full h-full rounded-2xl object-cover"
                  src="https://placedog.net/500x500?id=224"
                  alt="Veterinary team with pets"
                />
              </div>
            </div>
            <div className="w-full flex-col justify-center lg:items-start items-center gap-6 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-6 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h6 className="text-sm text-[#2CA58D] font-normal leading-relaxed">
                    Our Journey
                  </h6>
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-2 flex">
                    <h2 className="text-[#2CA58D] text-xl md:text-3xl font-bold leading-normal lg:text-start text-center">
                      Pioneering Compassionate Veterinary Excellence
                    </h2>
                    <p className="text-gray-600 text-base font-normal leading-relaxed lg:text-start text-center">
                      We're more than a clinic we're a haven for pets and their
                      families, blending tradition with innovation to deliver
                      unmatched care.
                    </p>
                  </div>
                </div>
                <div className="w-full flex-col justify-center items-start gap-4 flex">
                  <div className="w-full justify-start items-center gap-6 grid md:grid-cols-2 grid-cols-1">
                    {stats.slice(0, 2).map((stat, idx) => (
                      <div
                        key={idx}
                        className="w-full h-full p-3 rounded-lg border border-gray-200 hover:border-gray-400 transition-all duration-300 ease-in-out flex-col justify-start items-start gap-2 inline-flex"
                      >
                        <h4 className="text-gray-900 text-xl font-bold leading-8">
                          {stat.value}
                        </h4>
                        <p className="text-[#2CA58D] text-base font-semibold">
                          {stat.label}
                        </p>
                        <p className="text-gray-600 text-base font-normal leading-relaxed">
                          {stat.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="w-full h-full justify-start items-center gap-6 grid md:grid-cols-2 grid-cols-1">
                    {stats.slice(2).map((stat, idx) => (
                      <div
                        key={idx}
                        className="w-full p-3 rounded-lg border border-gray-200 hover:border-gray-400 transition-all duration-300 ease-in-out flex-col justify-start items-start gap-2 inline-flex"
                      >
                        <h4 className="text-gray-900 text-xl font-bold leading-8">
                          {stat.value}
                        </h4>
                        <p className="text-[#2CA58D] text-base font-semibold">
                          {stat.label}
                        </p>
                        <p className="text-gray-600 text-base font-normal leading-relaxed">
                          {stat.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Template 2: Features Section */}
      <section className="overflow-hidden bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] ">
          <div className="mx-auto grid grid-cols-1 gap-x-6 gap-y-12 sm:gap-y-16  lg:grid-cols-2">
            <div className="lg:pt-2 lg:pr-6">
              <div>
                <h2 className="text-sm text-[#2CA58D] font-semibold capitalize tracking-widest mb-1 text-center lg:text-left">
                  What Sets Us Apart
                </h2>
                <h2 className="text-xl md:text-3xl font-bold tracking-tight text-gray-900 text-center lg:text-left">
                  Dedicated to Unwavering Pet Wellness
                </h2>
                <p className="mt-4 text-base text-gray-600 leading-relaxed">
                  Our clinic stands as a pillar of trust, where veterinary
                  science meets heartfelt dedication. We empower pet owners with
                  knowledge and tools for lifelong health.
                </p>
                <dl className="mt-8 space-y-6 text-base text-gray-600 ">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          aria-hidden="true"
                          className="absolute top-1 left-1 h-5 w-5 text-[#2CA58D]"
                        />
                        {feature.name}
                      </dt>
                      <dd className="inline ml-2">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              alt="Modern veterinary facility"
              src="https://placedog.net/800x500?id=214"
              width={800}
              height={500}
              className="w-full max-w-none rounded-xl shadow-md ring-1 ring-gray-300/10 sm:w-[40rem] md:-ml-4 lg:-ml-0 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Redesigned Features Section: Revolutionary Veterinary Services */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] ">
          <div className="mb-10 text-center">
            <span className="py-1 px-4 bg-[#2CA58D]/10 rounded-full text-sm font-medium text-[#2CA58D] text-center">
              Features
            </span>
            <h2 className="text-xl md:text-3xl text-center font-bold text-gray-900 py-4">
              Revolutionary Veterinary Services
            </h2>
            <p className="text-base font-normal text-gray-600 max-w-md md:max-w-2xl mx-auto leading-relaxed">
              We offer advanced services including comprehensive wellness exams,
              seamless integration with pet health apps, and personalized care
              plans designed for optimal health outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out text-center">
              <div className="bg-[#2CA58D]/10 rounded-full flex justify-center items-center mb-4 w-16 h-16 mx-auto">
                <svg
                  className="stroke-[#2CA58D]"
                  width="24"
                  height="24"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 27.5L15 25M15 25V21.25M15 25L20 27.5M8.75 14.375L12.5998 11.0064C13.1943 10.4862 14.1163 10.6411 14.5083 11.327L15.4917 13.048C15.8837 13.7339 16.8057 13.8888 17.4002 13.3686L21.25 10M2.5 2.5H27.5M26.25 2.5V13.25C26.25 17.0212 26.25 18.9069 25.0784 20.0784C23.9069 21.25 22.0212 21.25 18.25 21.25H11.75C7.97876 21.25 6.09315 21.25 4.92157 20.0784C3.75 18.9069 3.75 17.0212 3.75 13.25V2.5"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Comprehensive Diagnostics
              </h4>
              <p className="text-sm text-gray-600">
                Plan and structure pet health assessments how you want. Quickly
                organizing diagnostics and tests.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out text-center">
              <div className="bg-[#2CA58D]/10 rounded-full flex justify-center items-center mb-4 w-16 h-16 mx-auto">
                <svg
                  className="stroke-[#2CA58D]"
                  width="24"
                  height="24"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 7.5C2.5 4.73858 4.73858 2.5 7.5 2.5C10.2614 2.5 12.5 4.73858 12.5 7.5C12.5 10.2614 10.2614 12.5 7.5 12.5C4.73858 12.5 2.5 10.2614 2.5 7.5Z"
                    stroke=""
                    strokeWidth="2"
                  />
                  <path
                    d="M2.5 22.5C2.5 20.143 2.5 18.9645 3.23223 18.2322C3.96447 17.5 5.14298 17.5 7.5 17.5C9.85702 17.5 11.0355 17.5 11.7678 18.2322C12.5 18.9645 12.5 20.143 12.5 22.5C12.5 24.857 12.5 26.0355 11.7678 26.7678C11.0355 27.5 9.85702 27.5 7.5 27.5C5.14298 27.5 3.96447 27.5 3.23223 26.7678C2.5 26.0355 2.5 24.857 2.5 22.5Z"
                    stroke=""
                    strokeWidth="2"
                  />
                  <path
                    d="M17.5 7.5C17.5 5.14298 17.5 3.96447 18.2322 3.23223C18.9645 2.5 20.143 2.5 22.5 2.5C24.857 2.5 26.0355 2.5 26.7678 3.23223C27.5 3.96447 27.5 5.14298 27.5 7.5C27.5 9.85702 27.5 11.0355 26.7678 11.7678C26.0355 12.5 24.857 12.5 22.5 12.5C20.143 12.5 18.9645 12.5 18.2322 11.7678C17.5 11.0355 17.5 9.85702 17.5 7.5Z"
                    stroke=""
                    strokeWidth="2"
                  />
                  <path
                    d="M17.5 22.5C17.5 19.7386 19.7386 17.5 22.5 17.5C25.2614 17.5 27.5 19.7386 27.5 22.5C27.5 25.2614 25.2614 27.5 22.5 27.5C19.7386 27.5 17.5 25.2614 17.5 22.5Z"
                    stroke=""
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Pet Wellness Integrations
              </h4>
              <p className="text-sm text-gray-600">
                Bring all your pet health tools and data together. Also join
                with hundreds of other apps for seamless care.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out text-center">
              <div className="bg-[#2CA58D]/10 rounded-full flex justify-center items-center mb-4 w-16 h-16 mx-auto">
                <svg
                  className="stroke-[#2CA58D]"
                  width="24"
                  height="24"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 26.25H26.25M6.25 22.875C4.86929 22.875 3.75 21.8676 3.75 20.625V12.75C3.75 11.5074 4.86929 10.5 6.25 10.5C7.63071 10.5 8.75 11.5074 8.75 12.75V20.625C8.75 21.8676 7.63071 22.875 6.25 22.875ZM15 22.875C13.6193 22.875 12.5 21.8676 12.5 20.625V9.375C12.5 8.13236 13.6193 7.125 15 7.125C16.3807 7.125 17.5 8.13236 17.5 9.375V20.625C17.5 21.8676 16.3807 22.875 15 22.875ZM23.75 22.875C22.3693 22.875 21.25 21.8676 21.25 20.625V6C21.25 4.75736 22.3693 3.75 23.75 3.75C25.1307 3.75 26.25 4.75736 26.25 6V20.625C26.25 21.8676 25.1307 22.875 23.75 22.875Z"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Health Reporting
              </h4>
              <p className="text-sm text-gray-600">
                Get real-time insights into your pet's progress and allows
                families to track their health habits.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out text-center">
              <div className="bg-[#2CA58D]/10 rounded-full flex justify-center items-center mb-4 w-16 h-16 mx-auto">
                <svg
                  className="stroke-[#2CA58D]"
                  width="24"
                  height="24"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.4167 12.0833V21.25M5.41667 21.25V20.8333C5.41667 19.262 5.41667 18.4763 5.90482 17.9882C6.39298 17.5 7.17865 17.5 8.75 17.5H22.0833C23.6547 17.5 24.4404 17.5 24.9285 17.9882C25.4167 18.4763 25.4167 19.262 25.4167 20.8333V21.25M15.4167 9.16667C13.8453 9.16667 13.0596 9.16667 12.5715 8.67851C12.0833 8.19036 12.0833 7.40468 12.0833 5.83333C12.0833 4.26198 12.0833 3.47631 12.5715 2.98816C13.0596 2.5 13.8453 2.5 15.4167 2.5C16.988 2.5 17.7737 2.5 18.2618 2.98816C18.75 3.47631 18.75 4.26198 18.75 5.83333C18.75 7.40468 18.75 8.19036 18.2618 8.67851C17.7737 9.16667 16.988 9.16667 15.4167 9.16667ZM7.08333 25.8333C7.08333 26.7538 6.33714 27.5 5.41667 27.5C4.49619 27.5 3.75 26.7538 3.75 25.8333C3.75 24.9129 4.49619 24.1667 5.41667 24.1667C6.33714 24.1667 7.08333 24.9129 7.08333 25.8333ZM17.0833 25.8333C17.0833 26.7538 16.3371 27.5 15.4167 27.5C14.4962 27.5 13.75 26.7538 13.75 25.8333C13.75 24.9129 14.4962 24.1667 15.4167 24.1667C16.3371 24.1667 17.0833 24.9129 17.0833 25.8333ZM27.0833 25.8333C27.0833 26.7538 26.3371 27.5 25.4167 27.5C24.4962 27.5 23.75 26.7538 23.75 25.8333C23.75 24.9129 24.4962 24.1667 25.4167 24.1667C26.3371 24.1667 27.0833 24.9129 27.0833 25.8333Z"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Care Workflow
              </h4>
              <p className="text-sm text-gray-600">
                Automated processes to coordinate your pet's care team and
                increase communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section: Our Story */}
      <section className="py-20 bg-white" id="our-story">
        <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] ">
          {/* Header */}
          <div className="mb-16 text-center">
            <span className="inline-block py-2 px-5 bg-[#2CA58D]/10 rounded-full text-sm font-semibold text-[#2CA58D] tracking-wide">
              Our Story
            </span>
            <h2 className="mt-5 text-xl md:text-3xl font-bold text-gray-900 leading-tight">
              Empowering Pets and Owners Through Innovation and Care
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how The Animal Doctor has evolved from a small clinic to
              a leader in veterinary care, driven by passion and innovation.
            </p>
          </div>

          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {storySections.map((section, index) => (
              <div
                key={index}
                className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 px-6 pt-6">
                  <div className="bg-[#2CA58D]/10 rounded-xl p-2 flex-shrink-0">
                    <span className="text-[#2CA58D] font-semibold text-base">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {section.heading}
                  </h3>
                </div>

                <p className="px-6 mt-4 text-gray-600 leading-relaxed flex-grow">
                  {section.description}
                </p>

                <img
                  src={section.image}
                  alt={section.heading}
                  className="w-full h-56 object-cover rounded-b-2xl mt-4"
                />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center">
            <div className="bg-gradient-to-r from-[#2CA58D] to-[#239b80] py-16 px-8 rounded-2xl text-white shadow-lg">
              <h2 className="text-xl md:text-3xl font-extrabold mb-4">
                Ready to Give Your Pet the Best Care?
              </h2>
              <p className="mb-8 text-white/90 text-lg max-w-2xl mx-auto">
                Join thousands of happy pet owners who trust The Animal Doctor.
              </p>
              <Link href="/contact-us">
                <button className="bg-white text-[#2CA58D] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 hover:cursor-pointer">
                  Get Started Today
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 pb-8 md:py-16" id="core-values">
        <div className="max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] mx-auto  text-center">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            At The Animal Doctor, our work is guided by principles that define
            who we are and how we care for your beloved pets.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col items-center text-center"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#2CA58D]/10 mb-4">
                  <value.icon className="h-8 w-8 text-[#2CA58D]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
