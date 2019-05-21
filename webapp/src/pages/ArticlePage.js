import React from 'react';
import { connect } from 'react-redux';
import { FETCH_POPULAR_ARTICLES } from '../actions';
import PropTypes from 'prop-types';
import { Loader, ArticleView } from '../components';
import { Button, Icon } from 'antd';

class ArticlePage extends React.Component {
    componentDidMount() {
        if(this.props.allArticles.length === 0) {
            this.props.fetchPopularArticles();
        }
    }

    previousArticle = () => {
        const currentParam = parseInt(this.props.match.params.views);
        this.props.history.push(`/article/${currentParam - 1}`);
    }

    nextArticle = () => {
        const currentParam = parseInt(this.props.match.params.views);
        this.props.history.push(`/article/${currentParam + 1}`);
    }

    render() {
        console.log(this.props);
        if(!this.props.article) {
            return (<Loader />)
        }
        const currentParam = parseInt(this.props.match.params.views);
        const articlesLength = this.props.allArticles.length;

        return (
            <div>
                <div className="NextPrevArticle">
                    <Button.Group>
                        <Button 
                            type="primary" 
                            onClick={() => this.previousArticle()}
                            disabled={currentParam - 1 < 1}
                        ><Icon type="left" /> Previous article</Button>
                        <Button type="primary" onClick={() => this.props.history.push('/')}>Back to list</Button>
                        <Button 
                        type="primary"
                        onClick={() => this.nextArticle()}  
                        disabled={currentParam + 1 > articlesLength}>Next article <Icon type="right" /></Button>
                    </Button.Group>
                </div>
                <ArticleView article={this.props.article} />
            </div>
        )
    }
}

ArticlePage.defaultProps = {
    article: null
}

ArticlePage.propTypes = {
    allArticles: PropTypes.array.isRequired,
    article: PropTypes.object
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