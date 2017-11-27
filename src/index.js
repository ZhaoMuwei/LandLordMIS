import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login/Login';
import './index.css';

ReactDOM.render(
    <div className="login-wrapper">
        <div className="login-content">
            <h2>Hey, man</h2>
            <Login />
        </div>
    </div>,
    document.getElementById('root')
);

registerServiceWorker();
