import React, { Component } from 'react';
import './Update.css'
import Aux from '../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'
import {withRouter} from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import {connect} from 'react-redux';
class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: "",
            newStartDate:"",
            room: '',
            newRoom: '',
            showUpdateModal:false
        };
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleNewStartDateChange = this.handleNewStartDateChange.bind(this);
      }
    
      handleStartDateChange(date) {
        
       this.setState({
            startDate: date
        });
        
      }
      handleNewStartDateChange(date) {
        this.setState({
            newStartDate: date
        });
      }
    
    formHandler = (e) => {
        e.preventDefault();
        localStorage.setItem('room', localStorage.getItem("room"));
        localStorage.setItem('room', e.target.newRoom.value);
        localStorage.setItem('startDate', localStorage.getItem("startDate"));
        localStorage.setItem('startDate', this.state.newStartDate);
        
        this.props.updateModalHandler();
        
        this.props.history.push({
            pathname: '/bookings'
        });
        
    }
  
    render() {
        let room="";
        let bookingDate = ""
        let date_input = "",day ="",month="",year=""
        
        if(localStorage.getItem("startDate") !== "" && localStorage.getItem("startDate")!==null) {
            date_input = new Date(localStorage.getItem("startDate"));
            day = date_input.getDate();
            month = date_input.getMonth() + 1;
            year = date_input.getFullYear();
            bookingDate = day + "/" + month + "/" + year; // That’s your formatted date
        } 

        if(localStorage.getItem("room") !== "" && localStorage.getItem("room")!==null) {
            room = localStorage.getItem("room");
        }
        return (
            room === "" && bookingDate === "" ? <div></div>:<Aux>    
                <Backdrop show ={this.props.show } clicked={this.props.modalClosed} />  
                <div className="UpdateModal" style = {{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity:this.props.show ? '1' : '0'
                }}>
                    <div className="Header">
                        <span className="fa-stack fa-lg" style={{marginLeft:"37%",marginTop:"3%"}}>
                            <i className="fa fa-circle fa-stack-2x fa-inverse"></i>
                            <i className="fa fa-repeat fa-stack-1x"></i>
                        </span>
                       <center className="update-center">Update</center>
                    </div>
                    <form style={{marginTop:"10px",marginBottom:"25px"}} onSubmit={(e) => this.formHandler(e)}>
                        <i className="fa fa-bed" style={{position: "absolute", marginLeft:"55px",marginTop:"30px",fontSize:"30px"}}></i>
                        <input 
                            required
                            min="1"
                            type="number" 
                            name="room" 
                            style={{width: "400px",marginLeft:"30px"}} 
                            className="update-round" 
                            placeholder="Enter your booked room number"
                            value = {room}
                            readOnly={true}
                           />
    
                        <i className="fa fa-calendar" style={{zIndex:"1",position: "absolute", marginLeft:"-418px",marginTop:"108px",fontSize:"30px"}}></i>
                        <DatePicker
                            required
                            className="update-round"
                            name="startDate"
                            placeholderText ="Enter Your Check-in date (dd/mm/yy)"
                            autoComplete = "off"
                            readOnly={true}
                            value={bookingDate}
                        /> 
                        <i className="fa fa-bed" style={{position: "absolute", marginLeft:"-418px",marginTop:"107px",fontSize:"30px"}}></i>
                        <input 
                            required
                            min="1"
                            type="number"
                            name="newRoom"  
                            style={{width: "400px",marginLeft:"30px"}} 
                            className="update-round" 
                            placeholder="Enter your new room number"
                            
                        />
                        
                        <i className="fa fa-calendar" style={{zIndex:"1",position: "absolute", marginLeft:"-418px",marginTop:"108px",fontSize:"30px"}}></i>
                        <DatePicker
                            required
                            placeholder=""
                            className="update-round"
                            selected={this.state.newStartDate}
                            onChange={this.handleNewStartDateChange}
                            placeholderText = "Enter Your new Check-in date (dd/mm/yy)"
                            autoComplete = "off"
                            minDate={new Date()}
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"

                        /> 
                        <input type="submit" className="buttonForm" value="Update"/>
                    </form>
                </div>
            </Aux>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateModalHandler: () => {
            return dispatch({type: "loginOrRegisterState" })
        }
    };
}

export default connect(null,mapDispatchToProps)(withRouter(Update));