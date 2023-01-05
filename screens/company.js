import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet,Pressable, FlatList, Image, TextInput, searchPhrase  } from 'react-native';

import DrinkItems from '../components/drinkItems';
import info from '../screens/info';

const Stack = createNativeStackNavigator();

const company = () => {
    return(
        <View>
            <Text style={styles.text}>
                Ons bedrijf doet zijn best om u de beste drank te geven die er bestaat. In onse beschrijving vindt u ookl de ideale manier om dit te consumeren.
            </Text>
        </View>
    )
   
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        marginTop: 20,
        marginLeft:20, 
        marginRight: 20,
    }
});

export default company;