import React, { Component } from 'react';
import './FormComponent.css'
import User from '../../assets/images/user.png'
import Aux from '../hoc/Aux';
import DatePicker from "react-datepicker";
import {withRouter} from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css"
class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: "",
            endDate:"",
            room: '',
            newRoom: '',
            showUpdateModal:false
        };
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
      }
      
      handleStartDateChange(date) {
        this.setState({
            startDate: date
        });
      }
      handleEndDateChange(date) {
        this.setState({
            endDate: date
        });
      }

      formHandler = (e) => {
        e.preventDefault();
        if(this.state.startDate.getTime()<this.state.endDate.getTime()) {
            localStorage.setItem('location', e.target.location.value);
            localStorage.setItem('room', e.target.room.value);
            localStorage.setItem('guest', e.target.guest.value);
            localStorage.setItem('startDate', this.state.startDate);
            localStorage.setItem('endDate', this.state.endDate);
            
            this.props.history.push({
                pathname: '/bookings'
            });
        } else {
            alert("Check-out Date should be greater than Check-in date!!!");
        }
        
    }
    formHomeHandler = (e) => {
        e.preventDefault();
        if(this.state.startDate.getTime()<this.state.endDate.getTime()) {
            alert("Hotel List should be displayed");
        } else {
            alert("Check-out Date should be greater than Check-in date!!!");
        }
        
    }
    render() {
        return (
            this.props.loginStatus ?
                <Aux>
                    <div className="FormComponent" onSubmit={(e) => this.formHandler(e)}>
                        <form className="box">
                            <i className="fa fa-map-marker" style={{position: "absolute", marginLeft:"65px",marginTop:"30px",fontSize:"30px"}}></i>
                            <input 
                                required
                                type="text"  
                                style={{width: "450px",marginLeft:"40px"}} 
                                className="round" 
                                placeholder="Enter the city / location / hotel name"
                                name="location" />
                            
                            <i className="fa fa-calendar" style={{zIndex:"1",position: "absolute", marginLeft:"-472px",marginTop:"109px",fontSize:"30px"}}></i>
                            <DatePicker
                                required
                                minDate = {new Date()}
                                style={{width: "200px" ,marginLeft:"80px",position:"absolute"}}
                                selected={this.state.startDate}
                                onChange={this.handleStartDateChange}
                                name="startDate"
                                placeholderText ="Check-in Date"
                                autoComplete = "off"
                                className="datepicker-round1"
                                selectsStart
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                            /> 
                            
                            <i className="fa fa-calendar" style={{zIndex:"1",position: "absolute", marginLeft:"32px",marginTop:"31px",fontSize:"30px"}}></i>
                            <DatePicker
                                required
                                style={{marginLeft:"80px"}}
                                selected={this.state.endDate}   
                                onChange={this.handleEndDateChange}
                                name="endDate"
                                placeholderText ="Check-out Date"
                                autoComplete = "off"
                                className="datepicker-round2"
                                selectsEnd
                                minDate={this.state.startDate ? this.state.startDate: new Date()}
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                            />
                            <i className="fa fa-bed" style={{position: "absolute", marginLeft:"-470px",marginTop:"109px",fontSize:"30px"}}></i>
                            <input 
                                required
                                min="1"
                                type="number"  
                                style={{width: "200px" ,marginLeft:"40px"}} 
                                className="round" 
                                placeholder="No. of rooms"
                                name="room" />
                            
                            <i className="fa fa-users" style={{position: "absolute", marginLeft:"30px",marginTop:"31px",fontSize:"30px"}}></i>
                            <input 
                                required
                                min="1"
                                type="number" 
                                style={{width: "200px" ,marginLeft:"10px"}} 
                                className="round" 
                                placeholder="Guest" 
                                name="guest"/>
                            
                            <input type="submit" className="buttonForm" value="Search"/>
                        </form>
                    </div>
                </Aux> :
                <Aux>
                    <div className="FormComponent">
                    <form className="box" onSubmit={(e) => this.formHomeHandler(e)}>
                            <i className="fa fa-map-marker" style={{position: "absolute", marginLeft:"65px",marginTop:"30px",fontSize:"30px"}}></i>
                            <input 
                                required
                                type="text"  
                                style={{width: "450px",marginLeft:"40px"}} 
                                className="round" 
                                placeholder="Enter the city / location / hotel name"
                                name="location" />
                            
                            <i className="fa fa-calendar" style={{zIndex:"1",position: "absolute", marginLeft:"-472px",marginTop:"109px",fontSize:"30px"}}></i>
                            <DatePicker
                                required
                                minDate = {new Date()}
                                style={{width: "200px" ,marginLeft:"80px",position:"absolute"}}
                                selected={this.state.startDate}
                                onChange={this.handleStartDateChange}
                                name="startDate"
                                placeholderText ="Check-in Date"
                                autoComplete = "off"
                                className="datepicker-round1"
                                selectsStart
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                            /> 
                            
                            <i className="fa fa-calendar" style={{zIndex:"1",position: "absolute", marginLeft:"32px",marginTop:"31px",fontSize:"30px"}}></i>
                            <DatePicker
                                required
                                style={{marginLeft:"80px"}}
                                selected={this.state.endDate}
                                onChange={this.handleEndDateChange}
                                name="endDate"
                                placeholderText ="Check-out Date"
                                autoComplete = "off"
                                className="datepicker-round2"
                                selectsEnd
                                minDate={this.state.startDate ? this.state.startDate: new Date()}
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                            />
                            <i className="fa fa-bed" style={{position: "absolute", marginLeft:"-470px",marginTop:"109px",fontSize:"30px"}}></i>
                            <input 
                                required
                                min="1"
                                type="number"  
                                style={{width: "200px" ,marginLeft:"40px"}} 
                                className="round" 
                                placeholder="No. of rooms"
                                name="room" />
                            
                            <i className="fa fa-users" style={{position: "absolute", marginLeft:"30px",marginTop:"31px",fontSize:"30px"}}></i>
                            <input 
                                required
                                min="1"
                                type="number" 
                                style={{width: "200px" ,marginLeft:"10px"}} 
                                className="round" 
                                placeholder="Guest" 
                                name="guest"/>
                            
                            <input type="submit" className="buttonForm" value="Search"/>
                        </form>
                    </div>
                    <img src={User} alt = "goibibo.com" style={{marginLeft:"950px",marginTop:"-358px",position:"absolute",width:"12%",height:"25%"}}></img>
                    <div className="textContent">
                        <p >Sign In to get discount on your bookings</p> 
                    </div>
                </Aux>
        );
    }
}

export default withRouter(FormComponent);