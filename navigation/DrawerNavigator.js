    import React from 'react';
    import {createDrawerNavigator} from '@react-navigator/drawer';
    import TabNavigator from '../navigation/TabNavigator'
    import Profile from '../screens/Profile'

    const Drawer = createDrawerNavigator();
    const DrawerNavigator  = ()=> {
        return(
            <Drawer.navigator>
                <Drawer.screen name = "Home" component = {TabNavigator}/>
                <Drawer.screen name = "Profile" component = {Profile}/>
            </Drawer.navigator>
        );
    };

    export default DrawerNavigator;
