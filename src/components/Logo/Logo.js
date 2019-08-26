import React from 'react';
import GoibiboLogo from '../../assets/images/download.png'
import './Logo.css'
const logo = (props) => {
    
        return <div className="Logo" style ={{height:props.height}}>
            <img src={GoibiboLogo} alt = "goibibo.com" />
        </div>
};

export default logo;