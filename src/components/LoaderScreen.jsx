import React from 'react';
import Typewriter from 'typewriter-effect';
import './LoaderScreen.css';

function LoaderScreen() {
    return (
        <div className="loader-screen">
            <Typewriter
                options={{
                    strings: ['Assalamu Alaikum'],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    deleteSpeed: 50,
                }}
            />
        </div>
    );
}

export default LoaderScreen;
