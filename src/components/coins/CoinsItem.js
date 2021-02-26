import React, { Component } from 'react';
import { View, Text, StyleSheet }from 'react-native';

const CoinsItem = ({ item }) => {
    return (
        <View>
            <Text style={styles.title} >{ item.name }</Text>
            <Text style={styles.description}>{ item.symbol }</Text>
        </View>
    );
}

export default item;