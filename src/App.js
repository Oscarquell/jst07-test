import React from 'react';
import './App.css'
import Advantages from "./components/advantages/advantages";
import {ADVANTAGES_DATA} from "./constants/Advantages";

const App = () => {
    return (
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
    );
};

export default App;