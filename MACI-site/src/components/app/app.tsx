/**
 * Created by: Luke Captain (lukecaptaincode@gmail.com)
 */
import React, {Suspense, lazy} from 'react';
import {stylesContainer} from './app.module.less';
import {Route, Switch} from 'react-router-dom';
import {Content} from 'antd/es/layout/layout';
import {HomePage} from '@components/pages/home-page/home-page';
import {PrivacyPolicyPage} from '@components/pages/privacy-policy-page/privacy-policy-page';
import {DemoPage} from "@components/pages/demo-page/demo-page";

export const App = (): React.ReactElement => (
    <Content>
        <main className={stylesContainer}>
            <Switch>
                <Route path='/' component={HomePage} exact />
                <Route path='/privacy-policy' component={PrivacyPolicyPage} exact />
                <Route path='/demo-page' component={DemoPage} exact />
            </Switch>
        </main>
    </Content>
);
