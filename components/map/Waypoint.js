import { Marker } from "react-native-maps";

const Waypoint = ({latitude, longitude, title, description}) => {

    return (
        <Marker
            coordinate={{
                latitude: latitude,
                longitude: longitude,
            }}
            title={`${title}`}
            description={`${description}`}
        />
    )

}

export default Waypoint;