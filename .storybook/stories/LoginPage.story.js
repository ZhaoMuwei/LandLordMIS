/**
 * @file Story of Login Page
 */

import React from 'react';
import {storiesOf} from '@storybook/react';
import LoginPage from '../../src/components/LoginPage';
import Login from '../../src/components/Login';
import '../../src/utils/css/common.css';

storiesOf('Login', module)
    .add('Login Page', () => <LoginPage />)
    .add('Login', () => <Login />);
