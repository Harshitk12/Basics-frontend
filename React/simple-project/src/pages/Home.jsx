import React from "react";
import Card from "../components/Card";

const cardData = [
  {
    title: "React Basics",
    description: "Learn components, props, and state in React.",
    image: "https://miro.medium.com/v2/resize:fit:1400/0*y6IcBe5J1AdALzXw.png"
  },
  {
    title: "Tailwind CSS",
    description: "Style your app with utility-first Tailwind classes.",
    image: "https://devonblog.com/wp-content/uploads/2022/06/tailwind-thumb.jpg"
  },
  {
    title: "React Router",
    description: "Implement routing in single-page React apps.",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*sUMqFUCDQecggwfr87SKSg.png"
  },
  {
    title: "Node Basics",
    description: "Learn backend and database integration",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgciwmDQPGLqXJxyYtL_-ZQ1TTiB_E8UDZNw&s"
  },
];

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
      <p className="text-lg mb-8">Explore the topics below to get started.</p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
