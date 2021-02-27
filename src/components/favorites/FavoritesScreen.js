import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import FavoritesEmplyState from 'CryptoTracker/src/components/favorites/FavoritesEmptyState';
import Colors from 'CryptoTracker/src/res/colors';

class FavoritesScreen extends Component {
    render(){
        return (
            <View style={styles.container}>
                <FavoritesEmplyState/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.charade,
        flex: 1
    }
});

export default FavoritesScreen;