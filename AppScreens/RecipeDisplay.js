import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { AntDesign, EvilIcons, Entypo } from '@expo/vector-icons';

export default class RecipeDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // insert state variables here
        }
    }

    render() {
        return(
            <View style = {styles.mainContainer}>
                
                <View style = {styles.titleContainer}>
                    <Text style = {styles.recipeTitleText}>
                        {/* Insert title of recipe selected here */}
                    </Text>
                </View>

                <View style = {styles.instructionContainer}>
                    <Text style = {styles.recipeInstructionText}>
                        {/* Insert recipe instructions here */}
                    </Text>
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

    recipeTitleText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 28,
        padding: 26,
    },

    instructionContainer: {
        width:340,
        justifyContent: 'center',
        backgroundColor:'#E0E0E0',
        borderRadius: 10,
        alignItems: 'center',
    },

    recipeInstructionText: {
        fontWeight: 'normal',
        color: 'black',
        fontSize: 26,
        padding: 10,
    },
})