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
        Ext.tip.QuickTipManager.init();
        console.log('Application started');
      //  var i = Ext.create('moniroring.store.ReportStore');
        //i.load();
    }
});