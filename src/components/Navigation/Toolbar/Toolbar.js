import React from 'react';
import './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
const toolbar = (props) => {
    return (
        <header className ="Toolbar">
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <Logo height="80%"></Logo>
            <nav className="DesktopOnly">
                <NavigationItems loginStatus="false"/>
            </nav>
        </header>
    );
};

export default toolbar;