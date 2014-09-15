Ext.define('monitoring.store.ServicesStore', {
    extend: 'Ext.data.Store',
    fields: ['id', 'service'],
    pageSize: 30,
    autoLoad:true,
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'services'
        }, api: {
            read: 'app/php/actions/getservices.php'
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


