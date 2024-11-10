import React from "react";
import Lottie from "lottie-react";
import animation from "../assets/cooking.json";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section
      className="bg-cover bg-fixed"
      style={{ backgroundImage: "url(/bg.png)" }}
    >
      <div
        id="banner"
        className="flex min-h-screen bg-white bg-opacity-90 flex-col-reverse md:flex-row items-center justify-around p-6"
      >
        {/* Text Content */}
        <div className="space-y-6 text-center md:text-start max-w-lg">
          <h1 className="text-5xl font-bold text-gray-800">
            Transform <span className="text-blue-500">Your Words</span> into{" "}
            <span className="text-green-500">Masterpieces</span> with Pixel
            Froge
          </h1>
          <p className="text-lg text-gray-700 max-w-md">
            Pixel Froge uses AI to bring your creative ideas to life. Just type
            in your vision, and let our AI transform it into a stunning
            painting.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800">
            Art Created by You, Enhanced by AI
          </h2>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
              <Link to="/generate">Start Creating</Link>
            </button>
            <button className="px-6 py-3 bg-gray-100 text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
              <Link to="/paintings">Explore Gallery</Link>
            </button>
          </div>
        </div>

        {/* Animation */}
        <div className="max-w-md">
          <Lottie animationData={animation} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
