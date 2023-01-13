import React, { useState } from 'react';
import { StyleSheet, TextInput, View, FlatList, Text, TouchableHighlight } from 'react-native';
import List from '../components/List';

const ShoppingList = () => {
    const [enteredItem, setEnteredItem] = useState('');
    const [items, setItem] = useState([]);

    const ListInputHandler = (enteredItem) => {
        setEnteredItem(enteredItem);
    }

    const addItemHandler = () => {
        setItem((currentItem) => [...currentItem, enteredItem]);
    }

  return (
    <View>
           <View>
              <TextInput
              placeholder="add item to your list"
              style={styles.input}
              clearButtonMode="always"
              onChangeText={ListInputHandler}
              />

              <TouchableHighlight underlayColor="#D98855" onPress={addItemHandler} style={styles.btn}> 
                <Text>
                    add to list
                </Text>
              </TouchableHighlight >
           </View>

           <FlatList data={items} renderItem={(itemData) => (
            <List nameDrink={itemData.item} />)} />
    </View>         
  )
}

const styles = StyleSheet.create({
    input: {
      width: '90%',
      borderWidth: 1,
      padding: 10,
      marginBottom: 10,
      marginTop: 10,
      marginLeft: 20,
      borderRadius: 10,
    },

    btn: {
        backgroundColor: '#D98880',
        borderRadius: 10,
        marginTop: 10,
        paddingBottom: 8,
        paddingTop: 8,
        paddingLeft: 15,
        marginRight: 170,
        marginLeft: 170,
    },
  });

export default ShoppingList;