import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default class RecipeItem extends React.Component {
    render() {
        return (
            <View
            key = {this.props.keyval}
            style = {styles.item}>

                <Text style = {styles.itemText}>
                    {this.props.recipeTitle}
                </Text>

                // Display a picture of the recipe - an image as a prop
                 { /* this.props.recipeImage */ } // needs fixing to actually link to pic

                <TouchableOpacity
                onPress = {this.props.displayPrep}
                style = {styles.navButton}>
                    <AntDesign name="rightcircle" size={10} color="white" />
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        alignSelf: 'stretch',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        // position: 'relative',
        // padding: 10,
        // paddingRight: 100,
        // marginBottom: 5,
        // marginTop: 5,
        // backgroundColor: '#FFBBDD', //light blue 80DEEA, light pink FFBBDD
        // borderRadius: 5,
        // width: 267,
        // height: 40,
    }, 

    itemText: {
        paddingLeft: 15,
        backgroundColor: '#FFBBDD', //light blue 80DEEA, light pink FFBBDD
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold',
        width: 190,
    },

    itemImage: {}, // Figure out how to display an image in the item

    navButton: {
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
