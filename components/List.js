import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const List = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.nameDrink}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#F9EBEA',
    borderColor: 'black',
    borderWidth: 0.5,
  }
});

export default List;