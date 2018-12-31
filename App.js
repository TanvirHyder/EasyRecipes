import React from 'react';
import { StyleSheet } from "react-native";
import MainMenu from './AppScreens/MainMenu';
import SearchResults from './AppComponents/SearchResults';

import { createAppContainer, createStackNavigator } from "react-navigation";

export default class App extends React.Component {
  render(){
    return(
      <AppContainer />
    );
  }
}

const SerachNavigator = createStackNavigator({

  EasyRecipe: { 
    screen: MainMenu,
    navigationOptions: ({ navigation }) => ({
      header: null, // hides the header
    }),
  },

  SearchResults: { 
    screen: SearchResults,
    navigationOptions: ({ navigation }) => ({
      title: 'Search Results',
      headerStyle: styles.styleHeader ,
    }),
  },

});

const AppContainer = createAppContainer(SerachNavigator);

const styles = StyleSheet.create({
  styleHeader: {
    backgroundColor: '#E0E0E0',
  }
})
