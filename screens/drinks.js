import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet,Pressable, FlatList, Image, TextInput, searchPhrase  } from 'react-native';

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

    const filterDrinks = async (enteredText) => {//argument meegegeven door onChangeText
        try {
          if (enteredText.length > 0) {
            const search = encodeURI("https://yadinam.be/wp-json/wp/v2/posts?categories=11&search=" + enteredText);
            console.log(search);
            const response = await fetch(search)
            const json = await response.json();
            console.log(json); 

            setDrinks(json);
          }

        } catch (error) {
          console.error(error);
        }
      }

    return ( 
        <View style={styles.screen}>

           <View style={styles.next}>
               <TextInput 
                    style={styles.input} 
                    placeHolder="search"
                    onChangeText={filterDrinks}>
                </TextInput>

                <Pressable onPress={() => navigation.navigate("cart")}>
                    <Image style={styles.img} source={require('../assets/shopping-cart.png')}></Image>
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
        width: 10,
        height: 10,
        marginLeft:"20%",
        padding: 13,
    },
    
    next: {
        display: 'flex',
        flexDirection: "row",
    },

    input: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 50,
        width: 320,
    },
});

export default drinks;
