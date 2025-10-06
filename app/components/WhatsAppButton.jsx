"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [hasPlayedSound, setHasPlayedSound] = useState(false);
  const audioRef = useRef(null);
  const phoneNumber = "+254799118283";

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      // Try muted autoplay (allowed in all browsers)
      audio.muted = true;
      audio.play().catch(() => {});

      // After a short delay, unmute and replay (to simulate a “pop-in”)
      setTimeout(() => {
        audio.muted = false;
        audio.currentTime = 0;
        audio.play().catch(() => {});
      }, 500); // small delay (0.5s)
    }
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    // Play sound on toggle for feedback
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  const handleSend = () => {
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber.replace(
        /[^0-9]/g,
        ""
      )}?text=${encodedMessage}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setMessage("");
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Hidden Audio Element for Bubble Sound */}
      <audio ref={audioRef} src="/sounds/chat-bubble.mp3" preload="auto">
        Your browser does not support the audio element.
      </audio>

      <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
        {/* Floating Button with Popping/Bouncing Animation */}
        <button
          onClick={handleToggle}
          className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-b from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 active:scale-95 group animate-bounce-slow hover:cursor-pointer"
          title="Chat with our vet team"
          aria-label="Open WhatsApp chat"
        >
          {/* Attention-grabbing pulse ring */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75 group-hover:opacity-100"></div>
          <div
            className="absolute inset-0 rounded-full bg-green-500/20 animate-ping"
            style={{ animationDelay: "1s" }}
          ></div>
          <Image
            src="/icon-whatsapp.png"
            alt="WhatsApp"
            width={24}
            height={24}
            className="relative z-10 drop-shadow-md"
            priority
          />
        </button>

        {/* Pop-up Chat Window with Slide-in Animation */}
        {isOpen && (
          <div className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform translate-y-4 animate-slide-down transition-all duration-300 ease-out">
            {/* Header with Icon and Gradient */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/5"></div>
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center space-x-3">
                  {/* <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Image
                      src="/icon-whatsapp.png"
                      alt="WhatsApp"
                      width={20}
                      height={20}
                    />
                  </div> */}
                  <div>
                    <h3 className="text-lg font-semibold">
                      Animal Doctor Support
                    </h3>
                    <p className="text-green-100 text-sm">
                      We're here to help your pet!
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleToggle}
                  className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/20 bg-white/10 transition-colors hover:cursor-pointer"
                  aria-label="Close chat"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Message Input Area */}
            <div className="p-6 space-y-4">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message... (e.g., My dog needs a check-up)"
                className="text-sm w-full h-24 p-4 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400 text-gray-800 leading-relaxed"
                aria-label="WhatsApp message input"
                rows={4}
              />
              <button
                onClick={handleSend}
                disabled={!message.trim()}
                className={`group w-full py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-200 transform ${
                  message.trim()
                    ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-green-500/25 hover:scale-[1.02] active:scale-[0.98] hover:cursor-pointer"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Send Message
                {/* SVG Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;
