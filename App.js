import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SignIn from './screens/signin'
import SignUp from './screens/signup'




var StackNavigator = createStackNavigator({
  SignIn: SignIn,
  SignUp: SignUp,
}, 
{
  headerMode: "none"
});



const Navigation = createAppContainer(StackNavigator);

export default function App() {
  return (
    <View>
    <Navigation />
    </View>
  )
}