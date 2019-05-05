import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import { AntDesign, EvilIcons, Entypo } from '@expo/vector-icons';
import Ingredient from '../AppComponents/Ingredient';

export default class MainMenu extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            ingredientArray: [],
            ingredientText: '',
        }
    }

    render() {

        let Ingredients = this.state.ingredientArray.map( (val,index) => {
            // These are props: key, keyval, val, deleteMethod
            return <Ingredient key={index} keyval={index} val={val}
            deleteMethod = { () => this.deleteIngredient(index)} />
        });

        return (
            <KeyboardAvoidingView style = {styles.wrapper} behavior = "padding" enabled>
                <View style={ styles.mainContainer }>

                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>EasyRecipes</Text>
                    </View>
                    
                    <View style = { styles.ingredientsBox }>
                            <ScrollView style = {styles.listContainer}>
                                {Ingredients}
                            </ScrollView>
                    </View>

                    <View style = {{paddingVertical: 7,}}>
                        <View style = {styles.inputContainer}>
                            <TextInput
                            style = {styles.ingredientInput}
                            onChangeText = { (ingredientText) => this.setState({ingredientText})}
                            value = {this.state.ingredientText}
                            placeholder = 'Add Ingredients'
                            placeholderTextColor = '#fff'
                            underlineColorAndroid = 'transparent'>
                            </TextInput>

                            <View style = {{ position: 'relative', bottom: 52.5, left: 215}}>
                                <TouchableOpacity
                                    onPress = { this.addIngredient.bind(this) }
                                    style = { styles.addButton }>
                                    <Entypo name="add-to-list" size={25} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style = { styles.searchdeleteContainer }>
                        <TouchableOpacity 
                            onPress = { this.goToSearch.bind(this) }
                            style = { styles.searchButton }>
                            <AntDesign name="search1" size={25} color="white" />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress = { this.clearList.bind(this) }
                            style = { styles.clearButton }>
                            <EvilIcons name="trash" size={35} color="white" />
                        </TouchableOpacity>
                    </View>

                </View>
            </KeyboardAvoidingView>
        );
    }

    addIngredient() {
        if (this.state.ingredientText) {
            // Iterate through the array to get objects
            var i;
            var inArrayFlag = false;
            for (i = 0; i < this.state.ingredientArray.length; i++) {
                if (this.state.ingredientArray[i]['ingredientValue'] == this.state.ingredientText) {
                    inArrayFlag = true;
                }
            }

            if (inArrayFlag) {
                ToastAndroid.show('You\'ve already entered this ingredient!', ToastAndroid.SHORT);
                this.setState({ ingredientText: ''});
            } else {
                // Push to the ingredient Array, and then update the state
                this.state.ingredientArray.push({
                    'ingredientValue' : this.state.ingredientText,
                });
                this.setState({ ingredientArray: this.state.ingredientArray });
                this.setState({ ingredientText: ''});
            }

        }
    }

    deleteIngredient(index) {
        this.state.ingredientArray.splice(index, 1)
        this.setState({ ingredientArray: this.state.ingredientArray })
    }

    clearList(){
        if (this.state.ingredientArray.length > 0) {
            this.setState({ ingredientArray: [] })
        }
    }

    goToSearch(){
        if (this.state.ingredientArray.length > 0) {
            this.props.navigation.navigate('RecipeMenu', {
                ingredientArrayCopy: this.state.ingredientArray,
            });
        }
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    
    mainContainer: {
        flex: 1,
        backgroundColor: '#F4F4F0', // #fff
    },

    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 180,
    },

    title: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 50,
        padding: 26,
    },

    listContainer: {
        flex: 1,
    },

    inputContainer: {
        position: 'relative',
        zIndex: 10,
        height: 60,
        width: 275,
        justifyContent: 'center',
        alignSelf: 'center',
    },

    ingredientInput: {
        alignSelf: 'stretch',
        color: '#F4F4F0',
        padding: 20,
        backgroundColor: '#252525',
        borderRadius: 10,
    },

    addButton: {
        position: 'absolute',
        zIndex: 11,
        backgroundColor: '#E31E42',
        width: 45,
        height: 45,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    ingredientsBox: {
        width: 275,
        justifyContent: 'center',
        backgroundColor: '#E0E0E0', // E0E0E0
        borderRadius: 10,
        alignItems: 'center', 
        height: '35%',
        alignSelf: 'center',
    },

    searchdeleteContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        backgroundColor: '#F4F4F0', // #fff
        width: 130,
        alignSelf: 'center',
        borderRadius: 10,
    },

    searchButton: {
        position: 'absolute',
        zIndex: 11,
        backgroundColor: '#E31E42',
        width: 45,
        height: 45,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        left: 14,
        bottom: 5,
    },

    clearButton: {
        position: 'absolute',
        zIndex: 11,
        backgroundColor: '#E31E42',
        width: 45,
        height: 45,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        left: 71,
        bottom: 5,
    },

})
