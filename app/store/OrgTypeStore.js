Ext.define('monitoring.store.OrgTypeStore', {
    extend: 'Ext.data.Store',
    model: 'monitoring.model.OrgType',
    autoLoad: true,
    itemId:'orgTypeStore',
    pageSize: 50,
    proxy: {
        type: 'ajax',
        url: 'app/php/actions/getorgtype.php',
        reader: {
            type: 'json',
            rootProperty: 'orgtypes'
        }
    }
});
