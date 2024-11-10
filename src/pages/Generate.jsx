import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Title from "../components/Title";
import Loading from "./Loading";
import { AuthContext } from "../providers/AuthProvider";

const Generate = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Painting types and categories options
  const paintingTypes = [
    "Oil Painting",
    "Watercolor Painting",
    "Acrylic Painting",
    "Pastel Painting",
    "Digital Painting",
    "Ink Wash Painting",
    "Gouache Painting",
    "Spray Paint Art",
    "Charcoal Drawing",
    "Fresco Painting",
    "Mixed Media",
    "Tempera Painting",
    "Encaustic Painting",
    "Sand Painting",
    "Spray Painting",
    "Pointillism",
    "Mosaic Art",
    "Collage Art",
    "Decalcomania",
  ];

  const paintingCategories = [
    "Portrait",
    "Landscape",
    "Still Life",
    "Abstract",
    "Surrealism",
    "Impressionism",
    "Expressionism",
    "Pop Art",
    "Realism",
    "Cubism",
    "Minimalism",
    "Conceptual Art",
    "Fantasy",
    "Narrative Art",
    "Historical Art",
    "Symbolism",
    "Neo-Expressionism",
    "Photorealism",
    "Hyperrealism",
    "Futurism",
    "Constructivism",
    "Dadaism",
    "Fauvism",
    "Suprematism",
    "Op Art",
    "Art Deco",
  ];

  const [activeCategory, setActiveCategory] = useState("");
  const [activeType, setActiveType] = useState("");
  const [loading, setLoading] = useState(false);

  // Form validation
  const validateForm = (prompt) => {
    if (!activeCategory) {
      Swal.fire("Error", "Please select a category", "error");
      return false;
    }
    if (!activeType) {
      Swal.fire("Error", "Please select a type", "error");
      return false;
    }
    if (prompt.length < 3 || prompt.length > 30) {
      Swal.fire("Error", "Prompt must be between 5 and 30 characters", "error");
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const prompt = e.target.prompt.value;

    if (!validateForm(prompt)) return;

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/paintings/generate",
        {
          prompt,
          type: activeType,
          category: activeCategory,
          email: user?.email,
        }
      );

      if (response?.data?.insertedId) {
        Swal.fire("Success", "Painting generated", "success");
        navigate(`/paintings/${response.data.insertedId}`);
      }
    } catch (error) {
      Swal.fire("Error", "Failed to generate painting", "error");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="container">
      <Title>Generate Paintings</Title>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center gap-4 flex-wrap mt-10"
      >
        <input
          name="prompt"
          type="text"
          placeholder="Describe the painting you'd like to generate"
          className="input input-bordered w-10/12"
        />
        <button type="submit" className="btn btn-primary">
          Generate
        </button>
      </form>

      <div className="grid md:grid-cols-2 py-10">
        <div>
          <h2 className="text-xl font-bold">Choose a category</h2>
          <div className="space-x-5 space-y-2">
            {paintingCategories.map((category) => (
              <button
                key={category}
                className={`btn ${
                  activeCategory === category ? "bg-orange-400" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold">Choose a type</h2>
          <div className="space-x-5 space-y-2">
            {paintingTypes.map((type) => (
              <button
                key={type}
                className={`btn ${activeType === type ? "bg-orange-400" : ""}`}
                onClick={() => setActiveType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generate;
