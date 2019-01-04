import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default class RecipeItem extends React.Component {

    render() {
        let imgSource = this.props.recipeImage;
        return (
            <View
            key = {this.props.keyval}
            style = {styles.item}>
                <View style = {styles.itemTextBox}>
                    <Text style = {styles.itemText}>
                        {this.props.recipeTitle}
                    </Text>
                </View>
                <View style = {styles.imageBox}>
                    <Image 
                        style = {styles.itemImage}
                        source = {{uri: imgSource}}
                    />
                </View>
                <View style = {styles.navButtonBox}>
                    <TouchableOpacity
                    onPress = {this.props.displayPrep}
                    style = {styles.navButton}>
                        <AntDesign name="rightcircle" size={10} color="white" />
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection:'row',
        flex:1,
        alignItems:'center',
        backgroundColor:'#80DEEA',
        borderBottomWidth:1,
        borderBottomColor:'#eee',
    }, 

    itemTextBox:{
        flex:2,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'flex-start',
        paddingLeft:15,
    },

    itemText: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold',
    },

    imageBox: {
        flex:2,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },

    itemImage: { // Figure out how to display an image in the item
        width:120,
        height:100,
    },

    navButtonBox: {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'flex-end',
        paddingRight: 20,
    },

    navButton: {
        width: 36,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#424242',
        borderRadius: 20,
    },
})
