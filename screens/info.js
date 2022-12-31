import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import {Stylesheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';

import drinkItems from '../components/drinkItems';

const Stack = createNativeStackNavigator();

const Info = ({navigation, route}) => {

    return (
        <View>
            <Text>{route.params.itemTitle}</Text>
            <Text>{route.params.description}</Text>
        </View>         

    )
}

export default Info;