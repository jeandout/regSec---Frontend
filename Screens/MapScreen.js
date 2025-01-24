import React from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps'; // Importer le Marker depuis 'react-native-maps'
import { StyleSheet, View, Dimensions } from 'react-native';
import Waypoint from '../components/map/Waypoint';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"; // Importer les icônes Material


import { useSelector } from "react-redux";

import { useEffect } from 'react';
import * as Location from 'expo-location';

export default function MapScreen() {
  console.log("MapScreen");

  const waypoints = useSelector((state) => state.user.waypoints);
  const routes = useSelector((state) => state.user.routes);
  const logisticRoutes = useSelector((state) => state.user.logisticRoutes);

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
    const [longitude, latitude] = waypoint.coordinates;
    return (<Waypoint
      key={i}
      latitude={latitude}
      longitude={longitude}
      title={waypoint.name}
      description={waypoint.properties.sym} />);
  })

  const displayRoutes = routes.map((route, i) => {
    return (<Polyline
      key={i}
      coordinates={route.coordinates}
      strokeColor="blue" // Couleur de la ligne
      strokeWidth={4} // Épaisseur de la ligne
    />);
  })

  const displayLogisticRoutes = logisticRoutes.map((route, i) => {
    return (<Polyline
      key={i}
      coordinates={route.coordinates}
      strokeColor="yellow" // Couleur de la ligne
      strokeWidth={4} // Épaisseur de la ligne
    />);
  })

  return (
    <View style={styles.container}>
      <MapView
        mapType="terrain"
        style={styles.map}
        initialRegion={{
          latitude: userLocation.coords.latitude,
          longitude: userLocation.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
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
        {displayRoutes}
        {displayLogisticRoutes}
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
