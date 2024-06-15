import React from 'react';
import './style.css'

const Advantages = (props) => {

    const {
        icon,
        text
    } = props

    return (
        <div className='advantage-card'>
            <div className='advantage-img'>
                <img src={icon} alt=""/>
            </div>
            <h3 className='advantage-text'>
                {text}
            </h3>
        </div>
    );
};

export default Advantages;