import React from 'react';
import { StyleSheet } from "react-native";
import MainMenu from './AppScreens/MainMenu';
import RecipeMenu from './AppScreens/RecipeMenu';
import RecipeDisplay from './AppScreens/RecipeDisplay';

import { createAppContainer, createStackNavigator } from "react-navigation";

export default class App extends React.Component {
  render(){
    return(
      <AppContainer />
    );
  }
}

const SerachNavigator = createStackNavigator({
// First screen in stack navigator is the entry point
  EasyRecipe: { 
    screen: MainMenu,
    navigationOptions: ({ navigation }) => ({
      header: null, // hides the header
    }),
  },

  RecipeMenu: { 
    screen: RecipeMenu,
    navigationOptions: ({ navigation }) => ({
      header: null
    }),
  },
  
  RecipeDisplay: {
    screen: RecipeDisplay,
    navigationOptions: ({navigation}) => ({
      header: null
    }),
  }

});

const AppContainer = createAppContainer(SerachNavigator);

const styles = StyleSheet.create({
  styleHeader: {
    backgroundColor: '#E0E0E0',
  }
})
