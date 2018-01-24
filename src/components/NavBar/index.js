import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-component';
import {Menu, Icon} from 'antd';
import subMenus from './menuData';

const {SubMenu, Item} = Menu;


export default class NavBar extends React.Component {
    static propTypes = {
        currentGroup: PropTypes.string.isRequired,
        currentKey: PropTypes.string.isRequired,
    }

    render() {
        const {currentGroup, currentKey} = this.props;

        return (
            <Menu
                mode="inline"
                defaultOpenKeys={[currentGroup]}
                defaultSelectedKeys={[currentKey]}
                selectedKeys={[currentKey]}
                theme="dark"
                inlineIndent={26}
                defaultActiveFirst
            >
                {
                    subMenus.map(({key, title, icon, children}) => (
                        <SubMenu key={key} title={(<span><Icon type={icon} /> <span>{title}</span></span>)}>
                            {
                                children.length > 0 && children.map(({key: keyChild, title: titleChild}) => (
                                    <Item key={keyChild}><Link href={`/${keyChild}`}>{titleChild}</Link></Item>
                                ))
                            }
                        </SubMenu>
                    ))
                }
            </Menu>
        );
    }
}
