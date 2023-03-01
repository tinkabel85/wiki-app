import { useState, useMemo } from "react";
import wikiSearchResource from "../../../Api/wikiSearchResource";
import ArticleContent from "../../components/ArticleContent/ArticleContent";
import SearchResult from "../../components/SearchResults/SearchResults";
import SearchBar from "../SearchBar/SearchBar";
import "./App.scss";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const searchResultsResource = useMemo(
    () => wikiSearchResource(searchInput),
    [searchInput]
  );

  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleClick = (article) => {
    setSelectedArticle(article);
  };

  return (
    <>
      <div className="App">
        <SearchBar onSearch={setSearchInput} />
        <SearchResult searchResultsResource={searchResultsResource} onClick={handleClick} />
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
