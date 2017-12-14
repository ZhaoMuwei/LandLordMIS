/**
 * @file Login Page
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Login from '../Login';
import './style.css';

export default class LoginPage extends Component {
    static defaultProps = {

    }

    static propTypes = {

    }

    handleLoginSuccess = () => {
        console.log('ok');
    }

    handleLoginError = error => {
        console.log('not ok');
    }

    render() {
        return (
            <div className="LoginPage LoginPage--middle-align">
                <h1 className="LoginPage__heading">金管家</h1>
                <h3 className="LoginPage__subheading">尽量为您服务吧</h3>
                <div className="LoginPage__form">
                    <Login onSuccess={this.handleLoginSuccess} onError={this.handleLoginError} />
                </div>
                <p className="LoginPage__footer">©2017 金管家</p>
            </div>
        );
    }
}
