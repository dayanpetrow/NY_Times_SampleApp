import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FETCH_POPULAR_ARTICLES } from "../actions";
import { ArticleRowCard, Loader } from "../components";
import { Button } from "antd";
import { Helmet } from "react-helmet";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayArticlesCount: 5
    };
  }

  componentDidMount() {
    this.props.fetchPopularArticles();
  }

  loadMoreArticles = () => {
    console.log("load more");
    this.setState(prevState => {
      return { displayArticlesCount: prevState.displayArticlesCount + 5 };
    });
  };

  openArticle = id => {
    this.props.history.push(`/article/${id}`);
  };

  render() {
    const { displayArticlesCount } = this.state;
    const { allArticles } = this.props;
    if (allArticles.length === 0) {
      return <Loader />;
    }
    console.log(allArticles);
    return (
      <div>
        <Helmet>
          <title>New York Times Sample Application</title>
        </Helmet>
        <div className="ArticleList">
          {allArticles.slice(0, displayArticlesCount).map(article => (
            <ArticleRowCard
              key={article.views}
              article={article}
              openArticle={this.openArticle}
            />
          ))}
        </div>
        <div className="LoadMore">
          <Button
            onClick={() => this.loadMoreArticles()}
            disabled={allArticles.length === displayArticlesCount}
            size="large"
            type="primary"
            icon="plus-circle"
          >
            Load more
          </Button>
        </div>
      </div>
    );
  }
}

HomePage.defaultProps = {
  allArticles: []
};

HomePage.propTypes = {
  allArticles: PropTypes.array.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPopularArticles: () => dispatch({ type: FETCH_POPULAR_ARTICLES })
  };
};

const mapStateToProps = state => ({
  allArticles: state.allArticles
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
