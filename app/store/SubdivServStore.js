Ext.define('monitoring.store.SubdivServStore', {
    extend: 'Ext.data.Store',
    model: 'monitoring.model.SubdivServ',
    pageSize: 30,
    limit: 30,
    autoLoad: true,
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'services'
        },
        api: {
            read: 'app/php/actions/getsubdivsrv.php',
            destroy: 'app/php/actions/deletesubdivsrv.php'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            allowSingle: false,
            encode: true,
            rootProperty: 'services'
        }
    }
});

