import React from 'react';
import MapView, { Marker } from 'react-native-maps'; // Importer le Marker depuis 'react-native-maps'
import { StyleSheet, View, Dimensions } from 'react-native';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView
        mapType="terrain"
        style={styles.map}
        initialRegion={{
          latitude: 48.7184, // Latitude moyenne entre Chartres et Paris
          longitude: 1.9745, // Longitude moyenne entre Chartres et Paris
          latitudeDelta: 2.0, // Zoom ajusté pour englober les deux villes
          longitudeDelta: 2.0,
        }}
      >
        {/* Placer le Marker à l'intérieur de MapView */}
        <Marker
          coordinate={{
            latitude: 48.4469,
            longitude: 1.4893,
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
