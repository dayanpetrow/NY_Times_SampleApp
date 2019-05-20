import React, { Component } from 'react';
import { FETCH_POPULAR_ARTICLES } from '../actions';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, ScrollView, View, Button } from 'react-native';
import ArticleCard from '../components/ArticleCard';

class ArticleListView extends React.Component {
    componentDidMount() {
        this.props.fetchPopularArticles();
    }

    openArticle = (title) => {
        this.props.navigation.navigate('ArticleView', { id: title });
    }

    render() {
        console.log(this.props);
        const { allArticles } = this.props;
        return (
            <ScrollView>
                {allArticles.map(article => (
                    <ArticleCard 
                        article={article} 
                        openArticle={() => this.openArticle(article.title)} 
                        key={article.id} 
                    />
                ))}
            </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListView);