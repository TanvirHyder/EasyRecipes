import React from 'react';
import { ActivityIndicator, StyleSheet, View, WebView } from 'react-native';

export default class RecipeDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: false,
        })
    }

    render() {
        if (this.state.isLoading) {
            return(
                <View style = {styles.mainContainer}>
                    <ActivityIndicator/>
                </View>
            );
        } else {
            const webPage = this.props.navigation.state.params.webUrl;
            return(
                    <WebView
                    source = {{uri: webPage}}
                    style = {styles.webPage}
                    />
            );
        }
    }
}

const styles = StyleSheet.create({
    webPage: {
    },

    mainContainer: {
        flex: 1,
        backgroundColor: '#ffa',
        flexDirection: 'column',
    },

    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 180,
    },

    recipeTitleText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 28,
        padding: 26,
    },

    instructionContainer: {
        width:300,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: '65%',
        backgroundColor:'#E0E0E0',
        borderRadius: 10,
    },

    recipeInstructionText: {
        fontWeight: 'normal',
        color: 'black',
        fontSize: 26,
        padding: 10,
    },
})