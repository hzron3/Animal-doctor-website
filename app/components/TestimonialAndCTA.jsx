import Image from "next/image";
import Link from "next/link";

const TestimonialsAndCTA = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "The Animal Doctor saved my dog's life. Their compassion and expertise made all the difference during a scary time.",
      author: "Sarah W.",
      role: "Pet Owner",
      avatar: "https://picsum.photos/80/80?random=29&grayscale=false",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "Friendly staff and top-notch facilities. My cat actually enjoys going to the vet now—it's a miracle!",
      author: "James K.",
      role: "Cat Lover",
      avatar: "https://picsum.photos/80/80?random=30&grayscale=false",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "Professional, caring, and reliable. I trust them completely with my pets' health and well-being.",
      author: "Linda M.",
      role: "Dog Parent",
      avatar: "https://picsum.photos/80/80?random=31&grayscale=false",
      rating: 5,
    },
  ];

  const StarIcon = ({ className = "h-5 w-5 text-yellow-400" }) => (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <div className="max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] mx-auto bg-gray-50 py-8">
      {/* Call to Action */}
      <div className="bg-[#556a2d] text-white rounded-2xl shadow-xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl md:text-3xl  font-bold mb-3">
            Want Us to Call You Back?
          </h3>
          <p className="text-gray-100 text-sm md:text-base leading-relaxed">
            Let us know your details, and our friendly team will reach out
            shortly to discuss your pet’s care and answer any questions.
          </p>
        </div>
        <Link
          href="/contact-us"
          className="bg-white text-[#556a2d] px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Request a Callback
        </Link>
      </div>

      {/* Testimonials */}
      <div className=" mx-auto text-center mt-16">
        <h2 className="text-xl sm:text-3xl font-bold mb-4 text-gray-900">
          What Our <span className="text-[#556a2d]">Clients Say</span>
        </h2>

        <p className="text-gray-600 mb-8 md:mb-12 text-base md:text-lg">
          We're proud to provide excellent care for pets and peace of mind for
          their families. Don't just take our word for it—hear from our happy
          clients.
        </p>

        {/* Testimonial Cards */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-lg rounded-2xl p-6 md:p-8 text-left border-t-4 border-[#556a2d] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 text-base leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={64}
                  height={64}
                  className="rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="text-gray-900 font-semibold text-base">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsAndCTA;
