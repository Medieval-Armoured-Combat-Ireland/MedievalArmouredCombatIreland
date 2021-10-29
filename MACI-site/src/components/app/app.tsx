import {Content} from 'antd/es/layout/layout';
/**
 * Created by: Luke Captain (lukecaptaincode@gmail.com)
 */
import React, {Suspense, lazy} from 'react';
import {Route, Switch} from 'react-router-dom';

import {DemoPage} from '@components/pages/demo-page/demo-page';
import {HomePage} from '@components/pages/home-page/home-page';
import {PrivacyPolicyPage} from '@components/pages/privacy-policy-page/privacy-policy-page';

import {stylesContainer} from './app.module.less';

export const App = (): React.ReactElement => (
    <Content>
        <main className={stylesContainer}>
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route
                    path="/privacy-policy"
                    component={PrivacyPolicyPage}
                    exact
                />
                <Route path="/demo-page" component={DemoPage} exact />
            </Switch>
        </main>
    </Content>
);
