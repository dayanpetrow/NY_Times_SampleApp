import React from "react";
import { connect } from "react-redux";
import { FETCH_POPULAR_ARTICLES } from "../actions";
import PropTypes from "prop-types";
import { Loader, ArticleView } from "../components";
import { Button, Icon, Alert } from "antd";
import { Helmet } from "react-helmet";

export class ArticlePage extends React.Component {
  componentDidMount() {
    if (this.props.allArticles.length === 0) {
      this.props.fetchPopularArticles();
    }
  }

  previousArticle = () => {
    const currentParam = parseInt(this.props.match.params.views);
    this.props.history.push(`/article/${currentParam - 1}`);
  };

  nextArticle = () => {
    const currentParam = parseInt(this.props.match.params.views);
    this.props.history.push(`/article/${currentParam + 1}`);
  };

  render() {
    const currentParam = parseInt(this.props.match.params.views);
    const articlesLength = this.props.allArticles.length;
    const { article, history } = this.props;

    if (!article && articlesLength === 0) {
      return <Loader />;
    }

    if (articlesLength > 0 && !article) {
      return (
        <div className="ContainerWithPadding">
          <Helmet>
            <title>The article could not be found!</title>
          </Helmet>
          <Alert
            message="Error"
            description="The article could not be found!"
            type="error"
            showIcon
          />
          <div className="ContainerWithPadding">
            <Button
              target="_blank"
              type="primary"
              block={true}
              onClick={() => history.push("/")}
            >
              See all articles
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div>
        <Helmet>
          <title>{article.title}</title>
        </Helmet>
        <div className="NextPrevArticle">
          <Button.Group>
            <Button
              type="primary"
              onClick={() => this.previousArticle()}
              disabled={currentParam - 1 < 1}
            >
              <Icon type="left" /> Previous
            </Button>
            <Button type="primary" onClick={() => history.push("/")}>
              Back to list
            </Button>
            <Button
              type="primary"
              onClick={() => this.nextArticle()}
              disabled={currentParam + 1 > articlesLength}
            >
              Next <Icon type="right" />
            </Button>
          </Button.Group>
        </div>
        <ArticleView article={article} />
      </div>
    );
  }
}

ArticlePage.defaultProps = {
  article: null,
  allArticles: []
};

ArticlePage.propTypes = {
  allArticles: PropTypes.array.isRequired,
  article: PropTypes.object
};

const mapStateToProps = (state, ownProps) => ({
  allArticles: state.allArticles,
  article: state.allArticles.find(
    article => article.views === parseInt(ownProps.match.params.views)
  )
});

const mapDispatchToProps = dispatch => {
  return {
    fetchPopularArticles: () => dispatch({ type: FETCH_POPULAR_ARTICLES })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlePage);
