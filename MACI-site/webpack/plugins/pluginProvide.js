/**
 * Created by: Luke Captain (lukecaptaincode@gmail.com)
 * @example
 *  const config = {
 *       $: 'jquery',
 *  }
 */
import {ProvidePlugin} from 'webpack';

const config = {};

export const providePlugin = new ProvidePlugin(config);
