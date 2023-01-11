import { StyleSheet, Text, View, Image, Pressable} from 'react-native'
import React from 'react'

const Detail = (props) => {
  return (
    <View style={styles.screen}>
            <Image style={styles.img} source={{uri: props.image}}></Image>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.text}>{props.description}</Text>     
    </View>         
  )
}

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
});

export default Detail