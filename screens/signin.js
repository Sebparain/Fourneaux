import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';



function SignIn() {


    return (
        <View style={{ flex: 1,  backgroundColor: "#FF5A5D", justifyContent: "center", alignItems: "center" }}>
            <Text>Fourneaux&Cie</Text>

            <Input placeholderTextColor="#ADADAD" placeholder="Email" inputContainerStyle={styles.input} />
            <Input placeholderTextColor="#ADADAD" placeholder="Mot de passe" inputContainerStyle={styles.input} />

            <Button title="Se connecter" type="solid" containerStyle={{padding: 20}} buttonStyle={styles.button} />

            <Text>Pas encore inscrit? Crééz votre compte</Text>
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

});


export default SignIn