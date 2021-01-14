/**
 * @format
 */
import React, {Component} from 'react'
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Splash from './components/Splash';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import App from './App';

class Main extends Component{

    constructor(props){
        super(props);
        this.state= {currentScreen: 'Splash'};
      
        setTimeout(()=>{
           
            this.setState({currentScreen: 'Login'});
        }, 5000)
    }
    render(){
        const {currentScreen } = this.state
        let mainScreen = currentScreen === 'Splash' ?   <Splash /> : <Login />
        return mainScreen
        }
}

AppRegistry.registerComponent(appName, () => Main);
