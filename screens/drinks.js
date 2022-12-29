import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet,Pressable, FlatList, Image } from 'react-native';

import DrinkItems from '../components/drinkItems';

const Stack = createNativeStackNavigator();

const drinks = ({navigation}) =>{

    const [drinks, setDrinks] = useState ([]);

    const getDrinks = async () => {
        try {
            const response = await fetch ("https://yadinam.be/wp-json/wp/v2/posts?categories=11", {
                
            })
            const json = await response.json();
            setDrinks(json);
            console.log(drinks);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getDrinks();
    }, []);


    return (
        <View style={styles.screen}>

            <Pressable onPress={() => navigation.navigate("cart")}>
                <Image style={styles.img} source={require('../assets/shopping-cart.png')}></Image>
            </Pressable>

            <FlatList data={drinks} renderItem={({item}) => (
                 <DrinkItems title={item.title.rendered}></DrinkItems>
            )}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    },

    img: {
        width: 20,
        height: 20,
        marginLeft:"90%",
    },
});

export default drinks;
