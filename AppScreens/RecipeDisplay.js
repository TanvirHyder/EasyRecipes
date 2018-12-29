import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

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
                        Place holder text
                    </Text>
                </View>

                <View style = {styles.instructionContainer}>
                    <Text style = {styles.recipeInstructionText}>
                        {/* Insert recipe instructions here */}
                        Placeholder text.
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#ffa',
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
        width:300,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: '65%',
        backgroundColor:'#E0E0E0',
        borderRadius: 10,
    },

    recipeInstructionText: {
        fontWeight: 'normal',
        color: 'black',
        fontSize: 26,
        padding: 10,
    },
})