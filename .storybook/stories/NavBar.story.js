import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs';
import NavBar from '../../src/components/NavBar';
import 'antd/dist/antd.css';

storiesOf('NavBar', module)
    .addDecorator(withKnobs)
    .add('NavBar 200', () => <NavBar />)
    .add('NavBar WIDTH', () => <NavBar width={number('width', 100)} />)
    .add('NavBar CurrentSelectedKey', () => <NavBar currentSelectedKey={text('currentSelectedKey', '')} />);
