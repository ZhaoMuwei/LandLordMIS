

import React from 'react';
import {storiesOf} from '@storybook/react';
import NotFound from '../src/components/404';

storiesOf('404', module)
    .add('404', () => <NotFound />);
