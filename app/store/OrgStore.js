Ext.define('monitoring.store.OrgStore', {
    extend: 'Ext.data.Store',
    model: 'monitoring.model.Org',
    pageSize: 100,
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/actions/getorgs.php',
        reader: {
            type: 'json',
            rootProperty: 'orgs'
        }
    }
});


