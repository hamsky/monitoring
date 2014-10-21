Ext.define('monitoring.store.InfStore', {
    extend: 'Ext.data.Store',
    fields: ['id', 'name'],
    pageSize: 30,
    autoLoad: true,
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'inf'
        }, api: {
            read: 'app/php/actions/getinformation.php',
            destroy: 'app/php/actions/deleteinformation.php'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            allowSingle: false,
            encode: true,
            rootProperty: 'inf'
        }
    }
});