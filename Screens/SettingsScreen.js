import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import ButtonR from '../components/common/ButtonR';
import FetchMapData from '../components/FetchMapData';
import { useSelector, useDispatch } from 'react-redux';
import { updateWaypoints, updateRoutes, updateLogisticRoutes } from '../reducers/user';
import Template from '../components/common/Template';


export default function SettingsScreen() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.user.token);
    console.log('from setting screen :' + token)

    const handleFetchMapData = async () => {
        try {
            // Fetch waypoints
            const waypoints = await FetchMapData(token, "/itineraries/waypoints");
            dispatch(updateWaypoints(waypoints));

            // Fetch routes
            const routes = await FetchMapData(token, "/itineraries/routes");
            dispatch(updateRoutes(routes));

            const logisticRoutes = await FetchMapData(token, "/itineraries/logistic-routes");
            dispatch(updateLogisticRoutes(logisticRoutes));

            Alert.alert('Succès', 'Les points et les routes ont été mis à jour avec succès.');
        } catch (err) {
            console.error(err);
            Alert.alert('Erreur', "Impossible de récupérer les données (points ou routes).");
        }
    };


    return (
        <Template style={styles.container}>
            <Text>Settings</Text>
            <ButtonR
                title={"mettre à jour les données carte"}
                onPress={handleFetchMapData}
            />
        </Template>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});