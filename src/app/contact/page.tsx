import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/blog-pic.webp"
          alt="contact bg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-blue-900/60"></div>
      </div>

      <div className="max-w-lg sm:max-w-xl md:max-w-2xl w-full p-8 sm:p-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-3xl shadow-2xl backdrop-blur-lg">
        <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-6 sm:mb-8">
          Contact Us
        </h1>
        <form className="space-y-6">
          <div>
            <label className="block text-base sm:text-lg font-medium text-white mb-2">
              Your Name:
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-5 py-3 mt-2 bg-white/80 text-black border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 shadow-md hover:shadow-lg"
            />
          </div>

          <div>
            <label className="block text-base sm:text-lg font-medium text-white mb-2">
              Your Email:
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 mt-2 bg-white/80 text-black border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 shadow-md hover:shadow-lg"
            />
          </div>

          <div>
            <label className="block text-base sm:text-lg font-medium text-white mb-2">
              Your Message:
            </label>
            <textarea
              placeholder="Write your message here"
              className="w-full px-5 py-3 mt-2 bg-white/80 text-black border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 shadow-md hover:shadow-lg"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
