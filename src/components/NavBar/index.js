import React from 'react';
import PropTypes from 'prop-types';
import {Menu, Icon} from 'antd';
import subMenus from './menuData';

const {SubMenu, Item} = Menu;


export default class NavBar extends React.Component {
    static defaultProps = {
        width: 200,
        currentSelectedKey: 'room-list',
        onClick: false,
    }

    static propTypes = {
        width: PropTypes.number,
        currentSelectedKey: PropTypes.string,
        onClick: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.bool,
        ]),
    }

    state = {
        currentSelectedKey: this.props.currentSelectedKey,
    }

    componentWillReceiveProps({currentSelectedKey}) {
        this.changeCurrent(currentSelectedKey);
    }


    handleClick = ({key}) => {
        this.changeCurrent(key);
        this.props.onClick(key);
    }

    changeCurrent = key => {
        if (key !== this.state.currentSelectedKey) {
            this.setState({currentSelectedKey: key});
        }
    }

    render() {
        const {width} = this.props;
        const {currentSelectedKey} = this.state;

        return (
            <Menu
                mode="inline"
                style={{width}}
                defaultOpenKeys={['room']}
                defaultSelectedKeys={[currentSelectedKey]}
                selectedKeys={[currentSelectedKey]}
                inlineCollapsed={false}
                theme="dark"
                inlineIndent={26}
                onClick={this.handleClick}
                defaultActiveFirst
            >
                {
                    subMenus.map(({key, title, icon, children}) => (
                        <SubMenu key={key} title={(<span><Icon type={icon} /> {title}</span>)}>
                            {
                                children.length > 0 && children.map(({key: keyChild, title: titleChild}) => (
                                    <Item key={keyChild}>{titleChild}</Item>
                                ))
                            }
                        </SubMenu>
                    ))
                }
            </Menu>
        );
    }
}
