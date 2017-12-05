import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie';
import 'normalize.css';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login/index';
import Welcome from './components/Welcome/index';
import './index.css';

class App extends React.Component {
    state = {
        isLoggedIn: true,
        isLoadingData: true,
        data: null,
    }

    componentDidMount = () => {
        const authToken = Cookies.get('x-ll-auth');

        if (!authToken) {
            this.setState({
                isLoggedIn: false,
                isLoadingData: true,
            });
            return;
        }

        fetch('http://103.72.145.118:80/user', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': authToken,
            },
        }).then(response => {
            let res = response;
            if (res.status !== 200) {
                this.setState({
                    isLoggedIn: false,
                    isLoadingData: true,
                });
                return;
            }

            res = res.json();

            console.info(res);
        });
    }

    render = () => {
        const {isLoggedIn, isLoadingData, data} = this.state;

        let content;
        if (isLoggedIn) {
            const name = typeof data === 'string' ? data : JSON.stringify(data);
            content = (
                <Welcome name={name} loading={isLoadingData} />
            );
        } else {
            content = (
                <Login />
            );
        }

        return (
            <div className="wrapper">
                <div className="content">
                    {content}
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
