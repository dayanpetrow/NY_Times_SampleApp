import React from 'react';
import { connect } from 'react-redux';
import { FETCH_POPULAR_ARTICLES } from '../actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.fetchPopularArticles();
    }

    render() {
        return (
            <div>
                {
                    this.props.allArticles.map(article => (
                        <div>
                            <button 
                                key={article.id}
                                onClick={() => this.props.history.push(`/article/${article.id}`)}>
                                {article.title}    
                            </button>
                        </div>
                    ))
                }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPopularArticles: () => dispatch({ type: FETCH_POPULAR_ARTICLES })
    }
}

const mapStateToProps = state => ({
    allArticles: state.allArticles
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)