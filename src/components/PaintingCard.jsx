import React from "react";
import { Link } from "react-router-dom";

const PaintingCard = ({ painting, onDelete }) => {
  const handleDeleteClick = () => {
    if (window.confirm("Are you sure you want to delete this painting?")) {
      onDelete(painting._id); // Calls the delete function from the parent component
    }
  };

  return (
    <div className="relative hover:mt-2 transition-all duration-200 rounded-lg shadow-lg overflow-hidden">
      <img
        src={painting?.url || "fallback-image-url.jpg"}
        alt={painting?.title || "Painting"}
        className="rounded-lg w-full h-full object-cover"
      />
      {/* Delete button in top-right corner */}
      <button
        onClick={handleDeleteClick}
        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-700 transition-colors duration-200 z-10"
      >
        X
      </button>
      <div className="rounded-lg absolute inset-0 w-full h-full bg-stone-600 opacity-0 hover:opacity-80 transition-all duration-200 flex flex-col gap-3 justify-center items-center">
        <p className="text-2xl text-center text-white font-semibold">{painting?.title}</p>
        <Link to={`/paintings/${painting._id}`}>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaintingCard;
