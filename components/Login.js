import React, {Component} from 'react'
import {StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar,
TextInput, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView, Touchable} from 'react-native'
import Dashboard from './Dashboard';
import {createStackNavigator } from 'react-navigation-stack';  

    
export  class Login extends Component{

   
    render(){
        return(
        
            <TouchableWithoutFeedback style = {styles.container} onPress = {Keyboard.dismiss}>
            <View style = {styles.container}>
                 <View style = {styles.logoContainer}>
                 <Text style = {styles.title}>
                      Welcome to React Native</Text>
                  <Image style = {styles.logo}
                        source = {require('../images/login.png')}>
                  </Image> 
                  
                  <Text style = {styles.subtitle}>
                     Please enter your login details</Text>
                  <View style = {styles.infoContainer}>
                     <TextInput style = {styles.input}
                     placeholder = "Enter username/email"
                     placeholderTextColor = '#CCCCCC'
                     keyboardType = 'email-address'
                     returnKeyType = 'next'
                     autoCorrect = {false}
                     onSubmitEditing = {()=>this.refs.txtPassword.focus()}

                     />
                      <TextInput style = {styles.input}
                     placeholder = "Enter password"
                     placeholderTextColor = '#CCCCCC'
                     returnKeyType = 'go'
                     secureTextEntry = {true}
                     ref={"txtPassword"}

                     />
                       <Text style = {styles.forgotPassword}>
                    Forgot Password?</Text>
                     <TouchableOpacity style = {styles.buttonContainer}>
                            <Text style = {styles.buttonText}
                                onPress = {()=>  
                                       this.props.navigation.navigate('Dashboard')
                                }
                        >LOGIN</Text>
                     </TouchableOpacity>
                     <TouchableOpacity style = {styles.buttonContainer}>
                            <Text style = {styles.buttonText}>SIGN UP</Text>
                     </TouchableOpacity>
                  </View>
                </View>
            </View>
</TouchableWithoutFeedback>

        )
    }
}

 const styles = StyleSheet.create({
    container:  
    {  
        justifyContent: 'center',  
        alignItems: 'center',  
        backgroundColor: '#D6EAF8',  
        flex:1,  
    },
    logoContainer:  
    {  
        alignItems:'center',  
        marginVertical:50,
        flex:1 ,
    },
    logo:  
    {  
        width:128,
        height:128,
        marginVertical:10
    },
    subtitle:  
    {  
        color:'#78909C',
        fontSize:18,
        textAlign: 'center' ,
        marginTop: 5,

    },
    forgotPassword:  
    {  
        color:'#455A64',
        fontSize:16,
        textAlign: 'right' ,
        marginBottom: 10,

    },
    title:  
    {  
        color:'#FF00CC',
        fontSize:28,
        textAlign: 'center' ,
        marginTop: 5,

    },
    infoContainer:  
    {  
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        backgroundColor:'#BBDEFB',
        height:300,
        padding:20,

    },
    input:  
    {  
       height:45,
       backgroundColor: '#FFFFFF',
       color:'#000',
       fontSize:18,
       paddingHorizontal:10,
       marginBottom: 10,

    },
    buttonContainer:  
    {  
        height:45,
       backgroundColor: '#f7c744',
       justifyContent:'center' ,
       marginBottom:10,
    
    },
    buttonText:  
    {  
     
       textAlign:'center',
       color: '#0000ff',
       fontSize:16,
       fontWeight:'bold'
    
    }
  })

   export default class App extends Component{
       render(){
           return(
            <AppStackNavigator/>
           );
          
       }
   }

   const AppStackNavigator = createStackNavigator({
        Login: Login,
        Dashboard: Dashboard
   });

