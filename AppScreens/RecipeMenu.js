import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default class RecipeMenue extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true, // boolean indicating api response
            data: null, // json values ex: count
            ingredientArray: 
            props.navigation.state.params.ingredientArrayCopy,
            // array format: [ {'ingredient' : 'ingredient1text'}, {'ingredient' : 'ingredient2text'}... ]
            // to read the ingredient strings: "this.state.ingredientArray[i].ingredient"
        }
    }

    componentDidMount() {
        const API_KEY = 'beaedea3794702b125fd6a66aa1b20ab';
        const BASIC_SEARCH_ENDPOINT = `https://www.food2fork.com/api/search?key=${API_KEY}&q=`;
        return fetch(`${BASIC_SEARCH_ENDPOINT}${this.getIngredientParams()}`)
            .then( (response) => response.json() )
            .then( (responseJson) => {
                this.setState({
                    isLoading: false,
                    data: responseJson.recipes, // Array of recipes
                    // set Data to the response.Json.recipes & index thru top 5 to list (sort by poularity in API)
                })
            })
            .catch( (error) => {
                console.log(error)
            });
    }
    
    render() {
        if (this.state.isLoading) {
            return(
                <View style = {styles.mainContainer}>
                    <ActivityIndicator>
                        <Text style = {styles.titleText}>
                            Loading...
                        </Text>
                    </ActivityIndicator>
                </View>
            );
        } 
        
        else {

            let recipes = this.state.data.map( (val, key)  => {
                return <Text key={key}>{val.title}</Text>
            });

            return (
                <View style = {styles.mainContainer}>
                    <View style = {styles.titleContainer}>
                        <Text style = {styles.titleText}>
                            Choose a Recipe!
                        </Text>
                    </View>

                    <View style = {styles.recipesContainer}>
                        <ScrollView style = {styles.listScroller}>
                            {recipes}
                        </ScrollView>
                    </View>
                </View>
            );
        }
    }


    /**
     * Returns ingredients comma delimited for Food2Fork API
     */
    getIngredientParams() {
        let ingredients = '';
        for (let i = 0; i < this.state.ingredientArray.length; i++) {
            ingredients = ingredients + this.state.ingredientArray[i].ingredientArray + ',';
        }
        return ingredients.substring(0, (ingredients.length - 1));
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F4F4F0',
        justifyContent: 'cetner',
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
        backgroundColor: '#FF6347',
        borderRadius: 10,
        alignItems: 'center',
        height: '65%',
        alignSelf: 'center',
    },

    listScroller: { // View for scrolling through recipes
        flex: 1,
    },
})