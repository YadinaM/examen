import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'; //nieuw onderdeel

import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Image, Button, ImageBackground } from 'react-native';

const Stack = createNativeStackNavigator();

const drinkItems = props => {
    const navigation = useNavigation(); //nieuw onderdeel, iemage doet nog niks
    return (
        <View style={styles.list}>
            <Image source={(props.image)}></Image>

            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.discription}>{props.description}</Text>
            <Pressable onPress={() => navigation.navigate("info")}> 
                <Text style={styles.kijk}>View {props.title}</Text>
            </Pressable>
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
      borderRadius: 2,
      backgroundColor: "lightblue",
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
    }

  });

  export default drinkItems;