import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Pressable, FlatList, Image, TextInput, TouchableHighlight } from 'react-native';

const Stack = createNativeStackNavigator();

const Drinks = ({navigation}) =>{

    const [drinks, setDrinks] = useState ([]);

    const getDrinks = async () => {
        try {
            const response = await fetch ("https://yadinam.be/wp-json/wp/v2/posts?categories=11")
            const json = await response.json();
            setDrinks(json);
            console.log(drinks);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getDrinks();
    }, []);

    const filterDrinks = async (enteredText) => {
        try {
          if (enteredText.length > 0) {
            const search = encodeURI("https://yadinam.be/wp-json/wp/v2/posts?categories=11&search=" + enteredText);
            console.log(search);
            const response = await fetch(search)
            const json = await response.json();
            console.log(json); 

            setDrinks(json);
          }

        } catch (error) {
          console.error(error);
        }
      }

    const [counter, setCounter] = useState(0)

    const increase = () => {
        setCounter((currentCounter) => currentCounter + 1);
        console.log(counter)
    }

    return ( 
        <View style={styles.screen}>

           <View style={styles.next}>
               <TextInput 
                    style={styles.input} 
                    placeHolder="search"
                    onChangeText={filterDrinks}>
                </TextInput>

                <Pressable>
                    <Image style={styles.img_cart} source={require('../assets/shopping-cart.png')}></Image>
                    <Text style={styles.number}>{counter}</Text>
                </Pressable>
           </View>

           <View>
               <Pressable style={styles.button3} onPress={() => navigation.navigate("shopping list")}>
                    <Text>Make a shopping list</Text>
               </Pressable>
           </View>

            <FlatList style={styles.all} data={drinks} renderItem={({item}) => (
                <View>
                  <View style={styles.list}>
                        <View style={styles.center}>
                            <Image style={styles.img} source={{uri: item.yoast_head_json.og_image[0].url}} ></Image>
                        </View>
        
                        <Text style={styles.title}>{item.title.rendered}</Text>
                        <Text style={styles.discription}>{item.yoast_head_json.og_description.split()}</Text>
                        
                        <View style={styles.next}>
                            <Pressable style={styles.button} onPress={() => navigation.navigate("info", {itemTitle: item.title.rendered, description: item.yoast_head_json.og_description.split(), image: item.yoast_head_json.og_image[0].url })}>  
                                <Text style={styles.kijk}>View {item.title.rendered}</Text>
                            </Pressable>
                            <TouchableHighlight underlayColor="#8082cf" style={styles.button2} onPress={() => increase()}>
                                <Text style={styles.kijk}>Add to cart</Text>
                            </TouchableHighlight >
                        </View>
                 </View>
             </View> 
            )}/>
           
        </View>
    );
}; 



const styles = StyleSheet.create({
    screen: {
        padding: 20,
    },

    img_cart: {
        width: 10,
        height: 10,
        marginLeft:"20%",
        padding: 13,
    },
    
    next: {
        display: 'flex',
        flexDirection: "row",
    },

    input: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 50,
        width: 320,
        height: 35,
    },

    plaats: {
        fontSize: 14,
        marginLeft: "35%"
    },
    
    number: {
        marginLeft:"35%"
    },

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
          borderRadius: 10,
          paddingRight: 15,
          marginTop: 10,
          paddingBottom: 8,
          paddingLeft: 15,
          marginRight: 35,
      },
  
      button2:{
          backgroundColor: "#9082cf",
          borderRadius: 10,
          marginTop: 10,
          paddingBottom: 8,
          paddingLeft: 15,
          paddingRight: 15,
      },
  
      img: {
          width: 200,
          height: 200,
      },
  
      center: {
          marginLeft: "20%",
          marginBottom: 20,
      },

      button3: {
        backgroundColor: "#b6b4bf",
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 5,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 125,
        paddingRight: 15,
      }, 

      all: {
          marginBottom: 100,
      }
});

export default Drinks;
