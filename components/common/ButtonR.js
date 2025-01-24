import React from "react";
import { Button, StyleSheet } from "react-native";

const ButtonR = ({onPress, title}) => {

    return (
        <Button
      
            title={title}
            onPress={onPress}
        >
        </Button>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default ButtonR