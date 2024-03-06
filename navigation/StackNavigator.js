import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import TabNavigator  from "./TabNavigator";
import  PostScreen from "../screens/PostCard";
const Stack  = createStackNavigator();
 const StackNavigator = ()=>{
    return(
        <Stack.navigator initialRouteName= "Home"
        screenOptions = {{
            headerShown:false
        }}>
            <Stack.screen name = "Home" component ={TabNavigator}/>
            <Stack.screen name = "PostScreen" component = {PostScreen}/>
        </Stack.navigator>
    );
 };

 export default StackNavigator;