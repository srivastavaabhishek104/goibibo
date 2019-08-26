import './NavigationItems.css'
import {NavLink,withRouter,Link} from 'react-router-dom'
import Aux from '../../hoc/Aux';
import LoginModal from '../../UI/Modal/LoginModal'
import React, { Component } from 'react';
import RegisterModal from '../../UI/Modal/RegisterModal'
import ProfilePic from '../../../assets/images/img_avatar.png'
import { connect } from 'react-redux';
class NavigationItems extends Component {
    handleLogout = () => {
        this.props.handleLogout();
        this.props.history.push('/');
    }
    render() {
        let modal = null;
        if (this.props.formType === 1) {
            modal = <LoginModal show = {this.props.loginOrRegisterState} modalClosed = {this.props.changeLoginOrRegisterStateHandler}></LoginModal>
        } else if(this.props.formType === 2){
            modal = <RegisterModal show = {this.props.loginOrRegisterState} modalClosed = {this.props.changeLoginOrRegisterStateHandler}></RegisterModal>
        }
        return (
            <Aux>
                {modal}
                {
                    this.props.loginStatus?
                    <ul>
                        <li><NavLink to="/dashboard"> Home </NavLink></li>
                        <li><NavLink to="/bookings" style={{marginLeft:"10px",marginRight:"20px"}}> Your Bookings </NavLink></li>
                        <li><img src={ProfilePic} alt = "Profile Pic" style={{borderRadius:"50%",width:"50px",height:"40px",marginTop:"3px",marginRight:"-10px"}}></img></li>
                        <li> 
                            <NavLink to="#"> {this.props.userId}
                                <ul className="dropdown"> 
                                    <li><Link to="#" onClick={this.handleLogout}>Log out</Link></li>
                                </ul>
                            </NavLink>
                        </li>
                    </ul>:
                    <ul>
                        <li><NavLink to="/" exact> Home </NavLink></li>
                        <li><NavLink to="/about"> About </NavLink></li>
                        <li><NavLink to="#" onClick={() => this.props.loginOrRegisterHandler(1)} > Login </NavLink></li>
                        <li style={{marginTop:"13px",marginLeft:"-10px"}}>/</li>
                        <li><NavLink to="#" onClick={() => this.props.loginOrRegisterHandler(2)} style={{marginLeft:"-13px"}}>Register </NavLink></li>
                        <li><NavLink to="/contact" > Contact </NavLink></li>
                        <li><NavLink to="/help"> Help </NavLink></li>
                    </ul>
                }
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loginOrRegisterState: state.loginOrRegisterState,
        formType: state.formType,
        loginStatus: state.loginStatus,
        userId: state.user_id
    } 
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginOrRegisterHandler: (fType) => {
            return dispatch({type: "login or register", fType:fType })
        },
        changeLoginOrRegisterStateHandler: () => {
            return dispatch({type:"loginOrRegisterState"})
        },
        handleLogout: () => {
            return dispatch({type:"logoutHandler"})
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(NavigationItems));
