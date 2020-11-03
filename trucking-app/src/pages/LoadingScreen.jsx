import React from 'react';
import logo from '../images/loading.gif'
const LoadingScreen = () => {

    return(
        <>
            <div>
                <h1> loading screen </h1>
                <img src={logo} alt="loading..."/>
            </div>
        </>
    );

}

export default LoadingScreen;