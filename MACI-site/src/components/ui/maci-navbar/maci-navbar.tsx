import {Menu} from 'antd';
import {Header} from 'antd/es/layout/layout';
import React, {CSSProperties} from 'react';
import {Link} from 'react-router-dom';

export const MaciNavbar = (): React.ReactElement => {
    const style: CSSProperties = {
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: 100,
    };
    const routes: Array<any> = [{key: 'home', route: '/', label: 'Home'}];

    function buildRoutes(): Array<any> {
        const builtRoutes: Array<any> = [];
        for (const route of routes) {
            builtRoutes.push(
                <Menu.Item
                    key={route.key}
                    className='className="typography__header--regular"'
                >
                    <Link to={route.route}>{route.label}</Link>
                </Menu.Item>,
            );
        }
        return builtRoutes;
    }

    return (
        <Header style={style}>
            <Menu mode="horizontal" theme="dark" defaultSelectedKeys={['home']}>
                {buildRoutes()}
            </Menu>
        </Header>
    );
};
