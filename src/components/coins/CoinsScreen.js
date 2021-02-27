import React, { Component } from 'react';
import { View, FlatList, Text, ActivityIndicator, StyleSheet }from 'react-native';
import Http from 'CryptoTracker/src/libs/http';
import CoinsItem from 'CryptoTracker/src/components/coins/CoinsItem';
import CoinsSearch from 'CryptoTracker/src/components/coins/CoinsSearch';
import Colors from 'CryptoTracker/src/res/colors';

class CoinsScreen extends Component {
    
    state = {
        coins: [],
        allCoins: [],
        loading: false
    }

    componentDidMount = () => {
        this.getCoins();
    }
    
    getCoins = async () => {
        this.setState({ loading: true });
        const res = await Http.instance.get("https://api.coinlore.net/api/tickers/");
        this.setState({ coins: res.data, allCoins: res.data, loading: false });
    }
    
    handlePress = (coin) => {
        {/*console.log("Go to detail", this.props);*/}
        this.props.navigation.navigate("CoinDetail", { coin });
    }
    
    handleSearch = (query) => {
        const { allCoins } = this.state;
        const coinsFiltered = allCoins.filter((coin) => {
            return coin.name.toLowerCase().includes(query.toLowerCase()) || 
                coin.symbol.toLowerCase().includes(query.toLowerCase())
        });

        this.setState({ coins: coinsFiltered });
    }
    
    render() {
        const { coins, loading } = this.state;

        return (
            <View style={styles.container}>
                
                <CoinsSearch onChange={this.handleSearch}/>

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