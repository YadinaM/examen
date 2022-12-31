import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'; //nieuw onderdeel

import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Image, Button, ImageBackground } from 'react-native';

const Stack = createNativeStackNavigator();

const drinkItems = props => {
    const navigation = useNavigation(); //nieuw onderdeel, iemage doet nog niks

    return (
        <View>
             <View style={styles.list}>
                <View style={styles.center}>
                    <Image style={styles.img} source={{uri: props.image}} ></Image>
                </View>

                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.discription}>{props.description}</Text>
                
                <Pressable style={styles.button} onPress={() => navigation.navigate("info", {itemTitle: props.buttonText, description: props.description, image: props.image })}>  
                    <Text style={styles.kijk}>View {props.title}</Text>
                </Pressable>
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
        width: 140,
        borderRadius: 10,
        marginTop: 10,
        paddingBottom: 8,
        paddingLeft: 10,
    },

    img: {
        width: 200,
        height: 200,
    },

    center: {
        marginLeft: "20%",
        marginBottom: 20,
    },
  });

  export default drinkItems;

  /*
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
  */