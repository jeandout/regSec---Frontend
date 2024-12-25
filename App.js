import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapScreen from './Screens/MapScreen';
import ListScreen from './Screens/ListScreen';

const {Navigator, Screen} = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Map" component={MapScreen}/>
        <Screen name="Liste" component={ListScreen}/>
      </Navigator>
    </NavigationContainer>
  );
}