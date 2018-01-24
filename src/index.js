import React from 'react';
import ReactDOM from 'react-dom';
import {Locations, Location, NotFound} from 'react-router-component';
import registerServiceWorker from './registerServiceWorker';
import LoginPage from './pages/LoginPage';
import RoomListPage from './pages/RoomListPage';
import NoWhere from './components/404';

import './index.css';

class App extends React.Component {
    render() {
        return (
            <Locations
                onBeforeNavigation={() => console.log('aaaaaaa')}
                component={null}
            >
                <Location path="/" handler={LoginPage} />
                <Location path="/roomlist" handler={RoomListPage} />
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
