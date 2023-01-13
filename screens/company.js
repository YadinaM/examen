import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';

const Stack = createNativeStackNavigator();

const Company = () => {
    return(
        <View>
            <Text style={styles.title}>
                Our mission
            </Text>

            <Text style={styles.text}>
                Our company is a distributer of the best drinks in the world. Our mission is to make sure everyone only drinks the best drinks on this planet and outside of it.
            </Text>

            <Text style={styles.title}>
                Shipping info
            </Text>

            <Text style={styles.text}>
                When you order from our company you will have to wait for it to arrive at your house.
                For people in Belgium it might take a litle longer then 5-7 business days. Please mind the days that the post office isn't working.
                The moment your order has left our company you will get a track and trace code. From here on out you will be able to track your package.
                Do you order from outside Europe. No worries we will still be able to get this to you. It might take up to 12-15 business days. 
                And you to will be getting a track and trace code the moment your package has left our building. 
            </Text>
                        
           <View style={styles.next}>
                <Pressable style={styles.button1}>
                    <Text>
                        Agreed
                    </Text>
                </Pressable>

                <Pressable style={styles.button2}>
                    <Text>
                        Disagreed
                    </Text>
                </Pressable>
           </View>

        </View>
    )
   
}

const styles = StyleSheet.create({
    text: {
        fontSize: 17,
        marginTop: 10,
        marginLeft:20, 
        marginRight: 20,
    },

    title: {
        fontSize: 22,
        marginTop: 20,
        marginLeft:20, 
        marginRight: 20,
        fontWeight: "bold",
    }, 

    next: {
        display: 'flex',
        flexDirection: "row",
    },

    button1:{
        backgroundColor: "#8798A5",
        borderRadius: 10,
        paddingRight: 15,
        marginTop: 20,
        paddingBottom: 8,
        paddingLeft: 15,
        marginRight: 35,
        marginLeft: 20,
        paddingTop: 8,
    },

    button2:{
        backgroundColor: "#8798A5",
        borderRadius: 10,
        marginTop: 20,
        paddingBottom: 8,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 8,

    },
});

export default Company;