import React, { Component } from 'react';
import './ConfirmModal.css'
import Aux from '../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
class ConfirmModal extends Component {
    
    submitHandler = () => {
        localStorage.setItem('room', "");
        localStorage.setItem('guest', "");
        localStorage.setItem('startDate', "");
        localStorage.setItem('endDate', "");
        localStorage.setItem('location', "");
        this.props.cancelModalClosedHandler();
    }
    render() {
        return (
            <Aux>    
                <Backdrop show ={this.props.show} clicked={this.props.modalClosed} />  
                <div className="ConfirmModal" style = {{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'}}>
                    <div className="Header">
                        <span class="fa-stack fa-lg" style={{marginLeft:"37%",marginTop:"2%"}}>
                            <i class="fa fa-circle fa-stack-2x fa-inverse"></i>
                            <i class="fa fa-exclamation-triangle fa-stack-1x"></i>
                        </span>
                        <center className="confirm-style">Alert</center>
                    </div>
                    <center><p style={{padding:"10px",fontSize:"20px",fontWeight:"bold"}}>Are You sure you want to Cancel the booking?</p></center>
                    <button 
                        type="submit" 
                        className="buttonForm" 
                        style={{float:"right",marginLeft: "40px",marginRight: "40px"}}
                        onClick={this.submitHandler}>Confirm
                    </button>
                    <button 
                        type="submit" 
                        className="buttonForm" 
                        style={{float:"right",marginLeft: "40px",marginRight: "40px"}} onClick={this.props.cancelModalClosedHandler}>Cancel
                    </button>
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
        cancelModalClosedHandler: () => {
            return dispatch({type: "loginOrRegisterState" })
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ConfirmModal));