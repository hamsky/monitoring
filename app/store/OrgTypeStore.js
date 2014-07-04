Ext.define('monitoring.store.OrgTypeStore', {
    extend: 'Ext.data.Store',
    model: 'OrgType',
    pageSize: 50,
    proxy: {
        type: 'ajax',
        url: 'monitoring/actions/getiogv.php',//!!
        reader: {
            type: 'json',
            root: 'iogvs'
        }
    }
});
