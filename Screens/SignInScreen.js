import React from "react";
import { Alert } from "react-native";
import config from "../config";
import TextInputR from "../components/common/TextInputR";
import Template from "../components/common/Template";
import ButtonR from "../components/common/ButtonR";
import FetchMapData from "../components/FetchMapData";

import { useDispatch } from "react-redux";
import { addToken, updateWaypoints, updateRoutes, updatelogisticRoutes } from "../reducers/user";



const backend = config.API_URL


const UserEmailField = ({ value, onChangeText }) => {
    return (
        <TextInputR
            value={value}
            onChangeText={onChangeText}
            type={"email"}
            autoCapitalize={"none"}
        />
    )
}

const UserPasswordField = ({ value, onChangeText }) => {
    return (
        <TextInputR
            value={value}
            onChangeText={onChangeText}
            type={"password"}
            autoCapitalize={"none"}
        />
    );
}


const SignInScreen = ({ navigation }) => {

    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    const dispatch = useDispatch();
    
    const useFetchMapData = async (token) => {
        try {
           // Fetch waypoints
           const waypoints = await FetchMapData(token, "/itineraries/waypoints");
           dispatch(updateWaypoints(waypoints));

           // Fetch routes
           const routes = await FetchMapData(token, "/itineraries/routes");
           dispatch(updateRoutes(routes));

           const logisticRoutes = await FetchMapData(token, "/itineraries/logistic-routes");
           dispatch(updateLogisticRoutes(logisticRoutes));
    
        } catch (err) {
            console.error(err);
            Alert.alert('Erreur', "Impossible de récupérer les données (points ou routes).");
        }
    };

    const SignInButton = async () => {

        

        if (!email || !password) {

            Alert.alert('Erreur', 'Veuillez remplir tous les champs');
            return;
        }
        try {

            const response = await fetch(`${backend}/users/signin`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            })
            const data = await response.json();

            if (data.result) {
                
                dispatch(addToken(data.token));
                useFetchMapData(data.token);
                navigation.replace('TabNavigator');
            }

            navigation.replace('TabNavigator');

        } catch (error) {
            console.error('Error during sign-in:', error);
            Alert.alert('Erreur', 'Une erreur est survenue. Veuillez réessayer.');
        }

    }

    return (
        <Template>
            <UserEmailField value={email} onChangeText={setEmail} />
            <UserPasswordField value={password} onChangeText={setPassword} />
            <ButtonR
                onPress={SignInButton}
                title={"Connexion"}/>
        </Template>
    )
};

export default SignInScreen;