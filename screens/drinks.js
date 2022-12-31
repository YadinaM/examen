import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet,Pressable, FlatList, Image } from 'react-native';

import DrinkItems from '../components/drinkItems';
import info from '../screens/info';

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

            <View style={styles.next}>
                <Pressable onPress={() => navigation.navigate("#", {itemTitle: props.buttonText, description: props.description, image: props.image })}>
                    <Text>All</Text>
                </Pressable>

                <Pressable  onPress={() => navigation.navigate("#", {itemTitle: props.buttonText, description: props.description, image: props.image })}>
                    <Text>met prik</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate("#")}>
                    <Text>zonder prik</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate("#")}>
                    <Text>Alcohol</Text>
                </Pressable>
            </View>

            <FlatList data={drinks} renderItem={({item}) => (
                <DrinkItems 
                    title={item.title.rendered}
                    description={item.yoast_head_json.og_description.split()}
                    image={item.yoast_head_json.og_image[0].url}
                    buttonText={item.title.rendered}>
                </DrinkItems>
            )}/>
           
        </View>
    );
};




const styles = StyleSheet.create({
    screen: {
        padding: 20,
    },

    img: {
        width: 20,
        height: 20,
        marginLeft:"90%",
        padding: 10,
    },
    
    next: {
        display: 'flex',
        flexDirection: "row",
    },
});

export default drinks;
