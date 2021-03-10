/**
 * Created by: Luke Captain (lukecaptaincode@gmail.com)
 * Reconfigure default HMR behavior, now it clears your console on every
 * codebase update
 */
console.log('isDevServer?:' + IS_DEV_SERVER);
if (IS_DEV_SERVER) {
    if (module.hot) {
        module.hot.accept();
        module.hot.addStatusHandler((status) => {
            if (status === 'prepare') console.clear();
        });
    }
}
