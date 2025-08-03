import { useEffect, useState } from "react";
import Card from "../components/Card";

const API_URL = "http://localhost:5000/api/cards";


const Home = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(API_URL, {
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch cards");
        }
        const data = await response.json();
        setCards(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
      <p className="text-lg mb-8">Explore the topics below to get started.</p>

      {loading && <p>Loading cards...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {cards.map((card, index) => (
          <Card
            id={card._id}
            image={card.image}
            title={card.title}
            description={card.description}
            onDelete={(id) => {
              setCards((prev) => prev.filter((card) => card._id !== id));
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
