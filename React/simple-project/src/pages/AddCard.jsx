// src/pages/AddCard.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCard = () => {
  const [form, setForm] = useState({
    title: "",
    summary: "",
    image: "",
    body: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // send cookies
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to add card");

      navigate("/"); // redirect to homepage
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Add New Card</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="w-full border p-2 rounded"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="w-full border p-2 rounded"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="w-full border p-2 rounded"
          value={form.image}
          onChange={handleChange}
        />
        <textarea
          name="body"
          placeholder="Body"
          className="w-full border p-2 rounded"
          rows={5}
          value={form.body}
          onChange={handleChange}
          required
        ></textarea>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Card
        </button>
      </form>
    </div>
  );
};

export default AddCard;
