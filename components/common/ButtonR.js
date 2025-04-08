import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const ButtonR = ({ onPress, title }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ButtonR;
