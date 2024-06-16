import React, {useEffect, useState} from 'react';
import './App.css'
import Advantages from "./components/advantages/advantages";
import {ADVANTAGES_DATA} from "./constants/Advantages";
import axios from "axios";
import News from "./components/news/news";

const App = () => {

    const [news, setNews] = useState([])

    async function getNews () {
        const response = await fetch('http://localhost:3333/news')
        const data = await response.json()
        setNews(data)
    }

    useEffect(() => {
        getNews()
    }, []);

    return (
        <div>
            <div className='advantage-flex'>
                {ADVANTAGES_DATA.map((item) => {
                    return (
                        <div
                            key={item.id}>
                            <Advantages
                                icon={item.icon}
                                text={item.text}
                            />
                        </div>
                    )
                })}
            </div>
            <div>
                <h1>Полезные статьи</h1>
                <div className='news-wrap'>
                    {news.map((item, idx) => {
                        return (
                            <div key={idx}>
                                <News
                                    image={item.image}
                                    text={item.text}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default App;