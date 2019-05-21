import React from "react";
import { ArticleViewWrapper } from "./styledArticleView";
import { Button } from "antd";

export default ({ article }) => {
  const HeaderImage = article.media[0]["media-metadata"].find(
    media => media.format === "Jumbo"
  );
  return (
    <ArticleViewWrapper bg={HeaderImage.url}>
      <div className="ArticleImage__Overlay">
        <h1 className="Article__Popularity">{article.views}</h1>
        <h1>{article.title}</h1>
        <p>{article.abstract}</p>
        <div className="Article__Meta">
          Published in
          <span className="highlight">{article.section}</span>
          on
          <span className="highlight">
            {article.published_date}
          </span>
        </div>
        <div className="Article__Meta">
          <span className="highlight">
            {article.byline}
          </span>
        </div>
        <div className="Article__Keywords">
            {article.adx_keywords.split(';').map(keyword => (
                <span key={keyword} className="Article__Keyword">{keyword}</span>
            ))}
        </div>
        <div className="Article__ReadMore">
          <Button
            href={article.url}
            target="_blank"
            type="primary"
            block={true}
          >
            READ FULL ARTICLE
          </Button>
        </div>
      </div>
    </ArticleViewWrapper>
  );
};
