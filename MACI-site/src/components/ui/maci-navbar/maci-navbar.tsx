import React, {CSSProperties} from 'react';
import {Menu} from 'antd';
import {Link} from 'react-router-dom';
import {Header} from 'antd/es/layout/layout';

export const MaciNavbar = (): React.ReactElement => {
    const style: CSSProperties = {
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: 100
    }
    const routes = [
        <Menu.Item key="1"> <Link to='/'>Home</Link></Menu.Item>,
    ];
    return (
        <Header style={style}>
            <Menu mode='horizontal' theme="dark" defaultSelectedKeys={['1']}>{routes}</Menu>
        </Header>
    );
};
