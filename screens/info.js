import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'; //nieuw onderdeel


import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';

import Detail from '../components/detail';

const Stack = createNativeStackNavigator();

const Info = ({route, props, item}) => {
    const navigation = useNavigation();

    return (
        <View style={styles.screen}>
            <Detail title = {route.params.itemTitle} image = {route.params.image} description ={route.params.description}
            />
            <Pressable style={styles.button2} onPress={() => navigation.navigate("company")}>  
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