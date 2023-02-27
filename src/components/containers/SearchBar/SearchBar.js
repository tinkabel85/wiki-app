import React, { useState } from "react";
import "./SearchBar.scss";

function SearchBar({onSearch}) {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText) {
      return;
    }
    onSearch(inputText);
    setInputText("");
  };


  return (
    <form onSubmit={handleSubmit} className="SearchBar">
      <input
        type="text"
        className="SearchBar__input"
        value={inputText}
        placeholder="Search Wikipedia"
        onInput={(e) => setInputText(e.target.value)}
      />
      <input type="submit" value="Search" className="SearchBar__btn"  />
    </form>
  );
}

export default SearchBar;
