import Image from "next/image";
import Link from "next/link";

const TestimonialsAndCTA = () => {
  return (
    <div className="w-full bg-gray-50 py-8 px-6 lg:px-8">
      {/* Call to Action */}
      <div className="max-w-5xl mx-auto  bg-[#2CA58D] text-white rounded-2xl shadow-lg p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            Ready to Give Your Pet the Best Care?
          </h3>
          <p className="text-gray-100">
            Book an appointment today and let our experienced team keep your
            furry friends healthy and happy.
          </p>
        </div>
        <Link
          href="/services"
          className="bg-white text-[#2CA58D] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-md"
        >
          Book Appointment
        </Link>
      </div>
      {/* Testimonials */}
      <div className="max-w-7xl mx-auto text-center mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mb-8">
          We’re proud to provide excellent care for pets and peace of mind for
          their families.
        </p>

        {/* Testimonial Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-left border-t-4 border-[#2CA58D]">
            <p className="text-gray-700 italic mb-4">
              “The Animal Doctor saved my dog’s life. Their compassion and
              expertise made all the difference.”
            </p>
            <div className="flex items-center">
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/pastel-glyph/64/person-male--v1.png"
                alt="person-male--v1"
                className="rounded-full mr-3"
              />
              <div>
                <h4 className="text-gray-900 font-semibold">Sarah W.</h4>
                <p className="text-gray-500 text-sm">Pet Owner</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-left border-t-4 border-[#2CA58D]">
            <p className="text-gray-700 italic mb-4">
              “Friendly staff and top-notch facilities. My cat actually enjoys
              going to the vet now!”
            </p>
            <div className="flex items-center">
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/pastel-glyph/64/person-male--v1.png"
                alt="person-male--v1"
                className="rounded-full mr-3"
              />
              <div>
                <h4 className="text-gray-900 font-semibold">James K.</h4>
                <p className="text-gray-500 text-sm">Cat Lover</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-left border-t-4 border-[#2CA58D]">
            <p className="text-gray-700 italic mb-4">
              “Professional, caring, and reliable. I trust them completely with
              my pets’ health.”
            </p>
            <div className="flex items-center">
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/pastel-glyph/64/person-male--v1.png"
                alt="person-male--v1"
                className="rounded-full mr-3"
              />
              <div>
                <h4 className="text-gray-900 font-semibold">Linda M.</h4>
                <p className="text-gray-500 text-sm">Dog Parent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsAndCTA;
