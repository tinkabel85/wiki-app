import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    fetch(
      `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${query}&exintro=&prop=extracts|pageimages&format=json&origin=*`
    )
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(Object.values(data.query.pages));
        console.log(data.query);
      })
      .catch((err) => console.log(err));
  };

  // useEffect(() => {
  //   fetch(
  //     `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=hamburg&exintro=&prop=extracts|pageimages&format=json&origin=*`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setSearchResults(Object.values(data.query.pages));
  //       console.log(data.query.pages);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <>
      <div className="App">
        <SearchBar onSearch={handleSearch} />
        <ul>
          {searchResults.map((result) => (
            <li>{JSON.stringify(result.title)}</li>
          ))}{" "}
        </ul>
      </div>
    </>
  );
}

export default App;
