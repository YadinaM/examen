import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import drinks from './screens/drinks.js';
import info from './screens/info.js';
import company from "./screens/company";
import shoppingList from "./screens/shoppingList"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="drinks" component={(drinks)} />
        <Stack.Screen name="info" component={(info)} />
        <Stack.Screen name="company" component={(company)} />
        <Stack.Screen name="shopping list" component={(shoppingList)} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

