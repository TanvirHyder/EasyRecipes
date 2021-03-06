import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, ToastAndroid } from 'react-native';
import RecipeItem from '../AppComponents/RecipeItem';

export default class RecipeMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true, // boolean indicating api response
            data: [], // json values ex: count, recipes
            ingredientArray: props.navigation.state.params.ingredientArrayCopy,
            // array format: [ {'ingredientValue' : 'ingredient1text'}, {'ingredientValue' : 'ingredient2text'}... ]
            // to read the ingredient strings: "this.state.ingredientArray[i].ingredientValue"
        }
    }

    componentDidMount() {
        const API_KEY = 'beaedea3794702b125fd6a66aa1b20ab';
        // Sort by rating
        const BASIC_SEARCH_ENDPOINT = `https://www.food2fork.com/api/search?key=${API_KEY}&q=`;
        return fetch(`${BASIC_SEARCH_ENDPOINT}${this.getIngredientParams()}&sort=r`)
            .then( (response) => response.json() )
            .then( (responseJson) => {
                this.setState({
                    isLoading: false,
                    data: responseJson.recipes.splice(0, 5), // Array of recipes limited to 5
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
                    <ActivityIndicator/>
                </View>
            );
        } 
        
        else {
            if (!Array.isArray(this.state.data)) {
                ToastAndroid.show('Not Array Error!', ToastAndroid.SHORT);
                this.props.navigation.goBack();
            } else if (this.state.data.length == 0) {
                ToastAndroid.show('No recipes found!', ToastAndroid.SHORT);
                this.props.navigation.goBack();
            }

            let recipes = this.state.data.map( (val, index)  => {
                return <RecipeItem key={index} keyval={index} val={val}
                recipeTitle = {this.state.data[index].title}
                recipeImage = {this.state.data[index].image_url}
                displayPrep = { () => this.goToPrep(index)} />
            });

            return (
                <View style = {styles.mainContainer}>
                    <View style = {styles.titleContainer}>
                        <Text style = {styles.titleText}>
                            Choose a Recipe!
                        </Text>
                    </View>
                    <View style = {styles.recipesContainer}>
                        {recipes}
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
            ingredients = ingredients + this.state.ingredientArray[i].ingredientValue + ',';
        }
        return ingredients.substring(0, (ingredients.length - 1));
    }

    goToPrep(index) {
        this.props.navigation.navigate('RecipeDisplay', {
            webUrl: this.state.data[index].source_url,
        });
    }

    // returnHome() {
    //     this.props.navigation.navigate('MainMenu');
    // }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F4F4F0',
        justifyContent: 'center',
        flexDirection: 'column',
    },

    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },

    titleText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 28,
        padding: 26,
    },

    recipesContainer: {
        flexDirection: 'column',
        flex: 5,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#FF6347',
        height: '65%',
        alignSelf: 'stretch',
    },
})