import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';

function SignUp() {


    return (
        <View style={styles.global}>
            <View style={{ height: 30, backgroundColor: "black", opacity: 0.5 }}>

            </View>

            <View style={{ alignItems: "center" }}>
                <Text style={{ color: "white", fontSize: 60 }}>Fourneaux</Text>
                <Text style={{ color: "white", fontSize: 60, marginBottom: 50 }}>&Cie</Text>

                <Input placeholderTextColor="#ADADAD" placeholder="Prénom" inputContainerStyle={styles.input} />
                <Input placeholderTextColor="#ADADAD" placeholder="Email" inputContainerStyle={styles.input} />
                <Input placeholderTextColor="#ADADAD" placeholder="Mot de passe" inputContainerStyle={styles.input} />

                <Button title="S'enregistrer'" type="solid" containerStyle={{ padding: 20 }} buttonStyle={styles.button} />
            
                <Text>© Fourneaux&Cie 2020</Text>
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#F0F0F0",
        borderRadius: 150,
        maxWidth: "85%",
        alignSelf: "center",
        paddingHorizontal: 20
    },
    button: {
        backgroundColor: "#FFC830",
        borderRadius: 150,
        paddingHorizontal: 30
    },
    global: {
        backgroundColor: "#FF5A5D",
        flex: 1,
        justifyContent: "space-between"
    }
});


export default SignUp