import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainMenu from './AppScreens/MainMenu';
import RecipeMenu from './AppScreens/RecipeMenu';
import RecipeDisplay from './AppScreens/RecipeDisplay';

export default class App extends React.Component {
  render() {
    return(
    <RecipeDisplay/>
    // <RecipeMenu/>
    // <MainMenu/>
    );
  }
 }