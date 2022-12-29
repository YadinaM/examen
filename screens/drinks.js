import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import {Stylesheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';

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
        <View>
            <FlatList data={drinks} renderItem={({item}) => (
                
                <View>
                <Text>{item.title.rendered}</Text>
            
            <Pressable onPress ={()=> navigation.navigate ("info", {itemTitle: item.title.rendered})}>
                <Text>bekijk product:</Text>
            </Pressable>

            </View>
            )}/>
        </View>
    )
}

export default drinks;
