import React, {Component} from 'react'
import {  StyleSheet,  View,  Image} from 'react-native'


export default class Splash extends Component{
    render(){
        return (
            <View style = {styles.container}>
                 <Image source={{uri:'https://www.pinclipart.com/picdir/big/537-5374089_react-js-logo-clipart.png'}}  
                    style={{width:'80%', height: '80%', resizeMode: 'contain'}} />  
            </View>
        )
    }
}


const styles = StyleSheet.create(  
    { 
        container:  
        {  
            justifyContent: 'center',  
            alignItems: 'center',  
            backgroundColor: '#D6EAF8',  
            flex:1,  
        }
    })