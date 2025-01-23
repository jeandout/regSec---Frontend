import React from 'react';
import MapView, { Marker } from 'react-native-maps'; // Importer le Marker depuis 'react-native-maps'
import { StyleSheet, View, Dimensions } from 'react-native';

import { useDispatch } from "react-redux";
import { updateLocation } from "../reducers/user";

import { useEffect } from 'react';
import * as Location from 'expo-location';

export default function MapScreen() {

  const dispatch = useDispatch();

  const [userLocation,setUserLocation]=React.useState({"coords": {"accuracy": 100, "altitude": 93.5999984741211, "altitudeAccuracy": 100, "heading": 0, "latitude": 48.7184, "longitude": 1.9745, "speed": 0}, "mocked": false, "timestamp": 1737626593868})
  console.log(userLocation);

  // useEffect(() => { //utilisé pour la localisation de l'utilisateur une fois
  //   (async () => {
  //     const { status } = await Location.requestForegroundPermissionsAsync();

  //     if (status === 'granted') {
  //       const location = await Location.getCurrentPositionAsync({});
  //       console.log(location);
  //     }
  //   })();
  // }, []);


  useEffect(() => { //utilisé pour la localisation de l'utilisateur temps réèl
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === 'granted') {
        Location.watchPositionAsync({ distanceInterval: 10 },
          (location) => {
            // dispatch(updateLocation(location)); //mise à jour de la position dans le reducer
            setUserLocation(location)
          });
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        mapType="terrain"
        style={styles.map}
        initialRegion={{
          latitude: 48.7184, // Latitude moyenne entre Chartres et Paris
          longitude: 1.9745, // Longitude moyenne entre Chartres et Paris
          latitudeDelta: 3.0, // Zoom ajusté pour englober les deux villes
          longitudeDelta: 3.0,
        }}
      >
        {/* Placer le Marker à l'intérieur de MapView */}
        <Marker
          coordinate={{
            latitude: userLocation.coords.latitude,
            longitude: userLocation.coords.longitude,
          }}
          title="Chartres"
          description="Ville de la cathédrale."
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
