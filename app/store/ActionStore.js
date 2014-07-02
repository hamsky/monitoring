Ext.define('monitoring.store.ActionStore', {
    extend: 'Ext.data.TreeStore',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/tmenu.php',
        node: 'id'
    }
});