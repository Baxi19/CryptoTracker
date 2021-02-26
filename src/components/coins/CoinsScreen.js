import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet }from 'react-native';
import Http from 'CryptoTracker/src/libs/http';


class CoinsScreen extends Component {
    
    state = {
        coins: []
    }

    componentDidMount = async () => {
        const res = await Http.instance.get("https://api.coinlore.net/api/tickers/");
        this.setState({ coins: res.data });
    }
    
    handlePress = () => {
        {/*console.log("Go to detail", this.props);*/}
        this.props.navigation.navigate("CoinDetail");
    }
    
    render() {
        const { coins } = this.state;

        return (
            <View style={styles.container}>
              <FlatList 
                data= { coins }
                renderItem={({ item }) => 
                
                <View>
                    <Text style={styles.title} >{ item.name }</Text>
                    <Text style={styles.description}>{ item.symbol }</Text>
                </View>
                   
                }
              />  

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue"
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
    }
});

export default CoinsScreen;