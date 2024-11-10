import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import PaintingCard from "../components/PaintingCard";
import axios from "axios";

const Paintings = () => {
  // Initialize local state with the data from the loader
  const initialData = useLoaderData();
  const [paintings, setPaintings] = useState(initialData);

  // Function to handle delete action
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/paintings/${id}`);
      if (res.data.status === "success") {
        setPaintings((prevPaintings) =>
          prevPaintings.filter((painting) => painting._id !== id)
        );
      }
    } catch (error) {
      console.error("Failed to delete painting:", error);
    }
  };

  if (!paintings || paintings.length === 0) {
    return (
      <p className="text-center text-gray-600 p-6">No paintings available.</p>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paintings.map((painting) => (
          <PaintingCard
            key={painting._id}
            painting={painting}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Paintings;
