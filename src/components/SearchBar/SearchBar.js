import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        placeholder="Search Wikipedia"
        onInput={(e) => setInputText(e.target.value)}
      />
      <input type="submit" value="Search" />
    </form>
  );
}

export default SearchBar;
