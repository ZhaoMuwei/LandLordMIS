/**
 * @file Button
 * @author ZhaoMuwei
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Button as AntdButton} from 'antd';


const Button = props => (
    <AntdButton {...props}>{props.children}</AntdButton>
);

Button.defaultProps = {
    children: null,
};

Button.propTypes = {
    children: PropTypes.node,
};

export default Button;
