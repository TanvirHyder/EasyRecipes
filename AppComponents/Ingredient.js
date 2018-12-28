import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Ingredient extends React.Component {
   render() {
       return (
           <View
           key = {this.props.keyval}
           style = {styles.ingredient}>

               <Text style = {styles.ingredientText}>{this.props.val.ingredient}</Text>

               <TouchableOpacity
               onPress = {this.props.deleteMethod}
               style = {styles.deleteButton}>
                   <MaterialCommunityIcons name="playlist-remove" size={20} color="white" />
               </TouchableOpacity>

           </View>
       );
   }
}

const styles = StyleSheet.create({
   ingredient: {
       position: 'relative',
       padding: 20,
       paddingRight: 100,
       marginBottom: 5,
       marginTop: 5,
       backgroundColor: '#80DEEA',
       borderRadius: 5,
       width: 267,
   },

   ingredientText: {
       paddingLeft: 20,
       borderLeftWidth: 10,
       borderLeftColor: '#80DEEA',
       backgroundColor: '#80DEEA',
       color: 'black',
       fontSize: 11,
       fontWeight: 'bold',
   },

   deleteButton: {
       width: 40,
       height: 40,
       position: 'absolute',
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#424242',
       padding: 10,
       top: 7.2,
       right: 15,
       borderRadius: 40,
   },
})
