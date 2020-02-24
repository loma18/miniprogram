import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

export const getMenuEle = (menus) => {
    let ele = null;
    return menus.map(item => {
        ele = <Menu.Item key={item.key}>
            <Link to={item.path}>
                <Icon type={item.icon} />
                <span>{item.title}</span>
            </Link>
        </Menu.Item>
        if (item.children.length > 0) {
            ele = getMenuEle(item.children);
            return (
                <SubMenu
                    key={item.key}
                    title={
                        <span>
                            <Icon type={item.icon} />
                            {item.title}
                        </span>
                    }
                >
                    {ele}
                </SubMenu>
            )
        }
        return ele;
    })
}