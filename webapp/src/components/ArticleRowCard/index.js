import React from "react";
import { StyledArticleRowCard } from "./styledArticleRowCard";
import { Button, Divider } from "antd";

export default ({ article, openArticle }) => {
  const HeaderImage = article.media[0]["media-metadata"].find(
    media => media.format === "Jumbo"
  );
  console.log(HeaderImage);
  return (
    <React.Fragment>
      <Divider>{article.views}</Divider>
      <StyledArticleRowCard
        headerImage={HeaderImage.url}
        onClick={() => openArticle(article.views)}
      >
        <div className="RowArticle__Header">
          <div className="RowArticle__Header__Overlay">
            <div className="ContentWrapper">
              <h1 className="RowArticle__Title">{article.title}</h1>
              <p className="RowArticle__Abstract">{article.abstract}</p>
              <Button onClick={() => openArticle(article.views)} type="primary">
                Read more
              </Button>
            </div>
          </div>
        </div>
      </StyledArticleRowCard>
    </React.Fragment>
  );
};
