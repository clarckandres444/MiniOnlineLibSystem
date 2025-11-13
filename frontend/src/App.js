import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import BookList from "./Pages/BookList";
import AddBook from "./Pages/AddBook";
import './style.css';

function App() {
  const role = localStorage.getItem("role");

  return (
    <Router>
      <nav>
        <Link to="/books">View Books</Link>{" "}
        {role === "admin" && <Link to="/add">Add Book</Link>}{" "}
        <Link to="/login">Login</Link>{" "}
        <Link to="/register">Register</Link>
      </nav>

      <Routes>
        <Route path="/books" element={<BookList />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
