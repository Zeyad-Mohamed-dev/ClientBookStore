import React, { useEffect, useState } from "react";
import Book from "../components/Book";
import axios from "axios";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState({});
  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/books");
        if (res.status === 200) {
          // console.log(res.data);
          setBooks(res.data);
        }
      } catch (e) {
        console.error("error happend fetching books");
      }
    };
    const getUserInfo = async () => {
      try {
        const res = await axios.get("http://localhost:3000/user/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (res.status === 200) {
          // console.log(res.data);
          console.log(res.data);
          setUser(res.data);
        }
      } catch (e) {
        console.error("error happend fetching books");
      }
    };
    getAllBooks();
    getUserInfo();
  }, []);
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/books/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.status === 200) {
        setBooks((prevBooks) => prevBooks.filter((book) => book._id === id));
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="d-flex w-100 flex-wrap flex-row m-auto">
      {books.length > 0 ? (
        books.map((book) => (
          <Book book={book} role={user.role} onDelete={handleDelete} />
        ))
      ) : (
        <h1>No books availabe</h1>
      )}
    </div>
  );
}
