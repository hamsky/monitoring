Ext.define('monitoring.store.UserTypeStore', {
    extend: 'Ext.data.Store',
    model: 'monitoring.model.UserType',
    pageSize: 50,
    autoLoad:true,
    proxy: {
        type: 'ajax',
        url: 'app/php/actions/getutype.php',
        reader: {
            type: 'json',
            rootProperty: 'utypes'
        }
    }
});
