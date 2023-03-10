import React from "react";
import "./SearchResults.scss";

function SearchResults({ searchResults, onClick }) {
  const handleClick = (e, article) => {
    e.preventDefault();
    onClick(article)
  };
  return (
    <ul className="SearchResults">
      {searchResults.map((result) => (
        <li key={result.pageid}>
          <a
            href="/"
            onClick={(e) => {
              handleClick(e, result);
            }}
          >
            {result.title}
          </a>{" "}
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
