import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Billboard from "./components/Billboard";
import Hero from "./components/Hero";

import peliculas from "./data/peliculas.json";
import Rating from "./components/Rating/Rating";

function App() {
  const [values, setValues] = useState({
    query: "",
    rating: 0,
    currentPage: 0,
  });

  const handleQuery = (query) => {
    setValues({ ...values, query: query.toLowerCase(), currentPage: 0 });
  };

  const handleRating = (rating) => {
    setValues({ ...values, rating: rating, currentPage: 0 });
  };

  const handlePagination = (index) => {
    setValues({ ...values, currentPage: index });
  };

  let filteredMovies;

  /\S/.test(values.query)
    ? (filteredMovies = peliculas.filter(({ title }) =>
        title.toLowerCase().includes(values.query)
      ))
    : (filteredMovies = peliculas);

  values.rating > 0 &&
    (filteredMovies = filteredMovies.filter(
      ({ voteAverage }) => voteAverage >= values.rating
    ));

  return (
    <div className="App">
      <Header />
      <Hero onQuery={handleQuery} />
      <Rating onRating={handleRating} />
      <Billboard movies={filteredMovies} currentPage={values.currentPage} onPagination={handlePagination} />
    </div>
  );
}

export default App;
