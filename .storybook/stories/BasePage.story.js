/**
 * @file Story of Login Page
 */

import React from 'react';
import {storiesOf} from '@storybook/react';
import BasePage from '../../src/pages/BasePage';
import '../../src/utils/css/common.css';
import '../../src/index.css';

storiesOf('Base Page', module)
    .add('Blank', () => <BasePage />)
    .add('Basic', () => <BasePage> <p>content</p> </BasePage>);
