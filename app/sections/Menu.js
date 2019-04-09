import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

export class Menu extends React.Component{
    
    onPress = ()=>{
        Alert.alert('You tapped the button!')
    }

    render(){
        return (
            <View style={styles.container}>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}>
                        <Text style={styles.buttonText}>Unidades</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle} onPress={()=>this.props.navigate('RegisterRT')}>
                        <Text style={styles.buttonText}>Cadastro</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}>
                        <Text style={styles.buttonText}>Blog</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle} onPress={()=>this.props.navigate('ContactRT')}>
                        <Text style={styles.buttonText}>Contato</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={()=>this.props.navigate('VideoRT')}>
                        <Text style={styles.buttonText}>Videos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}>
                        <Text style={styles.buttonText}>Sobre</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 6,
        backgroundColor: '#35605a'
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    buttonRow: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#fff',
        borderBottomWidth: 1
    },
    buttonStyle: {
        width: '50%',
        height: '50%',
        backgroundColor: '#35605a',
        alignItems: 'center',
        justifyContent: 'center'
        // paddingTop: 30,
        // paddingRight: 10,
        // flex: 1,
        // flexDirection: 'row',
        // borderColor: '#000'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18
    }
    
  });