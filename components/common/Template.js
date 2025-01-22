import React from "react";
import { KeyboardAvoidingView, StyleSheet, SafeAreaView } from "react-native";

function Template({children}) {
    return (
        <SafeAreaView style={styles.main}>
            <KeyboardAvoidingView >
                {children}
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        height: "100%",
        width: "100%",
        padding: 10,
        paddingTop:50,
    },

});

export default Template