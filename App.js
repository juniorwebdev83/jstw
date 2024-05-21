import React, { useState } from 'react';
import Navbar from './Navbar';
import './App.css';

function App() {
    const [message, setMessage] = useState('JSTW');

    const changeMessage = () => {
        setMessage("Digital Solutions");
    };

    return (
        <div className="App">
            <Navbar />
            <header className="App-header">
                <h1 className="futuristic">{message}</h1>
                <button onClick={changeMessage}>Change Message</button>
            </header>
        </div>
    );
}

export default App;
