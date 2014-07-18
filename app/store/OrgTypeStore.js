Ext.define('monitoring.store.OrgTypeStore', {
    extend: 'Ext.data.Store',
    model: 'monitoring.model.OrgType',
    pageSize: 50,
    proxy: {
        type: 'ajax',
        url: 'app/php/actions/getorgtype.php',
        reader: {
            type: 'json',
            root: 'orgtypes'
        }
    }
});
