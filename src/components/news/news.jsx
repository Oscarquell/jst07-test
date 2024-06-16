import React from 'react';
import './style.css'

const News = (props) => {

    const {
        image,
        text
    } = props

    return (
        <div className='news-flex'>
            <p>{text}</p>
            <div>
                <img src={image} alt=""/>
            </div>
        </div>
    );
};

export default News;