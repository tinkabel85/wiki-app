import React from "react";
import "./ArticleContent.scss";

function ArticleContent({ article, handleReturn }) {
  return (
    <div className="ArticleContent">
      <h2 className="ArticleContent__title">{article.title}</h2>
      <p
        dangerouslySetInnerHTML={{ __html: article.extract }}
        className="ArticleContent__text"
      ></p>
      { article.thumbnail &&
        <div className="ArticleContent__img">
          <img src={article.thumbnail.source} alt={article.title} />
        </div>}
      <button onClick={handleReturn} className="ArticleContent__btn">
        Close
      </button>
    </div>
  );
}

export default ArticleContent;
