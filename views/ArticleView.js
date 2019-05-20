import React from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { FETCH_ARTICLE } from '../actions';

class ArticleView extends React.Component {
    componentDidMount() {
        const id = this.props.navigation.getParam('id', 0);
        this.props.fetchArticleById(id);
    }

    render() {
        return (
            <View>
                <Text>{this.props.navigation.getParam('id')}</Text>
                <Button
                    title="All articles"
                    onPress={() => this.props.navigation.navigate('ArticleListView')}
                />
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchArticleById: (title) => dispatch({ type: FETCH_ARTICLE, title })
    }
}

const mapStateToProps = state => ({
    singleArticle: state.singleArticle
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleView);