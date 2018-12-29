import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default class RecipeMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // insert variables here
        }
    }
    
    render() {
        return(
            <View style = {styles.mainContainer}>

                <View style = {styles.titleContainer}>
                    <Text style = {styles.titleText}>
                        Choose a recipe!
                    </Text>                    
                </View>

                <View style = {styles.recipesContainer}>
                    <ScrollView style = {styles.listScroller}>
                    {/* Insert Items here */}
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
    },

    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 180,
    },

    titleText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 28,
        padding: 26,
    },

    recipesContainer: {
        width: 300,
        justifyContent: 'center',
        backgroundColor: '#E0E0E0',
        borderRadius: 10,
        alignItems: 'center',
        height: '65%',
        alignSelf: 'center',
    },

    listScroller: { // View for scrolling through recipes
        flex: 1,
    },
})