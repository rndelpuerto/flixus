import React from "react";
import "./style.css";
import SearchBox from "../SearchBox";

export default function Hero({ onQuery }) {
  return (
    <section className="hero jumbotron mb-5 text-center">
      <div className="container p-4">
        <h2 className="hero__title jumbotron-heading h2">
          Your favourites movies. Explained
        </h2>
        <p className="hero__subtitle  h3  mb-5">
          Figured out what happened. Then find out why.
        </p>
        <SearchBox onQuery={onQuery} />
      </div>
    </section>
  );
}
