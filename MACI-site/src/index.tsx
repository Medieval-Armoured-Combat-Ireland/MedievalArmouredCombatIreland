/**
 * Created by: Luke Captain (lukecaptaincode@gmail.com)
 */
import '@styles/styles.less';
import '@styles/styles.scss';
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {App} from '@components/app/app';
import {MaciNavbar} from '@components/ui/maci-navbar/maci-navbar';
import {MaciFooter} from '@components/ui/maci-footer/maci-footer';
import Layout from 'antd/es/layout/layout';
ReactDom.render(
    <Layout className='layout'>
        <BrowserRouter>
            <MaciNavbar />
            <App />
            <MaciFooter />
        </BrowserRouter>
    </Layout>,
    document.getElementById('root'),
);
