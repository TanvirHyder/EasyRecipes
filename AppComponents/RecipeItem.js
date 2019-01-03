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
        marginBottom: 10,
        marginTop: 10,
        alignItems: 'stretch',
        justifyContent: 'space-between',
        backgroundColor: '#80DEEA',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    }, 

    itemText: {
        flex: 1,
        paddingLeft: 15,
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold',
    },

    itemImage: {
        flex: 1,
    }, // Figure out how to display an image in the item

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
