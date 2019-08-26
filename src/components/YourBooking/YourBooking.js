import React, { Component } from 'react';
import Background from '../../assets/images/background.jpg'
import Room from '../../assets/images/room.jpg'
import './YourBooking.css'
import Aux from '../hoc/Aux';
import Update from '../UI/Modal/Update';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import ConfirmModal from '../UI/Modal/ConfirmModal';
class YourBooking extends Component {

    cancelHandler = () => {
        if(localStorage.getItem("bookingInfo."+this.props.userId) !== null) {
            this.props.cancelModalHandler(4)
        } else {
            alert("No Record Exist");
        }
    }

    updateHandler = () => {
        if(localStorage.getItem("bookingInfo."+this.props.userId) !== null) {
            this.props.updateModalHandler(3);
        } else {
            alert("No Record Exist");
        }
    }
    render() {
        let location = "";
        let sDate = "";
        let eDate = "";
        let room = "";
        let person = "";
        let date_input = "",day ="",month="",year=""
        //alert(typeof(localStorage.getItem("bookingInfo."+this.props.userId)));
        if(localStorage.getItem("bookingInfo."+this.props.userId) !== null) {
            var ls = JSON.parse(localStorage.getItem("bookingInfo."+this.props.userId));
        
            if(ls.location !== "" && ls.location!==null) {
                location = ls.location;
            }
            if(ls.startDate !== "" && ls.startDate!==null) {
                date_input = new Date(ls.startDate);
                day = date_input.getDate();
                month = date_input.getMonth() + 1;
                year = date_input.getFullYear();
                sDate = day + "/" + month + "/" + year; // That’s your formatted date
            }
            if(ls.endDate !== "" && ls.endDate !==null) {
                date_input = new Date(ls.endDate);
                day = date_input.getDate();
                month = date_input.getMonth() + 1;
                year = date_input.getFullYear();
                eDate = day + "/" + month + "/" + year; // That’s your formatted date
            }
            if(ls.room !== "" && ls.room!==null) {
                room = ls.room ;
            }
            if(ls.guest !== "" && ls.guest !==null) {
                person = ls.guest;
            }
        }

        let modal = null;
        if (this.props.formType === 3) {
            modal = <Update show = {this.props.loginOrRegisterState} modalClosed = {this.props.changeUpdateModalStateHandler}></Update>
        } else if(this.props.formType === 4){
            modal = <ConfirmModal show = {this.props.loginOrRegisterState} modalClosed = {this.props.changeCancelModalStateHandler}></ConfirmModal>
        }
        return (
            !this.props.loginStatus ? <div>{this.props.history.push('/')}</div>:
            <Aux>  
                {modal}
                <img src={Background} height="430" alt = "goibibo.com" style={{top: "25px",position:"absolute",opacity: "0.1",width:"100%"}}></img>
                <div className="pac-man">
                    <table className="your-booking-box">
                        <th className="row-header">Your Bookings</th>
                        <tr ><td className="row">Hotel Divine<br/><span className="booking-span">Last Modified: 24/07/2018</span></td></tr>
                        <tr ><td className="row">Hotel Taj<br/><span className="booking-span">Last Modified: 24/07/2018</span></td></tr>
                        <tr ><td className="row">Hotel Delight<br/><span className="booking-span">Last Modified: 24/07/2018</span></td></tr>
                        <tr ><td className="row">Hotel Divine<br/><span className="booking-span">Last Modified: 24/07/2018</span></td></tr>
                        <tr ><td className="row">Hotel Divine<br/><span className="booking-span">Last Modified: 24/07/2018</span></td></tr>
                        <tr ><td className="row">Hotel Divine<br/></td></tr>
                    </table>
                    <img  className="img" src={Room} alt='yourbooking'/>
                    <table className="room-details">
                        <tbody>
                            <tr>
                                <td style={{fontWeight:"bold",padding:"10px"}}><i className="fa fa-map-marker" style={{fontSize:"25px"}}></i><span className="row-details">Location</span><br/><span className="room-span" style={{marginLeft:"25px"}}>{location}</span></td>
                                <td style={{fontWeight:"bold",padding:"10px"}}><i className="fa fa-calendar" style={{fontSize:"25px"}}></i><span className="row-details">Check-In</span><br/><span className="room-span" style={{marginLeft:"30px"}}>{sDate}</span></td>
                                <td style={{fontWeight:"bold",padding:"10px"}}><i className="fa fa-calendar" style={{fontSize:"25px"}}></i><span className="row-details">Check-Out</span><br/><span className="room-span" style={{marginLeft:"30px"}}>{eDate}</span></td>
                                <td style={{fontWeight:"bold",padding:"10px"}}><i className="fa fa-bed" style={{fontSize:"25px"}}></i><span className="row-details">Rooms</span><br/><span className="room-span" style={{marginLeft:"45px"}}>{room}</span></td>
                                <td style={{fontWeight:"bold",padding:"10px"}}><i className="fa fa-users" style={{fontSize:"25px"}}></i><span className="row-details">Person</span><br/><span className="room-span" style={{marginLeft:"25px"}}>{person}</span></td>   
                            </tr>
                        </tbody>
                    </table>
                    <button className="booking-button" style={{marginLeft:"65%"}} onClick={this.cancelHandler}>Cancel</button>
                    <button className="booking-button" style={{marginLeft:"205%"}} onClick={this.updateHandler}>Update</button>
                </div>
               
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
        updateModalHandler: (fType) => {
            return dispatch({type: "login or register", fType:fType })
        },
        changeUpdateModalStateHandler: () => {
            return dispatch({type:"loginOrRegisterState"})
        },
        cancelModalHandler: (fType) => {
            return dispatch({type: "login or register", fType:fType })
        },
        changeCancelModalStateHandler: () => {
            return dispatch({type:"loginOrRegisterState"})
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(YourBooking));