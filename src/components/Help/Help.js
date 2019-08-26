import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
class Help extends Component {
    render() {
        return (
            this.props.loginStatus ? <div>{this.props.history.push('/dashboard')}</div>:
            <div>
                Help?
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loginStatus: state.loginStatus
    } 
}

export default connect(mapStateToProps)(withRouter(Help));