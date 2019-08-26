import React from 'react';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../hoc/Aux'
import Logo from '../../Logo/Logo';

const sideDrawer = (props) => {
   
    return (
        <Aux>
            <Backdrop show = {props.open} clicked = {props.closed}/>
            <div className={props.open ? "SideDrawer Open": "SideDrawer Close"}>
                <Logo height="11%" />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;