import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import {Stylesheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';

const Stack = createNativeStackNavigator();

const Info = ({navigation, route, props}) =>{

    return (
        <View>
              <Text>{props.title}</Text>
        </View>
    )
}

export default Info;