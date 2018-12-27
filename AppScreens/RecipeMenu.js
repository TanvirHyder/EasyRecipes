import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { AntDesign, EvilIcons, Entypo } from '@expo/vector-icons';

export default class RecipeMenue extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // insert variables here
        }
    }
    
    render() {
        // return(
        //     <View style = 
        // );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },

    titleContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 180,
    },

    titleText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 50,
        padding: 26,
    },

    listContainer: { // View for scrolling through recipes
        flex: 1,
        padding: 3,
    },
})