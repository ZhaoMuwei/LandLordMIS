/**
 * @file Base template for all other pages
 * @author ZhaoMuwei
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import './style.css';

export default class BasePage extends Component {
    static defaultProps = {
        children: null,
    }

    static propTypes = {
        children: PropTypes.node,
    }

    state = {
        isCollapsed: false,
    }

    toggleCollapsed = evt => {
        this.setState(prevState => ({
            isCollapsed: !prevState.isCollapsed
        }));
    }

    render() {
        const {isCollapsed} = this.state;
        const {children} = this.props;

        return (
            <section className="BasePage">
                {/* // nav bar 放到页面上方 */}
                <section
                    className={`BasePage__sider ${isCollapsed ? 'BasePage__sider--collapsed' : ''}`}
                >
                    <NavBar isCollapsed={isCollapsed} />
                    <Button type="primary" onClick={this.toggleCollapsed}>
                        <Icon type={isCollapsed ? 'menu-unfold' : 'menu-fold'} />
                    </Button>
                </section>

                <section className="BasePage__main">
                    <header className="BasePage__header">header</header>
                    <section className="BasePage__content">{children}</section>
                    <footer className="BasePage__footer">footer</footer>
                </section>
            </section>
        );
    }
}
