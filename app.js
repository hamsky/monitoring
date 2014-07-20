/* 
 * @Date: 28.06.2014
 * @Author: Hamsky
 */

Ext.application({
    name: 'monitoring',
    autoCreateViewport: true,
    controllers: [
        'AppController'
    ],
    launch: function() {
        console.log('Application started');
      // var i= Ext.create('monitoring.store.UserStore').load();
    }
});