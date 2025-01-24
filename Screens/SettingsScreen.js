import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import ButtonR from '../components/common/ButtonR';
import FetchWaypoint from '../components/FetchWaypoints';
import { useSelector, useDispatch } from 'react-redux';
import { updateWaypoints } from '../reducers/user';


export default function SettingsScreen() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.user.token);
    console.log('from setting screen :' + token)

    const handleFetchWaypoints = async () => {
        try {
            const data = await FetchWaypoint(token); // Appel à la fonction utilitaire
            dispatch(updateWaypoints(data));
            Alert.alert('Succès', 'Les points ont été mis à jour avec succès.');
        } catch (err) {
            console.error(err);
            Alert.alert('Erreur', "Impossible de récupérer les points.");
        }
    };

    return (
        <View style={styles.container}>
            <Text>Settings</Text>
            <ButtonR
                title={"mettre à jour les points"}
                onPress={handleFetchWaypoints}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});