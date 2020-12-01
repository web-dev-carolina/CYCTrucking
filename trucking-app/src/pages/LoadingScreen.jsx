import React from 'react';
import logo from '../images/loading.gif'
import './Loading.css';
const LoadingScreen = () => {

    return(
        <>
            <div id="loading-screen">
                <h1> Loading... </h1>
                <img src={logo} alt="loading..."/>
            </div>
        </>
    );

}

export default LoadingScreen;