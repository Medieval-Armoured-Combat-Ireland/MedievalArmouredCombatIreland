/**
 * Created by: Luke Captain (lukecaptaincode@gmail.com)
 */
import React, {Suspense, lazy} from 'react';
import {HomePage} from '../pages/home-page/home-page';
import {PrivacyPolicyPage} from '../pages/privacy-policy-page/privacy-policy-page';

import {stylesContainer} from './app.module.less';

import {Route, Switch} from 'react-router-dom';
import {Content} from 'antd/es/layout/layout';

export const App = (): React.ReactElement => (
    <Content>
        <main className={stylesContainer}>
            <Switch>
                <Route path='/' component={HomePage} exact />
                <Route path='/privacy-policy' component={PrivacyPolicyPage} exact />
            </Switch>
        </main>
    </Content>
);
