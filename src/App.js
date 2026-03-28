import { useState, useEffect } from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";
import "./App.css";

const API_KEY = "822b0102d7eb93ec30ab6e762b1bce4c";

function App() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetchMovies();
  }, [currentPage, query, sort]);

  const fetchMovies = async () => {
    let url;

    if (query === "") {
      url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=${sort || "popularity.desc"}&page=${currentPage}`;
    } else {
      url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${currentPage}`;
    }

    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
    setTotalPages(data.total_pages);
  };

  return (
    <div>
      <Header setQuery={setQuery} setSort={setSort} />
      <MovieList movies={movies} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;