/**
 * @file Universal Header which has title & breadcrumb
 * @author ZhaoMuwei
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Breadcrumb} from 'antd';
import './style.css';


export default class Header extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
    }

    render() {
        const {title} = this.props;

        return (
            <div className="Header">
                <h1 className="Header__title">{title}</h1>
                <Breadcrumb
                    style={{
                        margin: '0 0 10px',
                        lineHeight: 1,
                    }}
                >
                    {/* TODO */}
                    <Breadcrumb.Item>A</Breadcrumb.Item>
                    <Breadcrumb.Item>B</Breadcrumb.Item>
                    <Breadcrumb.Item>C</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        );
    }
}
