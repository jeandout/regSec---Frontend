import { Marker } from "react-native-maps";
import { View, Text, StyleSheet } from "react-native";

const Waypoint = ({ latitude, longitude, title, description }) => {

    return (
        <Marker
            coordinate={{
                latitude: latitude,
                longitude: longitude,
            }}
            title={`${title}`}
            description={`${description}`}
        >
            <View style={styles.customMarker}>
                <Text style={styles.markerText}>{title}</Text>
            </View>
        </Marker>

    )

}

const styles = StyleSheet.create({
    customMarker: {
        width: "100%", // Largeur personnalisée
        height: "100%", // Hauteur personnalisée
        backgroundColor: "white", // Fond du texte
        padding: 1,
        borderRadius: 5,
        borderColor: "black",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        width:32,
        height:32,
    },
    markerText: {
        fontSize: 12,
        lineHeight:12,
        fontWeight: "bold",
        color: "black",
        flexWrap: "wrap",
        textAlign:"center",
    },
});

export default Waypoint;