import React, { Component } from 'react';
import './LoginModal.css'
import Aux from '../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'
import User from '../../../assets/images/user.png'
import {Link,withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
class LoginModal extends Component {
    formHandler = (e) => {
        let flag = false;
        e.preventDefault();
        for (var ls in localStorage) {
            if(e.target.email.value === ls && e.target.password.value === JSON.parse(localStorage.getItem(e.target.email.value)).password) {
                flag = true;
            } 
        }
        if(flag) {
    
            this.props.loginModalHandler();
            this.props.loginHandler(e.target.email.value);

            this.props.history.push({
                pathname: '/dashboard'
            });
        } else {
            alert("Wrong Username and Password");
        }
    }

    registerModalHandler = ()=> {
        this.props.loginModalClosedHandler();
        this.props.registerModalOpenHandler(2);
    } 
    render() {
        return (
            <Aux>    
                <Backdrop show ={this.props.show} clicked={this.props.modalClosed} />  
                <div className="LoginModal" style = {{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                    <div className="Header">
                        <img src={User} alt = "goibibo.com" className="img-style"></img>
                        <center className="center-style">Login</center>
                    </div>
                    <form style={{marginTop:"50px",marginBottom:"25px"}} onSubmit={(e) => this.formHandler(e)}>
                        <label className="label-style">Email Address</label>
                        <br/>
                        <input required type="email" className="input-style" name="email"/>
                        <label className="label-style">Password</label>
                        <br/>
                        <input required type="password" className="input-style" name="password"/>
                        <p style={{textAlign:"end",marginRight:"40px",marginTop:"-5px",fontWeight:"400"}}>Forgot Password?</p>
                        <input type="submit" className="buttonForm" value="Login"/>
                    </form>
                    <p className="paragraph-style">Don't have an account? <Link to="#" onClick={this.registerModalHandler} style={{textDecoration:"none",color:"rgba(66, 183, 229, 0.9)"}}>Register Here</Link> </p>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        formType: state.formType
    } 
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginModalHandler: () => {
            return dispatch({type: "loginOrRegisterState" })
        },
        loginHandler: (userId) => {
            return dispatch({type: "loginHandler", userId: userId})
        },
        loginModalClosedHandler: () => {
            return dispatch({type: "loginOrRegisterState" })
        },
        registerModalOpenHandler: (fType) => {
            return dispatch({type: "login or register", fType:fType })
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(LoginModal));