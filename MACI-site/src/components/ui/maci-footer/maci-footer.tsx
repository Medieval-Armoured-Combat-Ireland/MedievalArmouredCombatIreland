import React, {CSSProperties} from 'react';
import {Menu} from 'antd';
import {Link} from 'react-router-dom';
import {Footer} from 'antd/es/layout/layout';

export const MaciFooter = (): React.ReactElement => {
    const style: CSSProperties = {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 100
    }
    const routes = [
        <Menu.Item> <Link to='/privacy-policy'>Privacy policy</Link></Menu.Item>,
    ];
    return (
        <Footer style={style}>
            <Menu mode='horizontal'>{routes}</Menu>
            Medieval Armoured Combat Ireland ©2021 Created by Luke Captain (lukecaptaincode@gmail.com)
        </Footer>
    );
};
