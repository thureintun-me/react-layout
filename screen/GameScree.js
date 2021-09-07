import React from "react"
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const GameScreen = () => {
    return (
        <View>
            <Text style={styles.text} >Start A New Game</Text>
            <View style={styles.boxContainer}>
                <Text style={styles.boxText}>Select A Number</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} title={'reset'}>
                        <Text style={styles.buttonText}>Reset</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.buttonText}>Conifrm</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    text: {
        justifyContent: 'center',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 10,
    },

    boxContainer: {
        
        elevation: 3,
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'column',

    },
    boxText: {
        marginTop: 20,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    buttonText:{
        color:'cyan'
    }



});

export default GameScreen;