/**
 * @file Base template for all other pages
 * @author ZhaoMuwei
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Layout} from 'antd';
import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.css';

const {Sider, Content} = Layout;

export default class BasePage extends Component {
    static defaultProps = {
        children: null,
    }

    static propTypes = {
        children: PropTypes.node,
        title: PropTypes.string.isRequired,
        navBarGroup: PropTypes.string.isRequired,
        navBarKey: PropTypes.string.isRequired,
    }

    state = {
        isCollapsed: false,
    }

    handleCollapse = isCollapsed => {
        this.setState({isCollapsed});
    }

    render() {
        const {isCollapsed} = this.state;
        const {children, title, navBarGroup, navBarKey} = this.props;

        return (
            // Use inline styles in order to override Antd built-in styles.
            <Layout className="BasePage">
                <Sider
                    width={170}
                    collapsible
                    collapsed={isCollapsed}
                    onCollapse={this.handleCollapse}
                    className="BasePage__sider"
                    style={{
                        overflowX: 'hidden',
                        overflowY: 'scroll',
                    }}
                >
                    <div className="BasePage__logo" />
                    <NavBar currentGroup={navBarGroup} currentKey={navBarKey} />
                </Sider>

                <Layout>
                    <Layout.Header
                        style={{
                            height: 'unset',
                            padding: '3px 20px',
                            backgroundColor: '#FFF',
                        }}
                    >
                        <Header title={title} />
                    </Layout.Header>

                    <Content
                        style={{
                            padding: '20px',
                            margin: '19px', // 与Header,Footer视觉对齐
                            backgroundColor: '#FFF',
                        }}
                    >
                        {children}
                    </Content>

                    <Layout.Footer
                        style={{
                            padding: '0 20px',
                        }}
                    >
                        <Footer />
                    </Layout.Footer>
                </Layout>
            </Layout>
        );
    }
}
