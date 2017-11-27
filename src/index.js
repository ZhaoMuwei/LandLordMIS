import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login/index';
import Welcome from './components/Welcome/index';
import './index.css';

class App extends React.Component {
    state = {
        isLogin: false,
        userName: ''
    }

    componentDidMount = () => {
        // fetch('http://103.72.145.118:80/login', {
        //     method: 'POST'
        // });
    }

    render() {
        return (
            <div className="wrapper">
                <div className="content">
                    <h2>Hey, man</h2>
                    {
                        this.state.isLogin
                        ? (
                            <Welcome name="ooooo" />
                        )
                        : (
                            <Login />
                        )
                    }
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

registerServiceWorker();
