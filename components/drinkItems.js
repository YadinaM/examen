import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'; //nieuw onderdeel

import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Image, Button, ImageBackground } from 'react-native';

const Stack = createNativeStackNavigator();

import counting from "../screens/drinks"

const drinkItems = props => {
    const navigation = useNavigation(); //nieuw onderdeel

    return (
        <View>
             <View style={styles.list}>
                <View style={styles.center}>
                    <Image style={styles.img} source={{uri: props.image}} ></Image>
                </View>

                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.discription}>{props.description}</Text>
                
               <View style={styles.next}>
                    <Pressable style={styles.button} onPress={() => navigation.navigate("info", {itemTitle: props.buttonText, description: props.description, image: props.image })}>  
                        <Text style={styles.kijk}>View {props.title}</Text>
                    </Pressable>
                    <Pressable style={styles.button2}>
                        <Text style={styles.kijk}>Add to cart</Text>
                    </Pressable>
               </View>
            </View>
        </View>
    );
};





const styles = StyleSheet.create({
    list: {
      padding: 20,
      marginVertical: 5,
      marginHorizontal: 5,
      marginTop: 10,
      marginBottom: 5,
      borderRadius: 20,
      backgroundColor: "#D7C2BD",
    },

    title:{
        fontSize: 18,
    },

    discription:{
        fontSize: 12,
        paddingTop: 10,
    },

    kijk:{
        marginTop: 10,
    },

    button:{
        backgroundColor: "#8798A5",
        borderRadius: 10,
        paddingRight: 15,
        marginTop: 10,
        paddingBottom: 8,
        paddingLeft: 15,
        marginRight: 35,
    },

    button2:{
        backgroundColor: "#9082cf",
        borderRadius: 10,
        marginTop: 10,
        paddingBottom: 8,
        paddingLeft: 15,
        paddingRight: 15,
    },

    img: {
        width: 200,
        height: 200,
    },

    center: {
        marginLeft: "20%",
        marginBottom: 20,
    },

    next: {
        display: 'flex',
        flexDirection: "row",
    },
  });

  export default drinkItems;
