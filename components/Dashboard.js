import React, {Component} from 'react'
import {StyleSheet, View, Image, TouchableOpacity,Text} from 'react-native'
import {createStackNavigator } from 'react-navigation-stack';  

export default class Dashboard extends Component{
   
    render(){
      return(
        
          <View style = {styles.container}>
              <View style = {styles.containerFirstRow}>
              <View style = {styles.imgText}>
                  <Image style = {styles.logoProfile}
                        source = {require('../images/profile.png')}>
                  </Image> 
                  <Text style = {styles.title}> Profile</Text>
             </View>
             <View style = {styles.imgText}>
                  <Image style = {styles.logoMyAccount}
                        source = {require('../images/account.png')}>
                  </Image> 
                  <Text style = {styles.title}> My Account</Text>
              </View>
              </View>
              <View style = {styles.containerSecondRow}>
              <View style = {styles.imgText}>
                  <Image style = {styles.logoMyOrders}
                        source = {require('../images/orders.png')}>
                  </Image> 
                  <Text style = {styles.title}> My Orders</Text>
              </View>
                <View style = {styles.imgText}>
                  <Image style = {styles.logoMyCart}
                        source = {require('../images/cart.png')}>
                  </Image>
                  <Text style = {styles.title}> My Cart</Text>
              </View>
              </View>
              <View style = {styles.containerBottomLayout}>
                    <TouchableOpacity style = {styles.buttonContainer}>
                            <Text style = {styles.buttonText}>HOME</Text>
                     </TouchableOpacity>
                     <TouchableOpacity style = {styles.buttonContainer}>
                            <Text style = {styles.buttonText}>ABOUT US</Text>
                     </TouchableOpacity>
                     <TouchableOpacity style = {styles.buttonContainer}>
                            <Text style = {styles.buttonText}>SETTINGS</Text>
                     </TouchableOpacity>
              </View>
              
         </View>
      )
    }
}

 const styles = StyleSheet.create({
    container:  
    {  
        justifyContent:'center',
        backgroundColor: '#D6EAF8',  
        flex:1, 
        flexDirection: 'column' 
    },
    imgText:  
    {  
       flexDirection: 'column'
    },
    containerFirstRow:  
    {  
        marginTop:100,justifyContent:'space-around', flex: 1, flexDirection: 'row'
    },

    containerSecondRow:  
    {  
        marginBottom:100,justifyContent:'space-around',flex: 1, flexDirection: 'row'
    },
    logoProfile:  
    {  
        justifyContent:'space-around',
        width:128,
        height:128,
    },
    logoMyAccount:  
    {  
        justifyContent:'space-around',
        width:128,
        height:128,

    },
    logoMyCart:  
    {  
        justifyContent:'space-around',
        width:128,
        height:128,
        
    },
    logoMyOrders:  
    {  
        justifyContent:'space-around',
        width:128,
        height:128,
    },
    containerBottomLayout:  
    {  
        position:'absolute',
        left:0,
        right:0,
        bottom:0, flex: 1,
         flexDirection: 'row',
          backgroundColor:'#BBDEFB',
        height:50,
        
        justifyContent:'space-evenly'
    },
    buttonContainer:  
    {  
        paddingVertical:15,
        paddingHorizontal:35,
       backgroundColor: '#f7c744',
    
    },
    buttonText:  
    {  
     
       textAlign:'center',
       color: '#0000ff',
       fontSize:16,
    
    },
    title:  
    {  
        color:'#FF00CC',
        fontSize:18,
        fontWeight:'bold',
        textAlign: 'center' ,
        marginTop: 5,

    },
  })