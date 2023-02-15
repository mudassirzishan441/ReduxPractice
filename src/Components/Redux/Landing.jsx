import React from 'react';
import Home from './Home';
import { useSelector } from 'react-redux';

const Landing = () => {
    const selector = useSelector((state)=>state.Reducer)
    return (
        <div>
            <Home/>
        </div>
    );
};

export default Landing;