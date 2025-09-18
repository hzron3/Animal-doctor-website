import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex flex-col">
      {/* Center Content */}
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="bg-white text-gray-800 p-8 sm:p-10 rounded-2xl shadow-2xl text-center max-w-md w-full relative overflow-hidden">
          {/* Subtle Gradient Accent */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#2CA58D]/10 to-transparent rounded-2xl pointer-events-none"></div>

          {/* 404 Text */}
          <h1 className="text-7xl sm:text-8xl font-extrabold text-[#2CA58D] mb-4 drop-shadow-sm">
            404
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">
            Page Not Found
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-6 leading-relaxed">
            The page you are looking for may have been deleted, moved, or never
            existed. Let’s guide you back to safety!
          </p>

          {/* Go To Home Button */}
          <Link
            href="/"
            className="inline-block bg-[#2CA58D] text-white font-medium px-6 py-2.5 rounded-lg shadow-md hover:bg-[#249179] hover:shadow-lg transition-all duration-300"
          >
            Go To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
