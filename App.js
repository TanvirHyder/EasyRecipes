import React from 'react';
import MainMenu from './AppScreens/MainMenu';
import RecipeMenu from './AppScreens/RecipeMenu';

export default class App extends React.Component {
 render() {
   return(
     <RecipeMenu/>
    // <MainMenu/>
   );
 }
}
