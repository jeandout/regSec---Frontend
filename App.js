import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Importez la bibliothèque d'icônes

import MapScreen from './Screens/MapScreen';
import ListScreen from './Screens/ListScreen';
import SettingsScreen from './Screens/SettingsScreen';
import SignInScreen from './Screens/SignInScreen';


import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import user from './reducers/user';

import { useEffect } from 'react';
import * as Location from 'expo-location';

const store = configureStore({
  reducer: { user },
});

const { Navigator, Screen } = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Navigator screenOptions={({ route }) => ({
      headerShown: false,
      // animation: 'shift',
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        // Détermine l'icône selon l'écran
        if (route.name === 'Map') {
          iconName = focused ? 'map' : 'map-outline';
        } else if (route.name === 'Liste') {
          iconName = focused ? 'list' : 'list-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'settings' : 'settings-outline';
        }

        // Retourne l'icône correspondante
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'blue', // Couleur des icônes actives
      tabBarInactiveTintColor: 'gray', // Couleur des icônes inactives
      tabBarStyle: {
        backgroundColor: '#fff', // Couleur de fond de la tab bar
      },
    })}>
      <Screen name="Map" component={MapScreen} />
      <Screen name="Liste" component={ListScreen} />
      <Screen name="Settings" component={SettingsScreen} />
    </Navigator>)
}
export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} >

          <Stack.Screen name="TabNavigator" component={TabNavigator} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}