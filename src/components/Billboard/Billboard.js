import React from "react";
import "./style.css";
import MovieSummary from "../MovieSummary";
import Paginator from "../Paginator/Paginator";

export default function Billboard({ movies, currentPage, onPagination}) {

  let itemsNumber = movies.length;
  const pageSize = 3;

  return (
    <div className="container">
      <div className="row mb-5">
        {itemsNumber > 0 ? (
          movies
            .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
            .map(({ id, title, posterPath }) => (
              <div className="col-sm-4 col-md-3 col-lg-2" key={id}>
                <MovieSummary title={title} posterPath={posterPath} />
              </div>
            ))
        ) : (
          <p className="billboard__message">
            There are no results, please try with another filters.
          </p>
        )}
      </div>
      <div className="w-100 d-flex justify-content-center">
        <Paginator
          itemsNumber={itemsNumber}
          pageSize={pageSize}
          currentPage={currentPage}
          onPagination={onPagination}
        />
      </div>
    </div>
  );
}
