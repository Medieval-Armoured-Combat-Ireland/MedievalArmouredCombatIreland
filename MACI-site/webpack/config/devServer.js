/**
 * Created by: Luke Captain (lukecaptaincode@gmail.com)
 * @see https://webpack.js.org/configuration/dev-server/
 */
import isWindows from 'is-windows';

import {devServerProxyConfig} from './devServierProxy';

const defaultPort = 8080;
// const devServerHost = isWindows() ? '127.0.0.1' : '0.0.0.0';
const devServerHost =  '127.0.0.1'

export const devServerUrl = `http://${devServerHost}:${defaultPort}/`;

export const devServerConfig = {
    publicPath: '/',
    port: defaultPort,
    historyApiFallback: true,
    headers: {'Access-Control-Allow-Origin': '*'},
    // proxy: devServerProxyConfig,
    hot: true,
    overlay: false,
    host: devServerHost,
};
