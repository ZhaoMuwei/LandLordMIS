import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Card} from 'antd';

export default class Welcome extends PureComponent {
    static defaultProps = {
        name: '???',
        loading: true,
    }

    static propTypes = {
        name: PropTypes.string,
        loading: PropTypes.bool,
    }

    render = () => {
        const {name, loading} = this.props;
        return (
            <Card title="Hey man" loading={loading}>
                <h2>{name}</h2>
            </Card>
        );
    }
}
