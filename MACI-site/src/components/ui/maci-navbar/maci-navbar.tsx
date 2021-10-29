import {Menu} from 'antd';
import {Header} from 'antd/es/layout/layout';
import React, {CSSProperties} from 'react';
import {Link} from 'react-router-dom';

export const MaciNavbar = (): React.ReactElement => {
    const routes: Array<any> = [
        {key: 'home', route: '/', label: 'Home'},
        {key: 'Demo', route: '/demo-page', label: 'Demo'},
    ];

    function buildRoutes(): Array<any> {
        const builtRoutes: Array<any> = [];
        for (const route of routes) {
            builtRoutes.push(
                <Menu.Item
                    key={route.key}
                    className='className="text__header--regular"'
                >
                    <Link to={route.route}>{route.label}</Link>
                </Menu.Item>,
            );
        }
        return builtRoutes;
    }

    return (
        <Header className="navbar">
            <Menu mode="horizontal" theme="dark" defaultSelectedKeys={['home']}>
                {buildRoutes()}
            </Menu>
        </Header>
    );
};
