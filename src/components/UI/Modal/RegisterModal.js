
import './RegisterModal.css'
import Aux from '../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'
import React, { Component } from 'react';
import {NavLink,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class RegisterModal extends Component {
    loginModalHandler = ()=> {
        this.props.registerModalClosedHandler();
        this.props.loginModalOpenHandler(1);
    } 
    onRegisterFormSubmit = (evt) => {
        evt.preventDefault();
        let flag = true;
        //alert(JSON.parse(localStorage.getItem(evt.target.email.value)));
        if(evt.target.confirm_pass.value !== evt.target.pass.value) {
            alert("Password and Confirm Password Fields must be same!!!")
        } else {
            for (var ls in localStorage) {
                if(evt.target.email.value === ls) {
                    flag = false;
                    break;
                } 
            }
            if(flag) {
                let users = {
                    user_id : evt.target.email.value,
                    email: evt.target.email.value,
                    first: evt.target.first.value,
                    last: evt.target.last.value,
                    password: evt.target.pass.value
                };
                localStorage.setItem(evt.target.email.value,JSON.stringify(users));
                alert("Registered Successfully");
                
                this.props.registerModalClosedHandler();
                this.props.loginModalOpenHandler(1);
            } else {
                alert("User Already Exist!!!");
            }
        }
    }
    render() {
       return (
            <Aux>    
                <Backdrop show ={this.props.show} clicked={this.props.modalClosed} />  
                <div className="RegisterModal" style = {{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                    <div style={{width:"50%",float:"left"}} >
                         <center>
                             <span className="fa-stack fa-lg" style={{marginTop:"10px"}}>
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-pencil fa-stack-1x blackiconcolor"></i>
                            </span>
                            <p style={{fontWeight:"bold",fontSize:"20px",marginTop:"-2px"}}>Create an Account</p>
                        </center>
                        <form style={{marginTop:"10px",marginBottom:"25px"}} onSubmit={(evt) => this.onRegisterFormSubmit(evt)}>
                            <label className="label-style-half" style={{float:"left",marginLeft:"40px"}}>First Name</label>
                            <label className="label-style-half" style={{float:"right",marginTop:"-21px",marginRight:"5px"}}>Last Name</label>
                            <br/>
                            <input required type="text" name="first" className="input-style-half" style={{float:"left",marginLeft:"40px"}}/>
                            <input required type="text" name="last" className="input-style-half" style={{float:"right",marginTop:"10px",marginRight:"62px"}}/>
                           
                            <label style={{marginTop:"-10px"}} className="register-label-style">Email Address</label>
                            <br/>
                            <input required type="email" name="email" className="register-input-style"/>
                            <br/>
                            <label className="register-label-style">Password</label>
                            <br/>
                            <input required type="password" name = "pass" className="register-input-style"/>
                            <br/>
                            <label className="register-label-style">Confirm Password</label>
                            <br/>
                            <input required type="password" name="confirm_pass" className="register-input-style"/>
                            <br/><br/>
                            <input type="submit" className="registerButtonForm" value="Register"/>
                        </form>
                        <p className="register-paragraph-style">Already have an account? <NavLink to="#" onClick={this.loginModalHandler} style={{textDecoration:"none",color:"rgba(66, 183, 229, 0.9)"}} > Login </NavLink></p>
                    </div>
                    <div className="circle">OR</div>
                    <div style={{width:"50%",float:"right"}} className="right-modal">
                        <center><p style={{fontWeight:"bold",fontSize:"24px",marginTop:"80px"}}>Sign In With Social Media</p>
                            <button style={{backgroundColor:"#00008B"}} className="social-button">Sign In With Facebook</button><br/>
                            <button style={{backgroundColor:"#24A0ED"}} className="social-button">Sign In With Twitter</button><br/>
                            <button style={{backgroundColor:"red"}} className="social-button">Sign In With Google+</button><br/>
                        </center>
                    </div>
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
        registerModalClosedHandler: () => {
            return dispatch({type: "loginOrRegisterState" })
        },
        loginModalOpenHandler: (fType) => {
            return dispatch({type: "login or register", fType:fType })
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(RegisterModal));