import React from 'react';
import { connect } from 'react-redux';
import { FETCH_POPULAR_ARTICLES } from '../actions';

class ArticlePage extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>{this.props.article.title || 'no title yet'}</div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    allArticles: state.allArticles,
    article: state.allArticles.find(article => article.views === parseInt(ownProps.match.params.views))
});

const mapDispatchToProps = dispatch => {
    return {
        fetchPopularArticles: () => dispatch({ type: FETCH_POPULAR_ARTICLES })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage)