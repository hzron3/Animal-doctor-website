// app/gallery/page.jsx
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function OurGallery() {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [filter, setFilter] = useState("all");

  const galleryImages = [
    {
      id: 1,
      title: "Happy Puppy Consultation",
      description: "A joyful puppy during its first health check-up.",
      category: "consultations",
      image: "https://picsum.photos/800/600?random=17",
      alt: "Puppy consultation",
    },
    {
      id: 2,
      title: "Vaccination Day",
      description: "Administering a routine vaccine to ensure pet safety.",
      category: "vaccinations",
      image: "https://picsum.photos/800/600?random=18",
      alt: "Pet vaccination",
    },
    {
      id: 3,
      title: "Grooming Session",
      description: "Professional grooming for a fluffy cat.",
      category: "grooming",
      image: "https://picsum.photos/800/600?random=19",
      alt: "Cat grooming",
    },
    {
      id: 4,
      title: "Boarding Fun",
      description: "Pets enjoying playtime at our boarding facility.",
      category: "boarding",
      image: "https://picsum.photos/800/600?random=20",
      alt: "Pet boarding",
    },
    {
      id: 5,
      title: "Dental Care",
      description: "Gentle dental cleaning for optimal oral health.",
      category: "dentistry",
      image: "https://picsum.photos/800/600?random=21",
      alt: "Pet dentistry",
    },
    {
      id: 6,
      title: "Training Class",
      description: "Group training session for energetic dogs.",
      category: "training",
      image: "https://picsum.photos/800/600?random=22",
      alt: "Dog training",
    },
    {
      id: 7,
      title: "Pharmacy Pick-up",
      description: "Selecting medications from our pet pharmacy.",
      category: "pharmacy",
      image: "https://picsum.photos/800/600?random=23",
      alt: "Pet pharmacy",
    },
    {
      id: 8,
      title: "Surgical Recovery",
      description: "Post-operative care after elective surgery.",
      category: "surgery",
      image: "https://picsum.photos/800/600?random=24",
      alt: "Pet surgery recovery",
    },
    {
      id: 9,
      title: "Diagnostic Imaging",
      description: "Advanced X-ray for precise diagnosis.",
      category: "diagnostics",
      image: "https://picsum.photos/800/600?random=25",
      alt: "Pet diagnostic imaging",
    },
    {
      id: 10,
      title: "Parasite Prevention",
      description: "Applying flea and tick control treatment.",
      category: "prevention",
      image: "https://picsum.photos/800/600?random=26",
      alt: "Parasite control",
    },
    {
      id: 11,
      title: "Nutrition Consultation",
      description: "Discussing custom diet plans for pets.",
      category: "nutrition",
      image: "https://picsum.photos/800/600?random=27",
      alt: "Pet nutrition",
    },
    {
      id: 12,
      title: "Daycare Playtime",
      description: "Socialization during daycare hours.",
      category: "daycare",
      image: "https://picsum.photos/800/600?random=28",
      alt: "Pet daycare",
    },
  ];

  const categories = [
    { id: "all", name: "All Moments" },
    { id: "consultations", name: "Consultations" },
    { id: "vaccinations", name: "Vaccinations" },
    { id: "grooming", name: "Grooming" },
    { id: "boarding", name: "Boarding" },
    { id: "dentistry", name: "Dentistry" },
    { id: "training", name: "Training" },
    { id: "pharmacy", name: "Pharmacy" },
    { id: "surgery", name: "Surgery" },
    { id: "diagnostics", name: "Diagnostics" },
    { id: "prevention", name: "Prevention" },
    { id: "nutrition", name: "Nutrition" },
    { id: "daycare", name: "Daycare" },
  ];

  const filteredImages =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const openModal = (image) => {
    const idx = filteredImages.findIndex((i) => i.id === image.id);
    setSelectedIndex(idx);
  };

  const closeModal = () => {
    setSelectedIndex(-1);
  };

  const prevImage = () => {
    setSelectedIndex(
      (prev) => (prev - 1 + filteredImages.length) % filteredImages.length
    );
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const currentImage =
    selectedIndex >= 0 ? filteredImages[selectedIndex] : null;

  return (
    <main className="bg-gray-50 min-h-screen antialiased">
      {/* Header Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] text-center">
          <h6 className="text-sm text-[#2CA58D] font-normal uppercase tracking-wider mb-2">
            Gallery
          </h6>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Capturing Moments of Care & Joy
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our gallery of heartwarming moments, showcasing the love,
            care, and professional services we provide to pets and their
            families at The Animal Doctor.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%]">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 font-medium rounded-full transition-all duration-300 ${
                  filter === category.id
                    ? "bg-[#2CA58D] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openModal(image)}
              >
                <div className="relative h-64 md:h-80">
                  <Image
                    src={image.image}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white w-full">
                      <h3 className="font-semibold text-lg">{image.title}</h3>
                      <p className="text-sm opacity-90">{image.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <span className="inline-block px-3 py-1 bg-[#2CA58D]/10 text-[#2CA58D] text-xs font-medium rounded-full">
                    {categories.find((cat) => cat.id === image.category)?.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <p className="text-center text-gray-600 mt-8 col-span-full">
              No images found in this category.
            </p>
          )}
        </div>
      </section>

      {/* Modal for Full Image View */}
      {currentImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-6xl max-h-full flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
            >
              <svg
                className="h-6 w-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Main Image */}
            <div className="relative w-full h-[80vh] mb-4">
              <Image
                src={currentImage.image}
                alt={currentImage.alt}
                fill
                className="object-contain rounded-xl"
                sizes="100vw"
                priority
              />
            </div>

            {/* Details and Thumbnails */}
            <div className="flex flex-col md:flex-row gap-6 items-start bg-black/20 backdrop-blur-sm rounded-b-xl p-4 md:p-6">
              {/* Details */}
              <div className="flex-1 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {currentImage.title}
                </h3>
                <p className="text-gray-300 mb-4">{currentImage.description}</p>
                <span className="inline-block px-3 py-1 bg-[#2CA58D]/20 text-[#2CA58D] text-sm font-medium rounded-full">
                  {
                    categories.find((cat) => cat.id === currentImage.category)
                      ?.name
                  }
                </span>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 overflow-x-auto flex-1 max-w-md">
                {filteredImages.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => setSelectedIndex(idx)}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === selectedIndex
                        ? "border-white ring-2 ring-[#2CA58D]"
                        : "border-transparent"
                    }`}
                  >
                    <Image
                      src={img.image}
                      alt={img.title}
                      fill
                      className="object-cover cursor-pointer hover:opacity-80"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Back to Top or CTA */}
      {/* <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%]  text-center">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-[#2CA58D] hover:bg-[#1a7461] text-white font-medium rounded-lg transition-all duration-300 shadow-lg"
          >
            Book a Service
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
          </Link>
        </div>
      </section> */}
    </main>
  );
}
