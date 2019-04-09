import React from 'react';
import { StyleSheet, Text, View, Image, Alert, AsyncStorage } from 'react-native';

export class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false,
            loggedUser: false
        }
    }

    toggleUser = ()=>{
        if (this.state.isLoggedIn) {
            AsyncStorage.setItem('userLoggedIn', 'none', (err,result) => {
                this.setState({
                    isLoggedIn: false,
                    loggedUser: false
                });
                Alert.alert('User logged out');
            });
        }
        else {
            this.props.navigate('LoginRT');
        }
    }

    componentDidMount(){
        AsyncStorage.setItem('userLoggedIn', 'none', (err,result) => {
            if (result==='none') {
                console.log('None')
            }
            else if (result === null){
                AsyncStorage.setItem('userLoggedIn', 'none' , (err, result) => {
                    console.log('Set user to NONE');
                })
            }
            else {
                this.setState({
                    isLoggedIn: true,
                    loggedUser: result
                });
            }
        });
    }

    render(){
        let display = this.state.isLoggedIn ? 'Sample User' : this.props.message;
        return (
            <View style={styles.headStyle}>
                <Image 
                style={styles.logoStyle}
                source={require('./img/sou-sesi_400x400.jpg')}
                />
                
                <Text 
                 style={styles.headText}   
                 onPress={this.toggleUser} >
                {display}
                </Text>
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
        flex: 1,
        flexDirection: 'row',
        borderColor: '#000'
    },
    logoStyle: {
        flex: 1,
        width: undefined,
        height: undefined
    },
    container: {
      flex: 1,
      backgroundColor: 'lightgray',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });