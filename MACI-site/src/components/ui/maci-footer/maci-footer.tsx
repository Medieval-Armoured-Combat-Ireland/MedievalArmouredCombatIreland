import {Menu} from 'antd';
import {Footer} from 'antd/es/layout/layout';
import React, {CSSProperties} from 'react';
import {Link} from 'react-router-dom';

export const MaciFooter = (): React.ReactElement => {
    const style: CSSProperties = {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 100,
    };
    const routes: Array<any> = [
        {
            key: 'privacy-policy',
            route: '/privacy-policy',
            label: 'Privacy Policy',
        },
    ];

    function buildRoutes(): Array<any> {
        const builtRoutes: Array<any> = [];
        for (const route of routes) {
            builtRoutes.push(
                <Menu.Item key={route.key} className="text__header--regular">
                    <Link to={route.route}>{route.label}</Link>
                </Menu.Item>,
            );
        }
        return builtRoutes;
    }

    return (
        <Footer style={style}>
            <Menu mode="horizontal">{buildRoutes()}</Menu>
            Medieval Armoured Combat Ireland ©2021 Created by Luke Captain
            (lukecaptaincode@gmail.com)
        </Footer>
    );
};
