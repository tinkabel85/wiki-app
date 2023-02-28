import { useState } from "react";
import "./App.scss";
import SearchResult from "../../components/SearchResults/SearchResults";
import ArticleContent from "../../components/ArticleContent/ArticleContent";
import SearchBar from "../SearchBar/SearchBar";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

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

  const handleClick = (article) => {
    setSelectedArticle(article);
  };

  return (
    <>
      <div className="App">
        <SearchBar onSearch={handleSearch} />
        <SearchResult searchResults={searchResults} onClick={handleClick} />
        {selectedArticle && (
          <ArticleContent
            article={selectedArticle}
            handleReturn={() => setSelectedArticle(null)}
          />
        )}
      </div>
    </>
  );
}

export default App;
