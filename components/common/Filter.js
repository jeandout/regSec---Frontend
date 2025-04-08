import react from "react";
import { useState } from "react";
import { View, Modal, Text, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import ButtonR from "./ButtonR";


const Filter = ({ onPress }) => {

    const [isVisible, setIsVisible] = useState(false);


    return (
        <>
            <ButtonR
                onPress={() => setIsVisible(true)}
                title={"Filter"}
            />
            <Modal
                visible={isVisible}
                animationType="fade"
                transparent={true}
                onRequestClose={() => setIsVisible(false)}
            >
                <Pressable style={styles.modalOverlay} onPress={() => setIsVisible(false)}>
                    <Pressable style={styles.modalContent} onPress={() => { }}>
                        <Text style={styles.modalTitle}>Options de filtre</Text>

                        {/* Place ici des switches, checkboxes, etc. */}
                        <Text>- Afficher les waypoints</Text>
                        <Text>- Afficher les routes</Text>
                        <Text>- Afficher les routes logistiques</Text>

                        {/* Bouton de fermeture */}
                        <TouchableOpacity onPress={() => setIsVisible(false)} style={styles.closeButton}>
                            <Text style={{ color: 'white' }}>Fermer</Text>
                        </TouchableOpacity>
                    </Pressable>
                </Pressable>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({

    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 10,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    closeButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 6,
        marginTop: 20,
        alignSelf: 'flex-end',
    },
});

export default Filter