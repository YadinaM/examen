import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'; //nieuw onderdeel


import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';

import drinkItems from '../components/drinkItems';

const Stack = createNativeStackNavigator();

const Info = ({route, props, item}) => {
    const navigation = useNavigation();

    return (
        <View style={styles.screen}>
            <Image style={styles.img} source={{uri: route.params.image}}></Image>
            <Text style={styles.title}>{route.params.itemTitle}</Text>
            <Text style={styles.text}>{route.params.description}</Text>

            <Pressable style={styles.button2}onPress={() => navigation.navigate("company")}>  
                <Text style={styles.kijk}>Read more about our company</Text>
            </Pressable>
        </View>         
    );
}; 

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: "#FAF2FF",
    },

    title: {
        fontSize: 30,
        marginTop:20,
    },

    img: {
        width: 300,
        height: 300,
        marginLeft:"10%",
        padding: 10,
    },

    text: {
        fontSize: 16,
        marginTop: 20
    },

    button2:{
        backgroundColor: "#b6b4bf",
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
        paddingBottom: 8,
        paddingLeft: 100,
        paddingRight: 15,
    },

    kijk:{
        marginTop: 10,
    },

});

export default Info;