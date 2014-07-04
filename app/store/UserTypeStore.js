Ext.define('monitoring.store.UserTypeStore', {
    extend: 'Ext.data.Store',
    model: 'UserType',
    pageSize: 50,
    proxy: {
        type: 'ajax',
        url: 'monitoring/actions/getutype.php',//!!
        reader: {
            type: 'json',
            root: 'utypes'
        }
    }
});
