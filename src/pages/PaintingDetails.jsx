import { useLoaderData } from "react-router-dom";

const PaintingDetails = () => {
  const data = useLoaderData();
  const {
    category,
    date,
    detail,
    email,
    medium,
    prompt,
    thumb,
    title,
    type,
    url,
  } = data;

  if (!data) {
    return <p>Loading...</p>; // Fallback message if data is not yet loaded
  }

  return (
    <div className="container mx-auto p-8 max-w-5xl">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Painting Image */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={url || "fallback-image-url.jpg"}
            alt={title || "Painting"}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Painting Details */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">
            {title || "Untitled"}
          </h2>
          <p className="text-gray-600">{detail || "No details available."}</p>

          {/* Additional Information */}
          <div className="space-y-3">
            <p className="text-gray-700">
              <span className="font-semibold">Category:</span>{" "}
              {category || "N/A"}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Medium:</span> {medium || "N/A"}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Type:</span> {type || "N/A"}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Date:</span> {date || "N/A"}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span> {email || "N/A"}
            </p>
          </div>

          {/* Prompt */}
          {prompt && (
            <div className="border-t pt-4 mt-4">
              <h3 className="text-lg font-semibold text-gray-800">Prompt</h3>
              <p className="text-gray-600">{prompt}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaintingDetails;
