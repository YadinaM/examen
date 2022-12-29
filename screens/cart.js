import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import {Stylesheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';

const Stack = createNativeStackNavigator();

const info = ({navigation, route}) =>{

    return (
        <View>
           <Text>
               Heyy
           </Text>
        </View>
    )
}

export default info;