import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
class Contact extends Component {
    render() {
        return (
            this.props.loginStatus ? <div>{this.props.history.push('/dashboard')}</div>:
            <div>
                Contact Us
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        loginStatus: state.loginStatus
    } 
}

export default connect(mapStateToProps)(withRouter(Contact));