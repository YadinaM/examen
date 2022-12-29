import React from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const drinkItems = props => {
    return (
        <View style={styles.list}>
            <Text>{props.title}</Text>
                <Pressable onPress ={()=> navigation.navigate ("info")}>
                    <Text>bekijk product:</Text>
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
      borderColor: 'black',
      borderStyle: 'dashed',
      borderWidth: 0.5,
      backgroundColor: "lightblue",
    }
  });

  export default drinkItems;