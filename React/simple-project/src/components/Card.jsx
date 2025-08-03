import React from "react";

const API_URL = "http://localhost:5000/api/cards";

const Card = ({ id,image, title, description, onDelete }) => {
   const deleteCard = async () => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to delete");

      if (onDelete) onDelete(id); // update parent state if callback provided
    } catch (err) {
      console.error("Error deleting card:", err.message);
    }
  };
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-50 object-cover" />
      <div className="p-2.5">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <div className="flex">
          <div className="w-72">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
            Learn More
            </button>
          </div>
          <button onClick={deleteCard}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="text-black-600 hover:text-black-800 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 7h12M9 7v10m6-10v10M4 7h16M10 3h4a1 1 0 011 1v1H9V4a1 1 0 011-1zM5 7v13a2 2 0 002 2h10a2 2 0 002-2V7"
              />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Card;
