import React from "react";
import { Alert } from "react-native";
import config from "../config";
import TextInputR from "../components/common/TextInputR";
import Template from "../components/common/Template";
import ButtonR from "../components/common/ButtonR";

const backend = config.API_URL
console.log(backend)

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
            console.log("signpressed")
            const data = await response.json();

            if (data.result) {
                console.log(data.token)
                navigation.replace('TabNavigator');
            }

            navigation.replace('TabNavigator');

        }catch (error) {
            console.error('Error during sign-in:', error);
            Alert.alert('Erreur', 'Une erreur est survenue. Veuillez réessayer.');
        }

    }

    return (
        <Template>
            <UserEmailField value={email} onChangeText={setEmail} />
            <UserPasswordField value={password} onChangeText={setPassword} />
            <ButtonR
                onPress={SignInButton} />
        </Template>
    )
};

export default SignInScreen;