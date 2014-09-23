Ext.define('monitoring.store.IogvStore', {
    extend: 'Ext.data.Store',
    fields: ['id', 'iogv', 'manage', 'type'],
    pageSize: 30,
    autoLoad: true,
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'orglist'
        }, api: {
            read: 'app/php/actions/getiogv.php',
            destroy: 'app/php/actions/deleteomsu.php'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            allowSingle: false,
            encode: true,
            rootProperty: 'orglist'
        }
    }
});


