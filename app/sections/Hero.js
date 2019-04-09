import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export class Hero extends React.Component{
    
    render(){
        return (
            
                <Image 
                style={styles.heroImage}
                source={require('./img/credenciamento_sesi.jpg')}
                />            
            
        );
    }
}

const styles = StyleSheet.create({
    heroImage: {
        flex: 8,
        width: undefined,
        height: undefined
    }
  });