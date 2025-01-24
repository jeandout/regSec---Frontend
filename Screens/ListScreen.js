import React from 'react';
import { Text, FlatList, View, StyleSheet } from 'react-native';
import Template from '../components/common/Template';
import { useSelector } from "react-redux";

export default function ListScreen() {
  // Récupération des données du store Redux
  const waypoints = useSelector((state) => state.user.waypoints);
  const routes = useSelector((state) => state.user.routes);
  const logisticRoutes = useSelector((state) => state.user.logisticRoutes);

  // Fonction de rendu d'un élément de la liste
  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemDescription}>Description: {item.properties?.sym || "N/A"}</Text>
        {item.coordinates && (
          <Text style={styles.itemCoordinates}>
            Coordonnées: {item.coordinates[1]}, {item.coordinates[0]}
          </Text>
        )}
      </View>
    );
  };

  return (
    <Template>
      <Text style={styles.title}>Liste des Waypoints</Text>
      {waypoints?.length > 0 ? (
        <FlatList
          data={waypoints}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id || index.toString()}
        />
      ) : (
        <Text style={styles.emptyText}>Aucun waypoint disponible.</Text>
      )}
    </Template>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#555',
  },
  itemCoordinates: {
    fontSize: 12,
    color: '#888',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginTop: 20,
  },
});
