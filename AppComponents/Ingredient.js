import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default class Ingredient extends React.Component {
    render() {
        return (
            <View
            key = {this.props.keyval}
            style = {styles.ingredient}>

                <Text style = {styles.ingredientText}>{this.props.val.ingredientValue}</Text>

                <TouchableOpacity
                onPress = {this.props.deleteMethod}
                style = {styles.deleteButton}>
                    <FontAwesome name="remove" size={10} color="white" />
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    ingredient: {
        position: 'relative',
        padding: 10,
        paddingRight: 100,
        marginBottom: 5,
        marginTop: 5,
        backgroundColor: '#FFBBDD', //light blue 80DEEA, light pink FFBBDD
        borderRadius: 5,
        width: 267,
        height: 40,
    }, 

    ingredientText: {
        paddingLeft: 15,
        backgroundColor: '#FFBBDD', //light blue 80DEEA, light pink FFBBDD
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold',
        width: 190,
    },

    deleteButton: {
        width: 28,
        height: 28,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#424242',
        padding: 10.3,
        top: 3,
        right: 15,
        borderRadius: 28,
    },

})
