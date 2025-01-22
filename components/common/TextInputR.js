import React from "react";
import { TextInput, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import isEmail from "../security/isEmail";
import Icon from "react-native-vector-icons/MaterialIcons";

const TextInputR = ({ value, onChangeText, placeholder, secureTextEntry, type }) => {


    if (type == "password") {
        const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

        const togglePasswordVisibility = () => {
            setIsPasswordVisible(!isPasswordVisible);
        };
        return (
            <View style={styles.passwordInput}>
                <TextInput
                    style={styles.password}
                    onChangeText={onChangeText}
                    value={value}
                    placeholder={placeholder || "Saisissez votre mot de passe"}
                    secureTextEntry={!isPasswordVisible} // Cache le texte si isPasswordVisible est faux
                />
                <TouchableOpacity
                    onPress={togglePasswordVisibility}
                    style={styles.iconContainer}
                >
                    <Icon
                        name={isPasswordVisible ? "visibility" : "visibility-off"}
                        size={20}
                        color="#888"
                    />
                </TouchableOpacity>
            </View>

        )

    } else if (type == "email") {
        const [error, setError] = React.useState(false);
        const [touched, setTouched] = React.useState(false);

        const validateEmail = (input) => {
            setError(!isEmail(input)); // Met à jour l'erreur si l'email est invalide
        };

        return (
            <View >
                <TextInput
                    style={[styles.input, error && touched ? styles.inputError : null]}
                    onChangeText={(text) => {
                        onChangeText(text);
                        if (touched) validateEmail(text); // Valide en temps réel uniquement si le champ a été touché
                    }}
                    value={value}
                    placeholder={placeholder || "Saisissez l'email"}
                    secureTextEntry={secureTextEntry}
                    onBlur={() => {
                        setTouched(true); // Marque le champ comme touché
                        validateEmail(value); // Valide le champ à la sortie
                    }}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    passwordInput: {

        height: 40,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    password: {
        height: 40,
        width:"90%",
  
    },
    inputError: {
        borderColor: "red", // Met en évidence l'erreur
    },
    errorText: {
        color: "red",
        fontSize: 12,
        marginTop: 5,
    },
});

export default TextInputR