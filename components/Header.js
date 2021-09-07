import React from "react"
import { Text, StyleSheet, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text >Guess a number</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        height: 100,
        paddingTop: 50,
        backgroundColor: '#f7287b',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },

})
export default Header;