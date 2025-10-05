// app/our-blogs/page.jsx
"use client";
import { useState } from "react";
import Link from "next/link";

export default function OurBlog() {
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts = [
    {
      id: 1,
      slug: "top-5-tips-for-new-pet-owners",
      title: "Top 5 Tips for New Pet Owners",
      excerpt:
        "Welcoming a new pet into your home is exciting! Here are our top tips to ensure a smooth transition and happy life together.",
      image: "https://picsum.photos/600/400?random=12",
      alt: "New pet owner with puppy",
      date: "October 1, 2025",
      author: "Dr. Jane Smith",
      category: "Pet Care",
      tags: ["new pets", "tips", "beginners"],
    },
    {
      id: 2,
      slug: "importance-of-regular-vet-visits",
      title: "The Importance of Regular Vet Visits",
      excerpt:
        "Regular check-ups can catch health issues early and keep your pet thriving. Learn why they're crucial for your furry friend.",
      image: "https://picsum.photos/600/400?random=13",
      alt: "Vet examining a cat",
      date: "September 15, 2025",
      author: "Dr. John Doe",
      category: "Health",
      tags: ["vet visits", "preventive care", "check-ups"],
    },
    {
      id: 3,
      slug: "choosing-the-right-pet-food",
      title: "Choosing the Right Pet Food: A Guide",
      excerpt:
        "With so many options available, selecting the best food for your pet can be overwhelming. Here's what you need to know.",
      image: "https://picsum.photos/600/400?random=14",
      alt: "Various pet food options",
      date: "August 20, 2025",
      author: "Dr. Emily Brown",
      category: "Nutrition",
      tags: ["pet food", "nutrition", "diet"],
    },
    {
      id: 4,
      slug: "summer-safety-tips-for-pets",
      title: "Summer Safety Tips for Pets",
      excerpt:
        "As temperatures rise, keep your pets safe and comfortable with these essential summer care tips.",
      image: "https://picsum.photos/600/400?random=15",
      alt: "Dog playing in water",
      date: "July 5, 2025",
      author: "Dr. Michael Lee",
      category: "Seasonal Care",
      tags: ["summer", "safety", "heat"],
    },
    {
      id: 5,
      slug: "introducing-a-new-pet-to-your-home",
      title: "Introducing a New Pet to Your Home",
      excerpt:
        "Bringing home a new furry friend? Learn how to make introductions smooth for everyone involved.",
      image: "https://picsum.photos/600/400?random=16",
      alt: "Cat and dog meeting",
      date: "June 10, 2025",
      author: "Dr. Sarah Johnson",
      category: "Behavior",
      tags: ["introductions", "multi-pet homes", "behavior"],
    },
    // Add more posts as needed
  ];

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="bg-gray-50 min-h-screen antialiased">
      {/* Header Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%]  text-center">
          <h6 className="text-sm text-[#2CA58D] font-normal uppercase tracking-wider mb-2">
            Our Blog
          </h6>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pet Care Insights & Advice
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest tips, news, and expert advice from The
            Animal Doctor team. Our blog covers everything from health and
            nutrition to behavior and seasonal care.
          </p>
          <div className="mt-8 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2CA58D]"
            />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
              >
                <img
                  src={post.image}
                  alt={post.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.category}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 hover:text-[#2CA58D] transition-colors">
                    <Link
                      href={`/our-blogs/${post.slug}`}
                      className="hover:underline"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                  <Link
                    href={`/our-blogs/${post.slug}`}
                    className="inline-flex items-center text-[#2CA58D] font-medium hover:underline"
                  >
                    Read More
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
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {filteredPosts.length === 0 && (
            <p className="text-center text-gray-600 mt-8">
              No posts found matching your search.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
