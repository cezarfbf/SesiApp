import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../sections/Header';
import { Hero } from '../sections/Hero';
import { Menu } from '../sections/Menu';
import { StackNavigator } from 'react-navigation';

export class Home extends React.Component{
    static navigationOptions = {
        header: null
    };

    render(){
        const { navigate } = this.props.navigation;

        return (
            <View style = {styles.container}>
                <Header message = 'Login'/>
                <Hero/>
                <Menu navigate = { navigate }/>
                                
            </View>

        );
    }
}

const styles = StyleSheet.create({
    headText: {
        textAlign: 'right',
        color: '#fff',
        fontSize: 20
    },
    headStyle: {
        paddingTop: 30,
        paddingRight: 10,
        backgroundColor: '#35605a',
        flex: 1
    },
    container: {
      flex: 1,
      backgroundColor: 'lightgray',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   flexDirection: 'column-reverse'
    },
  });