import React from 'react';
import { Platform, StyleSheet, Text, ScrollView, View, Button } from 'react-native';

export default ({ article, openArticle }) => (
    <View>
        <Button
            title={article.title}
            onPress={openArticle}
        />
    </View>
)