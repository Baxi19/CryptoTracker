import React, { Component } from 'react';
import { View, FlatList, Text, ActivityIndicator, StyleSheet }from 'react-native';
import Http from 'CryptoTracker/src/libs/http';
import CoinsItem from 'CryptoTracker/src/components/coins/CoinsItem';
import Colors from 'CryptoTracker/src/res/colors';

class CoinsScreen extends Component {
    
    state = {
        coins: [],
        loading: false
    }

    componentDidMount = async () => {
        this.setState({ loading: true });
        const res = await Http.instance.get("https://api.coinlore.net/api/tickers/");
        this.setState({ coins: res.data, loading: false });
    }
    
    handlePress = (coin) => {
        {/*console.log("Go to detail", this.props);*/}
        this.props.navigation.navigate("CoinDetail", { coin });
    }
    
    render() {
        const { coins, loading } = this.state;

        return (
            <View style={styles.container}>
                
                { loading ? 
                    <ActivityIndicator 
                        style={styles.loader}
                        color="#fff" 
                        size="large"/> 
                    : null 
                }
                
                <FlatList 
                    data= { coins }
                    renderItem={ ({item}) => 
                        <CoinsItem 
                            item={item} 
                            onPress={() => this.handlePress(item)}
                        />
                    }
                />  

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.charade
    },

    title: {
        color: "#fff",
        fontSize: 18,
        marginLeft: 8
    },

    description: {
        color: "#9b9",
        fontSize: 14,
        marginLeft: 8
    },

    btn: {
        padding: 8,
        backgroundColor: "green",
        borderRadius: 8,
        margin: 16
    },

    btnText: {
       color: "#fff",
       textAlign: "center" 
    },

    loader: {
        marginTop: 60
    }
});

export default CoinsScreen;