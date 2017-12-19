import React from 'react';
import ReactDOM from 'react-dom';
import {Locations, Location, NotFound} from 'react-router-component';
import 'normalize.css';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login';
import NoWhere from './components/404';
import './utils/css/common.css';
import './index.css';

class App extends React.Component {
    render() {
        return (
            <Locations component={null}>
                <Location path="/" handler={Login} />
                <NotFound handler={NoWhere} />
            </Locations>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

registerServiceWorker();
