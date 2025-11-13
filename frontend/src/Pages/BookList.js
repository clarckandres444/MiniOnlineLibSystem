import { useEffect, useState } from "react";
import api from "../api";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await api.get("/books");
        setBooks(res.data);
      } catch (err) {
        setMessage("Error fetching books.");
      }
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      {message && <p>{message}</p>}
      <ul>
        {books.map((b) => (
          <li key={b._id}>
            {b.title} by {b.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
