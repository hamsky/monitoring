Ext.define('monitoring.store.RepSrvStore', {
    extend: 'Ext.data.Store',
    fields: ['id', 'service'],
    pageSize: 30,
    autoLoad:true,
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'repservices'
        }, api: {
            read: 'app/php/actions/getrepservices.php'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            allowSingle: false,
            encode: true,
            rootProperty: 'repservices'
        }
    }

});

