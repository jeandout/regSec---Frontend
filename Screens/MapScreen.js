import React from 'react';
import MapView, { Marker } from 'react-native-maps'; // Importer le Marker depuis 'react-native-maps'
import { StyleSheet, View, Dimensions } from 'react-native';
import Waypoint from '../components/map/Waypoint';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"; // Importer les icônes Material


import { useSelector } from "react-redux";

import { useEffect } from 'react';
import * as Location from 'expo-location';

export default function MapScreen() {

  const waypoints = useSelector((state) => state.user.waypoints);

  const [userLocation, setUserLocation] = React.useState({ "coords": { "accuracy": 100, "altitude": 93.5999984741211, "altitudeAccuracy": 100, "heading": 0, "latitude": 48.7184, "longitude": 1.9745, "speed": 0 }, "mocked": false, "timestamp": 1737626593868 })

  useEffect(() => { //utilisé pour la localisation de l'utilisateur temps réèl
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === 'granted') {
        Location.watchPositionAsync({ distanceInterval: 10 },
          (location) => {
            setUserLocation(location)
          });
      }
    })();
  }, []);

  const displayWaypoints = waypoints.map((waypoint, i) => {
    const [longitude, latitude ] = waypoint.coordinates;
    return ( <Waypoint key={i} latitude ={latitude} longitude={longitude} title={waypoint.name} description= {waypoint.properties.sym}  /> );
  })

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
          title="Moi"
          description="Position de l'utilisateur"
          >
            <View style={styles.iconContainer}>
                <MaterialIcons name="my-location" size={30} color="blue" />
            </View>
          </Marker>
        
        <Waypoint description="DEFAULT" latitude={48.447095706} longitude={1.4873060249} title="DEFAULT" />
        {displayWaypoints}
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
