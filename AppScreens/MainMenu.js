import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
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

     // Ingredients variable declared: like an "array of components"
     // Just contains Ingredient Components
       let Ingredients = this.state.ingredientArray.map( (val,key) => {
           return <Ingredient key={key} keyval={key} val={val}
           deleteMethod = { () => this.deleteIngredient(key)} />
       });

       return (
          // One line add for KeyboardAvoidingView
           <KeyboardAvoidingView style = {styles.wrapper} behavior = "padding" enabled>
           {/* Main View Container */}
               <View style={ styles.mainContainer }>

                  {/* Title Container */}
                   <View style={styles.titleContainer}>
                       <Text style={styles.title}>EasyRecipes</Text>
                   </View>

                   {/* Double enclosed box for ScrollView for style */}
                   <View style = { styles.mainBox }>
                        <ScrollView style = {styles.listContainer}>
                            {Ingredients}
                        </ScrollView>
                   </View>

                   {/* Input Text Box*/}
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

                          {/* For the button to add - links addIngredient to press*/}
                           <View style = {{ position: 'relative', bottom: 52.5, left: 215}}>
                               <TouchableOpacity
                                // bind is how you link methods to buttons
                                   onPress = { this.addIngredient.bind(this) }
                                   style = { styles.addButton }>
                                   { /*"Entypo" & others calls the image icons from Expo lib*/}
                                   <Entypo name="add-to-list" size={25} color="white" />
                               </TouchableOpacity>
                           </View>
                       </View>
                   </View>

                   <View style = { styles.searchdeleteContainer }>
                      {/* Search button*/}
                       <TouchableOpacity
                           onPress = { this.addIngredient.bind(this) }
                           style = { styles.searchButton }>
                           <AntDesign name="search1" size={25} color="white" />
                       </TouchableOpacity>

                       {/* Clear list button*/}
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

           this.state.ingredientArray.push({
               'ingredient' : this.state.ingredientText
           });
           this.setState({ ingredientArray: this.state.ingredientArray });
           this.setState({ ingredientText: ''});

       }
   }

   deleteIngredient(key) {
       this.state.ingredientArray.splice(key, 1);
       this.setState({ ingredientArray: this.state.ingredientArray })
   }

   clearList(){
       if (this.state.ingredientArray.length > 0) {
           this.state.ingredientArray = [];
           this.setState({ ingredientArray: this.state.ingredientArray })
       }
   }
}

const styles = StyleSheet.create({
   wrapper: {
       flex: 1,
   },

   mainContainer: {
       flex: 1,
       backgroundColor: '#fff', // #1DE9B6, #FFA726
   },

   titleContainer: { // View for app title
       alignItems: 'center',
       justifyContent: 'center',
       height: 180,
   },

   title: { // For Text
       fontWeight: 'bold',
       color: 'black',
       fontSize: 50,
       padding: 26,
   },

   listContainer: { // view for scroll view of ingredients
       flex: 1,
       padding: 3,
   },

   inputContainer: { // view for textinput container
       position: 'relative',
       zIndex: 10,
       height: 60,
       width: 275,
       justifyContent: 'center',
       alignSelf: 'center',
   },

   ingredientInput: { // for textinput
       alignSelf: 'stretch',
       color: '#fff',
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

   mainBox: {
       width: 275,
       justifyContent: 'center',
       backgroundColor: '#E0E0E0',
       borderRadius: 10,
       alignItems: 'center',
       height: '35%',
       alignSelf: 'center',
       borderBottomWidth: 1,
       borderBottomColor: '#E0E0E0',
   },

   searchdeleteContainer: {
       alignItems: 'center',
       justifyContent: 'center',
       height: 55,
       backgroundColor: '#fff',
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
