// app/blog/[slug]/page.jsx
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    slug: "top-5-tips-for-new-pet-owners",
    title: "Top 5 Tips for New Pet Owners",
    content:
      "Welcoming a new pet into your home is an exciting adventure filled with joy, but it also comes with responsibilities. As veterinarians at The Animal Doctor, we've compiled our top 5 tips to help new pet owners start on the right foot.\n\n1. Schedule a Wellness Check: Bring your new pet for a comprehensive exam to establish a health baseline.\n\n2. Proper Nutrition: Choose age-appropriate, high-quality food and establish a feeding schedule.\n\n3. Socialization and Training: Expose your pet to new experiences gradually and start basic training early.\n\n4. Preventive Care: Stay up-to-date on vaccinations, parasite prevention, and dental care.\n\n5. Create a Safe Environment: Pet-proof your home and provide plenty of mental stimulation.",
    image: "https://placedog.net/1200x600?id=101",
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
    content:
      "Regular veterinary visits are essential for maintaining your pet's health and catching potential issues before they become serious. At The Animal Doctor, we recommend annual or bi-annual check-ups depending on your pet's age and health status.\n\nDuring these visits, we perform thorough physical exams, update vaccinations, screen for parasites, and discuss any concerns you may have. Early detection of conditions like dental disease, obesity, or heart problems can significantly improve outcomes and quality of life.\n\nDon't wait for symptoms to appear – preventive care is key to a long, happy life for your pet.",
    image: "https://placedog.net/1200x600?id=34",
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
    content:
      "Selecting the right food for your pet is crucial for their health and well-being. At The Animal Doctor, we help pet owners navigate the confusing world of pet nutrition.\n\nConsider factors like your pet's age, breed, activity level, and any health conditions. Look for foods with high-quality proteins, balanced nutrients, and minimal fillers. Avoid artificial colors, flavors, and preservatives.\n\nOur pet canteen offers a curated selection of premium foods, and our vets can provide personalized recommendations during consultations.",
    image: "https://placecats.com/1200/600",
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
    content:
      "Summer brings fun outdoor activities, but it also poses risks for our pets. Heatstroke, dehydration, and sunburn are common concerns.\n\nNever leave pets in cars, provide plenty of fresh water, limit exercise during peak heat hours, and use pet-safe sunscreen on exposed areas. Watch for signs of overheating like excessive panting or lethargy.\n\nOur clinic offers advice on summer grooming and flea/tick prevention to keep your pets comfortable all season long.",
    image: "https://placedog.net/1200x600?id=19",
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
    content:
      "Introducing a new pet to your existing family members requires patience and planning. Whether it's a new puppy meeting your resident cat or vice versa, gradual introductions are key.\n\nStart with scent swapping, then supervised short meetings, and gradually increase interaction time. Provide separate spaces and resources to reduce competition.\n\nOur behavior specialists can offer tailored advice, and our training classes help build positive associations.",
    image: "https://placecats.com/1200/600",
    alt: "Cat and dog meeting",
    date: "June 10, 2025",
    author: "Dr. Sarah Johnson",
    category: "Behavior",
    tags: ["introductions", "multi-pet homes", "behavior"],
  },
  // Add more posts as needed
];

const relatedPosts = blogPosts.slice(0, 3); // Just using first three as example

export default function BlogPost({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <main className="bg-gray-50 min-h-screen antialiased py-16">
        <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Post Not Found</h1>
          <p className="mt-4 text-gray-600">
            Sorry, we couldn't find the blog post you're looking for.
          </p>
          <Link
            href="/blog"
            className="mt-6 inline-block text-[#556a2d] font-medium hover:underline"
          >
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-50 min-h-screen  antialiased">
      {/* Header Section */}
      <section className="bg-white pb-3 md:pb-6 pt-28 md:pt-32">
        <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] ">
          <Link
            href="/blog"
            className="inline-flex items-center text-[#556a2d] font-medium mb-4 hover:underline"
          >
            <svg
              className="mr-2 h-4 w-4"
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
            Back to Blog
          </Link>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 text-center md:text-left">
            {post.title}
          </h1>
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <span>{post.date}</span>
            <span>•</span>
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.category}</span>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%]  grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Post Content */}
          <article className="lg:col-span-2 space-y-8">
            <Image
              src={post.image}
              alt={post.alt}
              width={1200}
              height={600}
              className="w-full h-auto rounded-2xl shadow-xl"
              priority
            />
            <div className="prose prose-lg max-w-none text-gray-800 whitespace-pre-wrap">
              {post.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#556a2d]/10 text-[#556a2d] text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* Comments Section Placeholder */}
            <div className="mt-12 bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Comments
              </h3>
              <p className="text-gray-600">
                No comments yet. Be the first to comment!
              </p>
              {/* Add comment form here if needed */}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Author Bio */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                About the Author
              </h3>
              <div className="flex items-center space-x-4">
                <Image
                  src={`https://picsum.photos/100/100?random=${post.id}`}
                  alt={post.author}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{post.author}</h4>
                  <p className="text-sm text-gray-600">
                    Veterinarian at The Animal Doctor
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                {post.author} is passionate about pet health and education, with
                over 10 years of experience in veterinary medicine.
              </p>
            </div>

            {/* Related Posts */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Related Posts
              </h3>
              <ul className="space-y-4">
                {relatedPosts.map((related) => (
                  <li key={related.id}>
                    <Link
                      href={`/blog/${related.slug}`}
                      className="flex space-x-4 hover:text-[#556a2d] transition-colors"
                    >
                      <Image
                        src={related.image}
                        alt={related.alt}
                        width={80}
                        height={80}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {related.title}
                        </h4>
                        <p className="text-sm text-gray-500">{related.date}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Categories
              </h3>
              <ul className="space-y-2">
                {[
                  "Pet Care",
                  "Health",
                  "Nutrition",
                  "Seasonal Care",
                  "Behavior",
                ].map((cat) => (
                  <li key={cat}>
                    <Link
                      href={`/blog?category=${cat.toLowerCase()}`}
                      className="text-[#556a2d] hover:underline"
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-[#556a2d] p-6 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h3>
              <p className="mb-4">
                Get the latest pet care tips delivered to your inbox.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full p-3 rounded-lg text-gray-900 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-white text-[#556a2d] font-medium rounded-lg hover:bg-gray-100 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
