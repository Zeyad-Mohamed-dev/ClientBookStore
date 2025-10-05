import React, { useState } from "react";
import axios from "axios";

export default function AdminBookForm() {
  const [formData, setFormData] = useState({
    title: "",
    bookCoverImage: "",
    description: "",
    price: 0,
    genre: "",
    puplishedYear: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token"); 
      const res = await axios.post("http://localhost:3000/books", formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (res.status === 201 || res.status === 200) {
        setMessage("Book created successfully!");
        setFormData({
          title: "",
          bookCoverImage: "",
          description: "",
          price: 0,
          genre: "",
          puplishedYear: ""
        });
      }
    } catch (error) {
      console.error(error);
      setMessage("Error creating book. please try again or contact support.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Create New Book</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>


        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="form-control"
            min="0"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Genre</label>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Published Year</label>
          <input
            type="number"
            name="puplishedYear"
            value={formData.puplishedYear}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Create Book
        </button>
      </form>
    </div>
  );
}
